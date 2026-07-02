import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { type ContentType } from "../lib/track";
import { showToast } from "../lib/toast";

// ─────────────────────────────────────────────────────────────────────────────
// Modal de Exportação — specs exatas do Figma (nodes 1:4788 / 1:4821).
//  600px · p32 · gap32 · radius24 · shadow 0 4 6 rgba(13,7,18,.16)
//  Card selecionado: borda 2px #46b2ff, bg rgba(70,178,255,.03)
//  Botão "Exportar": #0032be, Regular 16px, radius14, p14, largura total
// ─────────────────────────────────────────────────────────────────────────────

type Variant = "atividade" | "plano";
type Format = "pdf" | "docx";

interface Props {
  open: boolean;
  onClose: () => void;
  contentType: ContentType;
  variant: Variant;
  entryPoint?: "action_bar" | "edit_alert";
  initialFormat?: Format;
  materialLabel: string;
}

const BLUE = "#46b2ff";
const PRIMARY = "#0032be";

export function ExportModal({ open, onClose, variant, initialFormat = "pdf", materialLabel }: Props) {
  const [format, setFormat] = useState<Format>(initialFormat);
  const isAtividade = variant === "atividade";
  const [optionOn, setOptionOn] = useState(true);

  useEffect(() => {
    if (!open) return;
    setFormat(initialFormat);
    setOptionOn(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const handleExport = () => {
    onClose();
    showToast("Exportação realizada com sucesso!", `${materialLabel} em ${format.toUpperCase()} pronto para download.`);
  };

  const title = isAtividade ? "Exportar Atividade" : "Exportar Plano de Aula";
  const toggleLabel = isAtividade ? "Incluir respostas/gabarito" : "Incluir adaptações";

  return createPortal(
    <div
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 900, animation: "ftd-fade 0.18s ease",
      }}
    >
      <div
        style={{
          width: 600, background: "#fff", borderRadius: 24, padding: 32,
          display: "flex", flexDirection: "column", gap: 32,
          boxShadow: "0 4px 6px rgba(13,7,18,0.16), 0 24px 60px rgba(13,7,18,0.10)",
          fontFamily: "Poppins, sans-serif", animation: "ftd-pop 0.2s cubic-bezier(0.16,1,0.3,1)",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span style={{ fontSize: 20, fontWeight: 600, color: "#000" }}>{title}</span>
          <button onClick={onClose} aria-label="Fechar" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#0a0a0a", lineHeight: 0, padding: 0, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Format cards */}
        <div style={{ display: "flex", gap: 20, width: "100%" }}>
          <FormatCard active={format === "pdf"} onClick={() => setFormat("pdf")} label="Formato PDF" desc="Ideal para impressão e visualização" kind="pdf" />
          <FormatCard active={format === "docx"} onClick={() => setFormat("docx")} label="Formato DOCX" desc="Editável no Word e Google Docs" kind="docx" />
        </div>

        {/* Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>{toggleLabel}</span>
          <Toggle on={optionOn} onClick={() => setOptionOn((v) => !v)} />
        </div>

        {/* Export button */}
        <button
          onClick={handleExport}
          style={{
            width: "100%", padding: 14, border: "none", borderRadius: 14, background: PRIMARY,
            color: "#fff", fontSize: 16, fontWeight: 400, cursor: "pointer", fontFamily: "Poppins, sans-serif",
          }}
        >
          Exportar
        </button>
      </div>

      <style>{`
        @keyframes ftd-fade{from{opacity:0}to{opacity:1}}
        @keyframes ftd-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}
      `}</style>
    </div>,
    document.body,
  );
}

function FormatCard({ active, onClick, label, desc, kind }: { active: boolean; onClick: () => void; label: string; desc: string; kind: "pdf" | "docx" }) {
  const iconColor = kind === "pdf" ? "#ef4444" : "#2f6fed";
  return (
    <button
      onClick={onClick}
      style={{
        flex: "1 0 0", minWidth: 0, textAlign: "left", cursor: "pointer",
        display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start",
        borderRadius: 16, padding: 20,
        background: active ? "rgba(70,178,255,0.03)" : "#fff",
        border: active ? `2px solid ${BLUE}` : "1px solid #e2e8f0",
        fontFamily: "Poppins, sans-serif", transition: "all 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%" }}>
        <span style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {kind === "pdf" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /><path d="m9 15 2 2 4-4" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /><path d="M8 13h8" /><path d="M8 17h8" />
            </svg>
          )}
        </span>
        <Radio active={active} />
      </div>
      <span style={{ fontSize: 16, fontWeight: 600, color: "#000" }}>{label}</span>
      <span style={{ fontSize: 12, color: "#64748b", lineHeight: 1.35 }}>{desc}</span>
    </button>
  );
}

function Radio({ active }: { active: boolean }) {
  return (
    <span style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid ${active ? BLUE : "#cbd5e1"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {active && <span style={{ width: 10, height: 10, borderRadius: "50%", background: BLUE }} />}
    </span>
  );
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick} role="switch" aria-checked={on}
      style={{ width: 40, height: 20, borderRadius: 999, border: "none", cursor: "pointer", background: on ? BLUE : "#cbced4", position: "relative", transition: "background 0.15s", flexShrink: 0 }}
    >
      <span style={{ position: "absolute", top: 2, left: on ? 22 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left 0.15s", boxShadow: "0 1px 2px rgba(0,0,0,0.25)" }} />
    </button>
  );
}

import { useEffect, useState } from "react";
import { type ContentType } from "../lib/track";
import { showToast } from "../lib/toast";

// ─────────────────────────────────────────────────────────────────────────────
// Modal de Exportação — compartilhado por Atividade, Atividade Inclusiva e Plano.
// Notas 10/11/14 do handoff.
//  · Cards PDF (default) / DOCX — seleção exclusiva
//  · Toggle: "Incluir respostas/gabarito" (Atividade) | "Incluir adaptações" (Plano) — ON por default
//  · Botão Exportar azul, largura total
//  · Confirmação: toast verde de sucesso (auto-dismiss ~4s)
// ─────────────────────────────────────────────────────────────────────────────

type Variant = "atividade" | "plano";
type Format = "pdf" | "docx";

interface Props {
  open: boolean;
  onClose: () => void;
  contentType: ContentType;
  variant: Variant;
  /** Origem do clique: barra de ações ou alerta de edição. */
  entryPoint?: "action_bar" | "edit_alert";
  /** Formato pré-selecionado (o alerta de edição sugere DOCX). */
  initialFormat?: Format;
  /** Nome legível do material para o toast de sucesso. */
  materialLabel: string;
}

export function ExportModal({
  open,
  onClose,
  contentType,
  variant,
  entryPoint = "action_bar",
  initialFormat = "pdf",
  materialLabel,
}: Props) {
  const [format, setFormat] = useState<Format>(initialFormat);
  const isAtividade = variant === "atividade";
  const [optionOn, setOptionOn] = useState(true);

  // Reset + evento de abertura sempre que o modal abre
  useEffect(() => {
    if (!open) return;
    setFormat(initialFormat);
    setOptionOn(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleDismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const handleDismiss = () => {
    onClose();
  };

  const toggleOption = () => setOptionOn((v) => !v);

  const pickFormat = (f: Format) => setFormat(f);

  const handleExport = () => {
    onClose();
    showToast(
      "Exportação realizada com sucesso!",
      `${materialLabel} em ${format.toUpperCase()} pronto para download.`,
    );
  };

  const title = isAtividade ? "Exportar Atividade" : "Exportar Plano de Aula";
  const toggleLabel = isAtividade ? "Incluir respostas / gabarito" : "Incluir adaptações";
  const toggleHelp = isAtividade
    ? "Adiciona uma página de gabarito ao final do arquivo."
    : "Mantém as adaptações do perfil no arquivo exportado.";

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && handleDismiss()}
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(15,23,42,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 900,
        animation: "ftd-fade 0.18s ease",
      }}
    >
      <div
        style={{
          width: 440,
          background: "#fff",
          borderRadius: 16,
          padding: "22px 24px 24px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
          fontFamily: "Poppins, sans-serif",
          animation: "ftd-pop 0.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "#eaf4ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0032be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#0a0a0a" }}>{title}</div>
              <div style={{ fontSize: 12, color: "#888" }}>Escolha o formato do arquivo</div>
            </div>
          </div>
          <button onClick={handleDismiss} aria-label="Fechar" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#6b7280", lineHeight: 0, padding: 4 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Format cards */}
        <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
          <FormatCard
            active={format === "pdf"}
            onClick={() => pickFormat("pdf")}
            label="Formato PDF"
            desc="Ideal para imprimir"
            accent="#e11d48"
          />
          <FormatCard
            active={format === "docx"}
            onClick={() => pickFormat("docx")}
            label="Formato DOCX"
            desc="Editável no Word"
            accent="#2563eb"
          />
        </div>

        {/* Toggle option */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginTop: 18,
            padding: "12px 14px",
            background: "#f8fafc",
            border: "1px solid #eef2f6",
            borderRadius: 10,
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#0f172b" }}>{toggleLabel}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{toggleHelp}</div>
          </div>
          <Toggle on={optionOn} onClick={toggleOption} />
        </div>

        {/* Export button */}
        <button
          onClick={handleExport}
          style={{
            marginTop: 20,
            width: "100%",
            height: 44,
            border: "none",
            borderRadius: 12,
            background: "#0032be",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Exportar
        </button>
      </div>

      <style>{`
        @keyframes ftd-fade{from{opacity:0}to{opacity:1}}
        @keyframes ftd-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}
      `}</style>
    </div>
  );
}

function FormatCard({
  active, onClick, label, desc, accent,
}: {
  active: boolean; onClick: () => void; label: string; desc: string; accent: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        textAlign: "left",
        cursor: "pointer",
        borderRadius: 12,
        padding: "14px 14px 12px",
        background: active ? "#f0f6ff" : "#fff",
        border: `1.5px solid ${active ? "#0032be" : "#e5e7eb"}`,
        transition: "all 0.15s",
        fontFamily: "Poppins, sans-serif",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: `${accent}1a`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" />
          </svg>
        </div>
        <RadioDot active={active} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172b", marginTop: 10 }}>{label}</div>
      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{desc}</div>
    </button>
  );
}

function RadioDot({ active }: { active: boolean }) {
  return (
    <span
      style={{
        width: 18, height: 18, borderRadius: "50%",
        border: `2px solid ${active ? "#0032be" : "#cbd5e1"}`,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}
    >
      {active && <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#0032be" }} />}
    </span>
  );
}

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={on}
      style={{
        width: 42, height: 24, borderRadius: 999, border: "none", cursor: "pointer",
        background: on ? "#0032be" : "#cbced4", position: "relative", transition: "background 0.15s", flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute", top: 3, left: on ? 21 : 3,
          width: 18, height: 18, borderRadius: "50%", background: "#fff",
          transition: "left 0.15s", boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
        }}
      />
    </button>
  );
}

import { useState } from "react";
import { type ContentType } from "../lib/track";
import { showToast } from "../lib/toast";

// ─────────────────────────────────────────────────────────────────────────────
// Edição inline de conteúdo — notas 4–8 do handoff.
//  · Modo leitura: texto + botão "Editar" (lápis)
//  · Modo edição: input/textarea + [✦ Reescrever com IA] [Cancelar] [Salvar alterações]
//  · Reescrever com IA: loading (~1,6s) → texto reescrito disponível para salvar
//  · Salvar: grava o texto e restaura o modo leitura
//  · Cancelar: descarta as alterações
// ─────────────────────────────────────────────────────────────────────────────

type FieldType = "titulo" | "campo_curto" | "secao_longa" | "momento";

interface Props {
  value: string;
  onChange: (next: string) => void;
  contentType: ContentType;
  fieldType: FieldType;
  sectionName?: string;
  multiline?: boolean;
  /** Estilo do texto em modo leitura. */
  readStyle?: React.CSSProperties;
}

export function EditableText({
  value, onChange, contentType, fieldType, sectionName, multiline = true, readStyle,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [aiLoading, setAiLoading] = useState(false);
  const [wasAi, setWasAi] = useState(false);
  const [hover, setHover] = useState(false);

  const enter = () => {
    setDraft(value);
    setWasAi(false);
    setEditing(true);
  };

  const cancel = () => {
    setEditing(false);
    setAiLoading(false);
    setWasAi(false);
    setDraft(value);
  };

  const save = () => {
    onChange(draft);
    setEditing(false);
    setWasAi(false);
    showToast("Alterações salvas!", "O conteúdo foi atualizado.");
  };

  const rewriteAI = () => {
    setAiLoading(true);
    window.setTimeout(() => {
      setDraft(simulateRewrite(draft));
      setWasAi(true);
      setAiLoading(false);
    }, 1600);
  };

  // ── Modo leitura ──
  if (!editing) {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ position: "relative", display: "block" }}
      >
        <span style={readStyle}>{value}</span>
        <button
          onClick={enter}
          title="Editar"
          aria-label="Editar"
          style={{
            marginLeft: 8, verticalAlign: "middle",
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "3px 9px", borderRadius: 7, cursor: "pointer",
            border: "1px solid #e5e7eb",
            background: hover ? "#f0f6ff" : "#fff",
            color: hover ? "#0032be" : "#64748b",
            fontSize: 11.5, fontFamily: "Poppins, sans-serif",
            transition: "all 0.15s", opacity: hover ? 1 : 0.55,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          </svg>
          Editar
        </button>
      </div>
    );
  }

  // ── Modo edição ──
  return (
    <div style={{ border: "1.5px solid #0032be", borderRadius: 10, padding: 12, background: "#fbfdff" }}>
      {aiLoading ? (
        <div style={{ display: "flex", alignItems: "center", gap: 10, minHeight: multiline ? 74 : 34, padding: "6px 4px" }}>
          <span className="ftd-spin" style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid #c7d2e8", borderTopColor: "#0032be", display: "inline-block" }} />
          <span style={{ fontSize: 13, color: "#0032be", fontWeight: 500 }}>Reescrevendo com IA…</span>
          <style>{`.ftd-spin{animation:ftd-rot 0.7s linear infinite}@keyframes ftd-rot{to{transform:rotate(360deg)}}`}</style>
        </div>
      ) : multiline ? (
        <textarea
          value={draft}
          onChange={(e) => { setDraft(e.target.value); setWasAi(false); }}
          autoFocus
          style={{
            width: "100%", minHeight: 90, resize: "vertical",
            border: "1px solid #dbe3ef", borderRadius: 8, padding: "10px 12px",
            fontSize: 13, lineHeight: 1.7, color: "#0f172b",
            fontFamily: "Poppins, sans-serif", outline: "none", background: "#fff",
          }}
        />
      ) : (
        <input
          value={draft}
          onChange={(e) => { setDraft(e.target.value); setWasAi(false); }}
          autoFocus
          style={{
            width: "100%", border: "1px solid #dbe3ef", borderRadius: 8,
            padding: "9px 12px", fontSize: 14, color: "#0f172b",
            fontFamily: "Poppins, sans-serif", outline: "none", background: "#fff",
          }}
        />
      )}

      {wasAi && !aiLoading && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8, fontSize: 11.5, color: "#7c3aed" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          </svg>
          Texto reescrito pela IA — revise e salve.
        </div>
      )}

      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginTop: 12 }}>
        <button
          onClick={rewriteAI}
          disabled={aiLoading}
          style={{
            display: "flex", alignItems: "center", gap: 7,
            padding: "8px 13px", borderRadius: 9, cursor: aiLoading ? "default" : "pointer",
            border: "1px solid #ddd6fe", background: "#f5f3ff", color: "#7c3aed",
            fontSize: 12.5, fontWeight: 500, fontFamily: "Poppins, sans-serif",
            opacity: aiLoading ? 0.6 : 1,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          </svg>
          Reescrever com IA
        </button>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={cancel}
            style={{ padding: "8px 14px", borderRadius: 9, border: "1px solid #e5e7eb", background: "#fff", color: "#475569", fontSize: 12.5, cursor: "pointer", fontFamily: "Poppins, sans-serif" }}
          >
            Cancelar
          </button>
          <button
            onClick={save}
            disabled={aiLoading}
            style={{
              padding: "8px 14px", borderRadius: 9, border: "none",
              background: "#0032be", color: "#fff", fontSize: 12.5, fontWeight: 600,
              cursor: aiLoading ? "default" : "pointer", opacity: aiLoading ? 0.6 : 1,
              display: "flex", alignItems: "center", gap: 6, fontFamily: "Poppins, sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" /><path d="M17 21v-8H7v8" /><path d="M7 3v5h8" />
            </svg>
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  );
}

// Simulação de reescrita por IA — deixa o texto mais direto/acessível (mock de protótipo).
function simulateRewrite(text: string): string {
  const t = text.trim().replace(/\s+/g, " ");
  const simpler = t
    .replace(/\bpossibilitando\b/gi, "para permitir")
    .replace(/\butilizar\b/gi, "usar")
    .replace(/\brealizar\b/gi, "fazer")
    .replace(/\bpor meio de\b/gi, "com")
    .replace(/\bcompreender\b/gi, "entender")
    .replace(/\bdemonstrar\b/gi, "mostrar");
  return `Versão adaptada (linguagem mais acessível): ${simpler.charAt(0).toLowerCase()}${simpler.slice(1)}`;
}

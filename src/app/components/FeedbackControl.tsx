import { useState } from "react";
import { type ContentType } from "../lib/track";
import { showToast } from "../lib/toast";

// ─────────────────────────────────────────────────────────────────────────────
// Feedback do usuário — notas 18–27 do handoff.
//  · 👍 envia direto + toast de confirmação
//  · 👎 abre modal "O que podemos melhorar?" (motivos + comentário)
//       → Enviar: registra o feedback e mostra toast
//       → Cancelar/X: fecha sem enviar
// ─────────────────────────────────────────────────────────────────────────────

const REASONS: { id: string; label: string }[] = [
  { id: "conteudo_inadequado", label: "Conteúdo inadequado" },
  { id: "muito_dificil", label: "Muito difícil" },
  { id: "muito_facil", label: "Muito fácil" },
  { id: "fora_do_tema", label: "Fora do tema" },
  { id: "erros_no_conteudo", label: "Erros no conteúdo" },
  { id: "nao_segue_bncc", label: "Não segue a BNCC" },
];

const REASONS_PLANO: { id: string; label: string }[] = [
  { id: "adaptacao_inadequada", label: "Adaptação inadequada" },
  { id: "estrutura_confusa", label: "Estrutura confusa" },
];

const MAX_COMMENT = 200;

type Sent = null | "positive" | "negative";

export function FeedbackControl({ contentType }: { contentType: ContentType }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState<Sent>(null);

  const sendPositive = () => {
    setSent("positive");
    showToast("Feedback enviado!", "Obrigado! Sua avaliação ajuda a melhorar os materiais.");
  };

  const openNegative = () => setModalOpen(true);

  if (sent) {
    return (
      <div style={barStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span style={{ fontSize: 12.5, color: "#16a34a", fontWeight: 500 }}>Obrigado pelo feedback!</span>
      </div>
    );
  }

  return (
    <>
      <div style={barStyle}>
        <span style={{ fontSize: 12.5, color: "#64748b" }}>Esse material foi útil?</span>
        <IconBtn label="Gostei" onClick={sendPositive} kind="up" />
        <IconBtn label="Não gostei" onClick={openNegative} kind="down" />
      </div>

      {modalOpen && (
        <FeedbackModal
          contentType={contentType}
          onClose={() => setModalOpen(false)}
          onSubmit={() => {
            setSent("negative");
            setModalOpen(false);
            showToast("Feedback enviado!", "Obrigado! Vamos usar isso para melhorar este material.");
          }}
        />
      )}
    </>
  );
}

const barStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 10px",
  border: "1px solid #eef2f6",
  borderRadius: 10,
  background: "#fff",
};

function IconBtn({ onClick, label, kind }: { onClick: () => void; label: string; kind: "up" | "down" }) {
  const [hover, setHover] = useState(false);
  const color = kind === "up" ? "#16a34a" : "#dc2626";
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 30, height: 30, borderRadius: 8, cursor: "pointer",
        border: `1px solid ${hover ? color : "#e5e7eb"}`,
        background: hover ? `${color}12` : "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.15s",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={hover ? color : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {kind === "up" ? (
          <><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></>
        ) : (
          <><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" /></>
        )}
      </svg>
    </button>
  );
}

// ─── Modal de motivos ─────────────────────────────────────────────────────────
function FeedbackModal({
  contentType, onClose, onSubmit,
}: {
  contentType: ContentType;
  onClose: (cancelled: boolean) => void;
  onSubmit: (reasons: string[], comment: string) => void;
}) {
  const reasons = contentType === "plano_de_aula" ? [...REASONS, ...REASONS_PLANO] : REASONS;
  const [selected, setSelected] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const canSend = selected.length > 0 || comment.trim().length > 0;

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && onClose(true)}
      style={{
        position: "absolute", inset: 0, background: "rgba(15,23,42,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 900, animation: "ftd-fade 0.18s ease",
      }}
    >
      <div style={{ width: 460, background: "#fff", borderRadius: 16, padding: "22px 24px 24px", boxShadow: "0 24px 60px rgba(0,0,0,0.28)", fontFamily: "Poppins, sans-serif", animation: "ftd-pop 0.2s cubic-bezier(0.16,1,0.3,1)" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
              </svg>
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#0a0a0a" }}>O que podemos melhorar?</div>
          </div>
          <button onClick={() => onClose(true)} aria-label="Fechar" style={{ background: "transparent", border: "none", cursor: "pointer", color: "#6b7280", lineHeight: 0, padding: 4 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div style={{ fontSize: 12.5, color: "#64748b", margin: "10px 0 10px" }}>
          Selecione os motivos <span style={{ color: "#94a3b8" }}>(pode escolher mais de um)</span>
        </div>

        {/* Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {reasons.map((r) => {
            const on = selected.includes(r.id);
            return (
              <button
                key={r.id}
                onClick={() => toggle(r.id)}
                style={{
                  cursor: "pointer", fontFamily: "Poppins, sans-serif",
                  fontSize: 12.5, padding: "7px 13px", borderRadius: 999,
                  border: `1.5px solid ${on ? "#dc2626" : "#e5e7eb"}`,
                  background: on ? "#fef2f2" : "#fff",
                  color: on ? "#dc2626" : "#475569",
                  fontWeight: on ? 500 : 400, transition: "all 0.12s",
                  display: "flex", alignItems: "center", gap: 6,
                }}
              >
                {on && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
                {r.label}
              </button>
            );
          })}
        </div>

        {/* Comment */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
            <label style={{ fontSize: 12.5, color: "#475569" }}>Comentário <span style={{ color: "#94a3b8" }}>(opcional)</span></label>
            <span style={{ fontSize: 11, color: "#94a3b8" }}>{comment.length}/{MAX_COMMENT}</span>
          </div>
          <textarea
            value={comment}
            maxLength={MAX_COMMENT}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Conte com suas palavras o que não funcionou…"
            style={{
              width: "100%", minHeight: 74, resize: "none",
              border: "1px solid #e5e7eb", borderRadius: 10, padding: "10px 12px",
              fontSize: 13, color: "#0f172b", fontFamily: "Poppins, sans-serif",
              outline: "none", background: "#f8fafc",
            }}
          />
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
          <button
            onClick={() => onClose(true)}
            style={{ padding: "10px 18px", borderRadius: 10, border: "1px solid #e5e7eb", background: "#fff", color: "#475569", fontSize: 13, cursor: "pointer", fontFamily: "Poppins, sans-serif" }}
          >
            Cancelar
          </button>
          <button
            onClick={() => canSend && onSubmit(selected, comment)}
            disabled={!canSend}
            style={{
              padding: "10px 18px", borderRadius: 10, border: "none",
              background: canSend ? "#0032be" : "#c7d2e8",
              color: "#fff", fontSize: 13, fontWeight: 600,
              cursor: canSend ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", gap: 7, fontFamily: "Poppins, sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Enviar feedback
          </button>
        </div>
      </div>
    </div>
  );
}

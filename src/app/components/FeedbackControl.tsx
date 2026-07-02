import { useState } from "react";
import { createPortal } from "react-dom";
import { type ContentType } from "../lib/track";
import { showToast } from "../lib/toast";

// ─────────────────────────────────────────────────────────────────────────────
// Feedback do usuário — 👍 e 👎 abrem modal com comentário (item 2).
//  Negativo: "O que podemos melhorar?" (chips vermelhos)
//  Positivo: "O que você mais gostou?" (chips verdes)
// ─────────────────────────────────────────────────────────────────────────────

const REASONS_NEG = ["Conteúdo inadequado", "Questões muito difíceis", "Questões muito fáceis", "Fora do tema", "Outro"];
const REASONS_POS = ["Conteúdo relevante", "Bem estruturado", "Nível adequado", "Boa adaptação", "Fácil de usar"];
const MAX_COMMENT = 200;
const PRIMARY = "#0032be";
const RED = "#ef4444";
const GREEN = "#16a34a";

type Rating = "positive" | "negative";

export function FeedbackControl({ contentType: _contentType }: { contentType: ContentType }) {
  const [modal, setModal] = useState<Rating | null>(null);
  const [sent, setSent] = useState<Rating | null>(null);

  if (sent) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        <span style={{ fontSize: 12.5, color: GREEN, fontWeight: 500 }}>Obrigado pelo feedback!</span>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <TriggerThumb kind="up" label="Gostei" onClick={() => setModal("positive")} />
        <TriggerThumb kind="down" label="Não gostei" onClick={() => setModal("negative")} />
      </div>

      {modal && (
        <FeedbackModal
          rating={modal}
          onClose={() => setModal(null)}
          onSubmit={() => {
            setSent(modal);
            setModal(null);
            showToast("Feedback enviado!", modal === "positive"
              ? "Que bom que gostou! Sua avaliação ajuda a melhorar os materiais."
              : "Obrigado! Vamos usar isso para melhorar este material.");
          }}
        />
      )}
    </>
  );
}

function TriggerThumb({ kind, label, onClick }: { kind: "up" | "down"; label: string; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  const color = kind === "up" ? GREEN : RED;
  return (
    <button
      onClick={onClick} aria-label={label} title={label}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: 48, height: 48, borderRadius: 14, cursor: "pointer", border: "none",
        background: hover ? (kind === "up" ? "#dcfce7" : "#fee2e2") : "#f5f5f5",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
      }}
    >
      <ThumbIcon kind={kind} color={hover ? color : "#666"} size={24} />
    </button>
  );
}

function ThumbIcon({ kind, color, size = 18 }: { kind: "up" | "down"; color: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {kind === "up"
        ? <><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /></>
        : <><path d="M17 14V2" /><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" /></>}
    </svg>
  );
}

function FeedbackModal({ rating, onClose, onSubmit }: { rating: Rating; onClose: () => void; onSubmit: () => void }) {
  const positive = rating === "positive";
  const accent = positive ? GREEN : RED;
  const tint = positive ? "#f0fdf4" : "#fef2f2";
  const reasons = positive ? REASONS_POS : REASONS_NEG;
  const title = positive ? "O que você mais gostou?" : "O que podemos melhorar?";
  const commentLabel = positive ? "Conte o que funcionou bem" : "Descreva o problema";

  const [selected, setSelected] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const toggle = (r: string) => setSelected((s) => (s.includes(r) ? s.filter((x) => x !== r) : [...s, r]));
  const canSend = positive ? true : (selected.length > 0 || comment.trim().length > 0);

  return createPortal(
    <div onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 900, animation: "ftd-fade 0.18s ease" }}>
      <div style={{ width: 600, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 24, boxShadow: "0 4px 6px rgba(13,7,18,0.16), 0 24px 60px rgba(13,7,18,0.10)", fontFamily: "Poppins, sans-serif", animation: "ftd-pop 0.2s cubic-bezier(0.16,1,0.3,1)", boxSizing: "border-box" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: "#000" }}>{title}</span>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ width: 46, height: 48, borderRadius: 10, background: positive ? tint : "#f5f5f5", border: positive ? `2px solid ${GREEN}` : "none", opacity: positive ? 1 : 0.3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ThumbIcon kind="up" color={positive ? GREEN : "#666"} size={22} />
            </span>
            <span style={{ width: 48, height: 48, borderRadius: 10, background: !positive ? tint : "#f5f5f5", border: !positive ? `2px solid ${RED}` : "none", opacity: !positive ? 1 : 0.3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ThumbIcon kind="down" color={!positive ? RED : "#666"} size={22} />
            </span>
          </div>
        </div>

        {/* Chips (apenas no feedback negativo; positivo é só comentário) */}
        {!positive && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#64748b" }}>Selecione os motivos:</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {reasons.map((r) => {
                const on = selected.includes(r);
                return (
                  <button key={r} onClick={() => toggle(r)}
                    style={{ cursor: "pointer", fontFamily: "Poppins, sans-serif", fontSize: 13, padding: "6px 12px", borderRadius: 20, border: `1px solid ${on ? accent : "#e2e8f0"}`, background: on ? tint : "#fff", color: on ? accent : "#64748b", transition: "all 0.12s" }}>
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Comentário */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "100%" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#64748b" }}>{commentLabel} <span style={{ fontWeight: 400 }}>(opcional)</span></span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>{comment.length}/{MAX_COMMENT}</span>
          </div>
          <textarea value={comment} maxLength={MAX_COMMENT} onChange={(e) => setComment(e.target.value)} placeholder="Sua mensagem aqui..."
            style={{ width: "100%", height: 100, resize: "none", background: "#f8fafc", border: "1px solid #f5f5f5", borderRadius: 12, padding: 16, fontSize: 14, color: "#0f172b", fontFamily: "Poppins, sans-serif", outline: "none", boxSizing: "border-box" }} />
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 18, width: "100%" }}>
          <button onClick={onClose} style={{ padding: "13px 20px", border: "none", background: "transparent", color: "#666", fontSize: 16, cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>Cancelar</button>
          <button onClick={() => canSend && onSubmit()} disabled={!canSend}
            style={{ padding: "13px 20px", border: "none", borderRadius: 14, background: canSend ? PRIMARY : "#c7d2e8", color: "#fff", fontSize: 16, fontWeight: 600, cursor: canSend ? "pointer" : "not-allowed", display: "flex", alignItems: "center", gap: 8, fontFamily: "Poppins, sans-serif" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Enviar feedback
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

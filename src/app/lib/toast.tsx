import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Toast de confirmação — verde de sucesso, canto superior direito.
// Auto-dismiss em ~4s + botão X. Fiel às notas 12/15/20/22/25/27 do handoff.
// Emitter em nível de módulo para poder ser chamado de qualquer tela.
// ─────────────────────────────────────────────────────────────────────────────

export type ToastVariant = "success" | "info";

export interface ToastItem {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

type Listener = (items: ToastItem[]) => void;

let items: ToastItem[] = [];
let listeners: Listener[] = [];
let seq = 0;
const AUTO_DISMISS_MS = 4000;

function emit() {
  for (const l of listeners) l(items);
}

export function showToast(
  title: string,
  description?: string,
  variant: ToastVariant = "success",
): number {
  const id = ++seq;
  items = [...items, { id, title, description, variant }];
  emit();
  window.setTimeout(() => dismissToast(id), AUTO_DISMISS_MS);
  return id;
}

export function dismissToast(id: number) {
  items = items.filter((t) => t.id !== id);
  emit();
}

// ─── Host — renderizado uma vez no App, fora do canvas escalado ───────────────
export function ToastHost() {
  const [list, setList] = useState<ToastItem[]>(items);

  useEffect(() => {
    const l: Listener = (next) => setList([...next]);
    listeners.push(l);
    return () => {
      listeners = listeners.filter((x) => x !== l);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 2000,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        pointerEvents: "none",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      {list.map((t) => (
        <ToastCard key={t.id} item={t} onClose={() => dismissToast(t.id)} />
      ))}
    </div>
  );
}

function ToastCard({ item, onClose }: { item: ToastItem; onClose: () => void }) {
  const isSuccess = item.variant === "success";
  return (
    <div
      style={{
        pointerEvents: "auto",
        minWidth: 320,
        maxWidth: 420,
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        background: isSuccess ? "#f0fdf4" : "#eff6ff",
        border: `1px solid ${isSuccess ? "#bbf7d0" : "#bfdbfe"}`,
        borderLeft: `5px solid ${isSuccess ? "#22c55e" : "#3b82f6"}`,
        borderRadius: 12,
        padding: "14px 16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
        animation: "ftd-toast-in 0.28s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isSuccess ? "#16a34a" : "#2563eb"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, marginTop: 1 }}
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>{item.title}</div>
        {item.description && (
          <div style={{ fontSize: 12, color: "#4b5563", marginTop: 2, lineHeight: 1.5 }}>
            {item.description}
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        aria-label="Fechar"
        style={{
          flexShrink: 0,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 2,
          color: "#6b7280",
          lineHeight: 0,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </button>
      <style>{`@keyframes ftd-toast-in{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}`}</style>
    </div>
  );
}

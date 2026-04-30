import { useState } from "react";
import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
}

const ITEMS = [
  { title: "Metodologias_ativas_Aprendizagem_por_argumentacao_cientifica", date: "23 Jan, 2026", cat: "Materiais de Apoio" },
  { title: "Metodologias_ativas_Trabalho_de_campo",                        date: "23 Jan, 2026", cat: "Materiais de Apoio" },
  { title: "Metodologias_ativas_Tecnologias_dialogo_nas_diferencas",       date: "23 Jan, 2026", cat: "Materiais de Apoio" },
  { title: "Metodologias_ativas_Sequencias_didaticas",                     date: "23 Jan, 2026", cat: "Materiais de Apoio" },
  { title: "Metodologias_ativas_Resolucao_de_problemas",                   date: "23 Jan, 2026", cat: "Materiais de Apoio" },
  { title: "Metodologias_ativas_Projetos_interdisciplinares",              date: "23 Jan, 2026", cat: "Materiais de Apoio" },
];

const TOTAL_PAGES = 73; // 874 itens ÷ 12 por página ≈ 73 páginas

/** Ícone de livros — igual ao item "Biblioteca" no menu lateral */
function BookIcon({ stroke = "#fff", size = 26 }: { stroke?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

/** Decorative arrow-chevron pattern used in card thumbnails */
function ArrowPattern() {
  const row = Array.from({ length: 10 });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, opacity: 0.85 }}>
      {[0, 1].map(r => (
        <div key={r} style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {row.map((_, i) => (
            <svg key={i} width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M1 1l5 5-5 5" stroke={r === 0 ? "#f97316" : "#fbbf24"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 1l5 5-5 5" stroke={r === 0 ? "#f97316" : "#fbbf24"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      ))}
    </div>
  );
}

function LibraryCard({ title, date, cat }: { title: string; date: string; cat: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 14,
      border: "1px solid rgba(102,102,102,0.2)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)",
      overflow: "hidden",
      width: "100%",
    }}>
      <div style={{
        background: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
        height: 120,
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "16px 20px", gap: 10,
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
          Materiais de apoio
        </span>
        <ArrowPattern />
      </div>

      <div style={{ padding: "12px 16px 0" }}>
        <p style={{ fontSize: 12, color: "#0f172b", lineHeight: 1.5, marginBottom: 4, wordBreak: "break-word" }}>
          {title}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#888", marginBottom: 10 }}>
          <span>{date}</span>
          <span>{cat}</span>
        </div>
      </div>

      <div style={{ padding: "0 16px 14px" }}>
        <button style={{
          width: "100%", background: "#46b2ff", border: "none",
          borderRadius: 10, height: 36, fontSize: 13, color: "#fff",
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 6,
          fontFamily: "Poppins, sans-serif",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9" />
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <rect width="12" height="8" x="6" y="14" />
          </svg>
          Imprimir
        </button>
      </div>
    </div>
  );
}

/** Pagination — ex: < 01 02 … 73 > */
function PageNavigation({ current, total, onChange }: {
  current: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const btnBase: React.CSSProperties = {
    minWidth: 36, height: 36, borderRadius: 8,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 13, cursor: "pointer", border: "1px solid #e2e8f0",
    background: "#fff", color: "#333", fontFamily: "Poppins, sans-serif",
    transition: "all 0.15s",
  };
  const activeStyle: React.CSSProperties = {
    ...btnBase,
    background: "#46b2ff", color: "#fff", border: "none",
    fontWeight: 600, boxShadow: "0 2px 6px rgba(70,178,255,0.35)",
  };
  const arrowStyle: React.CSSProperties = {
    ...btnBase, padding: "0 10px",
  };

  // Build page slots: always show current, current+1, …, last
  const slots: (number | "…")[] = [];
  slots.push(1);
  if (current > 1) slots.push(current);
  if (current + 1 < total) slots.push("…");
  if (total > 1) slots.push(total);

  // Deduplicate and keep order
  const seen = new Set<number | string>();
  const pages: (number | "…")[] = [];
  for (const s of slots) {
    const key = s === "…" ? `ellipsis-${pages.length}` : s;
    if (!seen.has(key)) { seen.add(key); pages.push(s); }
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
      {/* Prev */}
      <button
        style={arrowStyle}
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke={current === 1 ? "#ccc" : "#666"} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {pages.map((p, i) =>
        p === "…"
          ? <span key={`ell-${i}`} style={{ ...btnBase, border: "none", background: "transparent", cursor: "default", color: "#888" }}>…</span>
          : <button key={p} style={p === current ? activeStyle : btnBase} onClick={() => onChange(p as number)}>
              {String(p).padStart(2, "0")}
            </button>
      )}

      {/* Next */}
      <button
        style={arrowStyle}
        disabled={current === total}
        onClick={() => onChange(current + 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke={current === total ? "#ccc" : "#666"} strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export function Screen9Biblioteca({ onGoTo }: Props) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={4} onGoTo={onGoTo} />

      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        overflowY: "auto", background: "#fff",
      }}>
        <div style={{ padding: "32px 40px 48px", minWidth: 0 }}>

          {/* ── Page header ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: "#f97316",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <BookIcon />
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#0a0a0a" }}>Biblioteca de Conteúdos</div>
              <div style={{ fontSize: 13, color: "#45556c", marginTop: 2 }}>Explore materiais e recursos didáticos</div>
            </div>
          </div>

          {/* ── Search + Filtros ── */}
          <div style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
            <div style={{
              flex: 1, display: "flex", alignItems: "center", gap: 10,
              border: "1px solid #e2e8f0", borderRadius: 10, padding: "0 14px", height: 42,
              background: "#fafafa",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar conteúdo"
                style={{
                  flex: 1, border: "none", background: "transparent",
                  fontSize: 13, color: "#333", outline: "none",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
            </div>
            <button style={{
              display: "flex", alignItems: "center", gap: 7,
              border: "1px solid #e2e8f0", borderRadius: 10, padding: "0 16px", height: 42,
              background: "#fff", fontSize: 13, color: "#555", cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="6"  y2="6" />
                <line x1="8" x2="16" y1="12" y2="12" />
                <line x1="11" x2="13" y1="18" y2="18" />
              </svg>
              Filtros
            </button>
          </div>

          {/* ── Results bar ── */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 13, color: "#46b2ff", fontWeight: 500 }}>
              6 de 874 itens encontrados
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
              <span>Ordenar por:</span>
              <button style={{
                display: "flex", alignItems: "center", gap: 6,
                border: "1px solid #e2e8f0", borderRadius: 8,
                padding: "5px 12px", background: "#fff", fontSize: 13,
                color: "#333", cursor: "pointer", fontFamily: "Poppins, sans-serif",
              }}>
                Mais recentes
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Card grid (3 columns) ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 32,
          }}>
            {ITEMS.map((item, i) => (
              <LibraryCard key={i} {...item} />
            ))}
          </div>

          {/* ── Page Navigation ── */}
          <PageNavigation current={page} total={TOTAL_PAGES} onChange={setPage} />

        </div>
      </div>
    </div>
  );
}
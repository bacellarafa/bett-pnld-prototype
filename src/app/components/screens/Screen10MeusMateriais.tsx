import { useState } from "react";
import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
}

type MaterialType = "Atividade" | "Plano de Aula" | "Atividade Inclusiva";

interface Material {
  type: MaterialType;
  title: string;
  subject: string;
  date: string;
}

const TYPE_COLORS: Record<MaterialType, string> = {
  "Atividade":           "#46b2ff",
  "Plano de Aula":       "#be82ff",
  "Atividade Inclusiva": "#63dcd0",
};

const MATERIALS: Material[] = [
  { type: "Plano de Aula",       title: "Ciclo da Água - 1º Ano",            subject: "Ciências",   date: "22 Dez, 2025" },
  { type: "Atividade",           title: "Atividade de Frações - 3º Ano",     subject: "Matemática", date: "23 Dez, 2025" },
  { type: "Atividade",           title: "Exercícios de Gramática - 2º Ano",  subject: "Português",  date: "20 Dez, 2025" },
  { type: "Plano de Aula",       title: "Revolução Industrial - 3º Ano",     subject: "História",   date: "19 Dez, 2025" },
  { type: "Atividade",           title: "Atividade de Geometria - 3º Ano",   subject: "Matemática", date: "18 Dez, 2025" },
  { type: "Atividade Inclusiva", title: "Adaptações para João - TDAH",       subject: "Geral",      date: "23 Dez, 2025" },
];

function TypeIcon({ type, size = 44 }: { type: MaterialType; size?: number }) {
  const s = size * 0.52;
  if (type === "Plano de Aula") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 48 48"
        fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
        <rect x="6" y="4" width="36" height="40" rx="3" />
        <line x1="16" y1="4" x2="16" y2="12" />
        <line x1="32" y1="4" x2="32" y2="12" />
        <line x1="6" y1="20" x2="42" y2="20" />
      </svg>
    );
  }
  if (type === "Atividade Inclusiva") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 48 48"
        fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
        <path d="M42 14c0 8-18 26-18 26S6 22 6 14a12 12 0 0 1 24 0Z" />
      </svg>
    );
  }
  // Atividade — document icon
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={s} height={s} viewBox="0 0 48 48"
      fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
      <path d="M30 4H12a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V18Z" />
      <path d="M28 4v12a4 4 0 0 0 4 4h8" />
      <path d="M20 18H16" />
      <path d="M32 26H16" />
      <path d="M32 34H16" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
      fill="none">
      <path d="M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4H3.333Z"
        stroke="#FF505F" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaterialCard({ item }: { item: Material }) {
  const bg = TYPE_COLORS[item.type];
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      border: "1px solid rgba(102,102,102,0.2)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)",
      overflow: "hidden",
    }}>
      {/* Colored thumbnail */}
      <div style={{
        background: bg, height: 128, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Type badge */}
        <div style={{
          position: "absolute", top: 12, left: 14,
          background: "rgba(255,255,255,0.9)", borderRadius: 10,
          padding: "4px 10px", fontSize: 12, color: "#666",
        }}>
          {item.type}
        </div>

        {/* Delete button */}
        <div style={{
          position: "absolute", top: 12, right: 14,
          background: "rgba(255,255,255,0.9)", border: "1px solid #ff505f",
          borderRadius: 10, width: 32, height: 32,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
        }}>
          <TrashIcon />
        </div>

        {/* Type icon */}
        <TypeIcon type={item.type} size={48} />
      </div>

      {/* Info area */}
      <div style={{ padding: "12px 20px 0" }}>
        <p style={{ fontSize: 16, fontWeight: 600, color: "#0f172b", margin: "0 0 4px" }}>
          {item.title}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#666", marginBottom: 12 }}>
          <span>{item.subject}</span>
          <span>{item.date}</span>
        </div>
      </div>

      {/* Abrir button */}
      <div style={{ padding: "0 20px 16px" }}>
        <button style={{
          width: "100%", background: "#46b2ff", border: "none",
          borderRadius: 12, height: 42, fontSize: 13, color: "#fff",
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 7,
          fontFamily: "Poppins, sans-serif",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"
            fill="none">
            <path d="M10 2H14V6" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.667 9.333L14 2"  stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 9.333V13.333A1.333 1.333 0 0 1 12.667 14.667H2.667A1.333 1.333 0 0 1 1.333 13.333V3.333A1.333 1.333 0 0 1 2.667 2H6.667"
              stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Abrir
        </button>
      </div>
    </div>
  );
}

export function Screen10MeusMateriais({ onGoTo }: Props) {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={5} onGoTo={onGoTo} />

      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        overflowY: "auto", background: "#fff",
      }}>
        <div style={{ padding: "32px 40px 48px" }}>

          {/* ── Page header ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: "#46b2ff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
              </svg>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#0a0a0a" }}>Meus Materiais</div>
          </div>

          {/* ── Stats row ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 22 }}>
            {[
              { label: "Total de Materiais", value: "6" },
              { label: "Criados este mês",   value: "12" },
              { label: "Compartilhados",     value: "8" },
            ].map((s, i) => (
              <div key={i} style={{
                border: "1px solid #e2e8f0", borderRadius: 10,
                padding: "14px 20px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 13, color: "#555" }}>{s.label}</span>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0a" }}>{s.value}</span>
              </div>
            ))}
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
              6 de 6 itens encontrados
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

          {/* ── Card grid (2 columns) ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }}>
            {MATERIALS.map((item, i) => (
              <MaterialCard key={i} item={item} />
            ))}
          </div>

          {/* ── Pagination ── */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
            <button style={{
              width: 32, height: 32, borderRadius: 8, border: "1px solid #e2e8f0",
              background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            {[1, 2].map(p => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                style={{
                  width: 32, height: 32, borderRadius: 8,
                  border: activePage === p ? "none" : "1px solid #e2e8f0",
                  background: activePage === p ? "#46b2ff" : "#fff",
                  color: activePage === p ? "#fff" : "#333",
                  fontSize: 13, fontWeight: activePage === p ? 600 : 400,
                  cursor: "pointer", fontFamily: "Poppins, sans-serif",
                }}
              >
                {String(p).padStart(2, "0")}
              </button>
            ))}
            <button style={{
              width: 32, height: 32, borderRadius: 8, border: "1px solid #e2e8f0",
              background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
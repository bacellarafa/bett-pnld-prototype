/**
 * Componentes compartilhados entre Screen2Form (Atividade Inclusiva)
 * e Screen5PlanForm (Planejar Aulas).
 *
 * Use sempre estes componentes — nunca duplique o estilo inline.
 */
import { useState, useRef, useEffect } from "react";
import { ANOS, COMPONENTES, BNCC_CODES } from "../constants";

// ─── Chip de Perfil ───────────────────────────────────────────────────────────
export function ProfileChip({
  id,
  onRemove,
}: {
  id: number;
  onRemove: () => void;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 7,
      background: "#fffcff", border: "1px solid #887e91",
      borderRadius: 100, padding: "6px 14px",
      fontSize: 13, color: "#494150",
    }}>
      {/* user icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
        viewBox="0 0 24 24" fill="none" stroke="#666"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      Perfil {id}
      <span
        onClick={onRemove}
        style={{
          cursor: "pointer", fontSize: 14, color: "#494150",
          marginLeft: 2, lineHeight: 1, opacity: 0.7,
        }}
      >×</span>
    </div>
  );
}

// ─── Select padronizado ───────────────────────────────────────────────────────
export function FormSelect({
  label,
  value,
  onChange,
  placeholder,
  required,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  options: { label: string; disabled?: boolean; badge?: string }[];
}) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
        {label}
        {required && <span style={{ color: "#ff505f", marginLeft: 2 }}>*</span>}
      </div>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
          padding: "11px 14px", fontSize: 13,
          color: value ? "#333" : "#6a7282",
          background: "#fff", outline: "none", cursor: "pointer",
          fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50,
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
          paddingRight: 32,
        } as React.CSSProperties}
      >
        <option value="">{placeholder}</option>
        {options.map(o => (
          <option key={o.label} value={o.label} disabled={o.disabled}>
            {o.label}{o.badge ? ` — ${o.badge}` : ""}
          </option>
        ))}
      </select>
    </div>
  );
}

// ─── Seletor de Componente Curricular ────────────────────────────────────────
export function ComponenteSelect({
  value, onChange, required,
}: {
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <FormSelect
      label="Componente curricular"
      value={value}
      onChange={onChange}
      placeholder="Selecione componente curricular"
      required={required}
      options={COMPONENTES.map(c => ({ label: c }))}
    />
  );
}

// ─── Seletor de Ano/Série ────────────────────────────────────────────────────
export function AnoSelect({
  value, onChange, required,
}: {
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <FormSelect
      label="Ano/Série"
      value={value}
      onChange={onChange}
      placeholder="Selecione ano/série"
      required={required}
      options={ANOS}
    />
  );
}

// ─── Campo Habilidade da BNCC com autocomplete ────────────────────────────────
export function BnccField({
  required,
}: {
  required?: boolean;
}) {
  const [query,  setQuery]  = useState("");
  const [sel,    setSel]    = useState("");
  const [open,   setOpen]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const filtered = query.length > 1
    ? BNCC_CODES.filter(b =>
        b.code.toLowerCase().includes(query.toLowerCase()) ||
        b.desc.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <div ref={ref}>
      <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
        Habilidade da BNCC
        {required
          ? <span style={{ color: "#ff505f", marginLeft: 2 }}>*</span>
          : <span style={{ color: "#8c8c8c", fontWeight: 400, fontSize: 12, marginLeft: 4 }}>(opcional)</span>
        }
      </div>
      <div style={{ position: "relative" }}>
        {/* Search icon */}
        <span style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          display: "flex", alignItems: "center", pointerEvents: "none",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="#bcbcbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); setSel(""); }}
          onFocus={() => { if (query) setOpen(true); }}
          placeholder="Busca com sugestões: ex: EF03MA01"
          style={{
            width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
            padding: "11px 32px 11px 32px", fontSize: 13,
            color: "rgba(102,102,102,0.8)", outline: "none",
            fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50,
          } as React.CSSProperties}
        />
        {sel && (
          <button
            onClick={() => { setSel(""); setQuery(""); }}
            style={{
              position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer",
              color: "#aaa", fontSize: 16, lineHeight: 1,
            }}
          >×</button>
        )}

        {/* Dropdown */}
        {open && filtered.length > 0 && (
          <div style={{
            position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0,
            background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 10,
            zIndex: 30, boxShadow: "0 4px 16px rgba(0,0,0,0.1)", overflow: "hidden",
          }}>
            {filtered.map(b => (
              <div
                key={b.code}
                onClick={() => { setSel(b.code); setQuery(b.code); setOpen(false); }}
                style={{ padding: "9px 14px", fontSize: 12, cursor: "pointer", borderBottom: "1px solid #f5f5f5" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f0f8ff")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                <strong style={{ color: "#0032be" }}>{b.code}</strong>
                <span style={{ color: "#555", marginLeft: 6 }}>– {b.desc}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>
        {sel
          ? <span style={{ color: "#4c6fff" }}>✓ {sel} selecionada</span>
          : "Nenhuma habilidade selecionada"
        }
      </div>
    </div>
  );
}

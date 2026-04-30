import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { CHECKBOXES } from "../../constants";
import { ProfileChip, ComponenteSelect, AnoSelect, BnccField } from "../FormShared";

interface Props {
  onGoTo: (n: number) => void;
  onGeneratePlan: (data: { comp: string; ano: string; tema: string }) => void;
}

// ─── Info icon (i) ────────────────────────────────────────────────────────────
function InfoIcon({ color = "#B2B2B2" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"
      fill="none" style={{ display: "inline", marginLeft: 4, verticalAlign: "middle" }}>
      <g clipPath="url(#ic)">
        <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.67" />
        <path d="M10 13.3V10" stroke={color} strokeWidth="1.67" strokeLinecap="round" />
        <path d="M10 6.67H10.01" stroke={color} strokeWidth="1.67" strokeLinecap="round" />
      </g>
      <defs><clipPath id="ic"><rect width="20" height="20" fill="white" /></clipPath></defs>
    </svg>
  );
}

// ─── Field label ──────────────────────────────────────────────────────────────
function FieldLabel({ children, required, optional }: {
  children: React.ReactNode; required?: boolean; optional?: boolean;
}) {
  return (
    <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6, display: "flex", alignItems: "center", gap: 2 }}>
      {children}
      {required && <span style={{ color: "#fb2c36", marginLeft: 2 }}>*</span>}
      {optional && <span style={{ color: "#8c8c8c", fontWeight: 400, fontSize: 12, marginLeft: 4 }}>(opcional)</span>}
      <InfoIcon />
    </div>
  );
}

// ─── Shared input style ───────────────────────────────────────────────────────
const inputSt: React.CSSProperties = {
  width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10,
  padding: "11px 14px", fontSize: 13, color: "#333", outline: "none",
  fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 44,
  background: "#fff",
};

const selectSt: React.CSSProperties = {
  ...inputSt,
  cursor: "pointer", appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
  paddingRight: 32,
};

// ─── Profile modal ────────────────────────────────────────────────────────────
function ProfileModal({ onClose, onSave }: {
  onClose: () => void;
  onSave: (items: string[], obs: string) => void;
}) {
  const [checked, setChecked] = useState<number[]>([]);
  const [obs, setObs] = useState("");

  const toggle = (i: number) => {
    setChecked(prev => {
      if (prev.includes(i)) return prev.filter(x => x !== i);
      if (prev.length >= 4) return prev;
      return [...prev, i];
    });
  };

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 50,
      background: "rgba(0,0,0,0.45)",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        background: "#fff", borderRadius: 16, width: 660,
        maxHeight: 820, display: "flex", flexDirection: "column",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
      }}>
        {/* Header */}
        <div style={{ padding: "22px 28px 16px", borderBottom: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0a" }}>Perfis de Aprendizagem</div>
            <div style={{ fontSize: 13, color: "#6a7282", marginTop: 3 }}>Detalhe as características para personalização</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 22, lineHeight: 1, padding: "0 4px" }}>×</button>
        </div>

        <div style={{ padding: "16px 28px", overflowY: "auto", flex: 1 }}>
          {/* Info box */}
          <div style={{ background: "#eff6ff", border: "1.5px solid #93c5fd", borderRadius: 12, padding: "14px 16px", marginBottom: 18 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1d4ed8", marginBottom: 8 }}>Antes de adicionar perfis</div>
            <div style={{ fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>
              <p>Para construir um plano inclusivo coerente, pense em grupos de aprendizagem com necessidades semelhantes.</p>
              <p style={{ marginTop: 6 }}><strong>Um perfil representa alunos que:</strong></p>
              <ul style={{ paddingLeft: 16, marginTop: 4 }}>
                <li>Compartilham dificuldades parecidas</li>
                <li>Respondem melhor às mesmas estratégias</li>
                <li>Exigem adaptações semelhantes</li>
              </ul>
              <p style={{ marginTop: 8 }}>Se houver alunos com características diferentes, crie perfis distintos.</p>
              <p style={{ marginTop: 8 }}>
                <strong>O sistema irá gerar:</strong><br />
                • <strong>1 plano base</strong> para a turma<br />
                • <strong>1 adaptação</strong> para cada perfil informado
              </p>
              <p style={{ marginTop: 8 }}>Dessa forma mantemos o objetivo pedagógico comum e adaptamos estratégias de forma adequada para cada grupo.</p>
            </div>
          </div>

          {/* Characteristics */}
          <div style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a", marginBottom: 2 }}>Características do Perfil</div>
          <div style={{ fontSize: 13, color: "#0a0a0a", marginBottom: 10 }}>
            Selecione as necessidades aplicáveis <span style={{ color: "#fb2c36" }}>*</span>
            <span style={{ fontSize: 12, color: "#6a7282", fontWeight: 400, marginLeft: 6 }}>({checked.length}/4)</span>
          </div>

          {/* Checkbox grid — 2 cols, scrollable */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7,
            maxHeight: 230, overflowY: "auto", paddingRight: 4, marginBottom: 16,
          }}>
            {CHECKBOXES.map((text, idx) => {
              const isCh = checked.includes(idx);
              const isDis = !isCh && checked.length >= 4;
              return (
                <label
                  key={idx}
                  onClick={() => !isDis && toggle(idx)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "9px 12px",
                    border: isCh ? "2px solid #4c6fff" : "1.5px solid #e2e8f0",
                    borderRadius: 10, cursor: isDis ? "not-allowed" : "pointer",
                    fontSize: 12, color: isCh ? "#3364ff" : "#0a0a0a",
                    background: isCh ? "#eef2ff" : "#fff",
                    transition: "all 0.15s", lineHeight: 1.4,
                    opacity: isDis ? 0.45 : 1, fontWeight: isCh ? 600 : 400,
                    userSelect: "none",
                  }}
                >
                  <div style={{
                    width: 15, height: 15, borderRadius: 3, flexShrink: 0,
                    background: isCh ? "#4c6fff" : "#fff",
                    border: isCh ? "2px solid #4c6fff" : "1.5px solid #c8d0da",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {isCh && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  {text}
                </label>
              );
            })}
          </div>

          {/* Observações */}
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
              Observações adicionais <span style={{ color: "#8c8c8c", fontWeight: 400, fontSize: 12 }}>(opcional)</span>
            </div>
            <textarea
              value={obs}
              onChange={e => setObs(e.target.value)}
              placeholder="Descreva outras características se necessário..."
              rows={3}
              style={{
                width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10,
                padding: "10px 12px", fontSize: 13, resize: "vertical",
                fontFamily: "Poppins, sans-serif", outline: "none", color: "#333",
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "14px 28px", borderTop: "1px solid #f0f0f0", display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button onClick={onClose} style={{
            padding: "10px 22px", borderRadius: 9, border: "2px solid #fc8181",
            background: "#fff", fontSize: 14, cursor: "pointer", color: "#e53e3e",
            fontFamily: "Poppins, sans-serif", fontWeight: 500,
          }}>Cancelar</button>
          <button
            onClick={() => checked.length > 0 && onSave(checked.map(i => CHECKBOXES[i]), obs)}
            disabled={checked.length === 0}
            style={{
              padding: "10px 22px", borderRadius: 9, border: "none",
              background: checked.length > 0 ? "#0032be" : "#d1d5db",
              fontSize: 14, cursor: checked.length > 0 ? "pointer" : "not-allowed",
              color: "#fff", fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              display: "flex", alignItems: "center", gap: 8,
              transition: "all 0.15s",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Salvar informações
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Right sidebar (Como funciona + Dicas) — same as Figma frame ──────────────
function RightSidebar() {
  return (
    <div style={{
      borderLeft: "1px solid #f0f0f0",
      padding: "24px 18px", overflowY: "hidden",
      display: "flex", flexDirection: "column", gap: 20,
      background: "#fff",
    }}>
      {/* Purple card */}
      <div style={{
        background: "rgba(190,130,255,0.1)", border: "1px solid #be82ff",
        borderRadius: 16, padding: 24,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <g clipPath="url(#ci)">
              <circle cx="10" cy="10" r="9" stroke="#be82ff" strokeWidth="1.67" />
              <path d="M10 13.3V10" stroke="#be82ff" strokeWidth="1.67" strokeLinecap="round" />
              <path d="M10 6.67H10.01" stroke="#be82ff" strokeWidth="1.67" strokeLinecap="round" />
            </g>
            <defs><clipPath id="ci"><rect width="20" height="20" fill="white" /></clipPath></defs>
          </svg>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#be82ff" }}>Como funciona?</span>
        </div>
        <div style={{ fontSize: 12, color: "#0f172b", lineHeight: 1.6 }}>
          <p>A IA analisa suas informações e gera um plano de aula completo com objetivos, metodologia, recursos didáticos e formas de avaliação.</p>
          <p style={{ marginTop: 8 }}>Se não encontrar o conteúdo, tente simplificar ou variar os termos de busca (ex: remova artigos como "as" ou "os") para otimizar a pesquisa no material.</p>
          <p style={{ marginTop: 8, fontWeight: 700 }}>
            Todos os campos com (<span style={{ color: "#fb2c36" }}>*</span>) são de preenchimento obrigatório.
          </p>
        </div>
      </div>

      {/* Yellow card */}
      <div style={{
        background: "rgba(255,210,0,0.25)", border: "1px solid #ffd200",
        borderRadius: 16, padding: 24,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 16 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M10 1.67a5.83 5.83 0 0 0-5.83 5.83c0 1.5.6 2.88 1.66 3.88.53.52 1.01 1.3 1.17 2.12h6a3.5 3.5 0 0 1 1.17-2.13A5.83 5.83 0 0 0 10 1.67Z" stroke="#B29301" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 13.5H12.5" stroke="#B29301" strokeWidth="1.67" strokeLinecap="round" />
            <path d="M8.33 16.67h3.33" stroke="#B29301" strokeWidth="1.67" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 16, fontWeight: 600, color: "#0f172b" }}>Dicas para um bom plano</span>
        </div>
        <ul style={{ paddingLeft: 16, fontSize: 12, color: "#0f172b", lineHeight: 2.2 }}>
          <li>Seja específico no tema da aula</li>
          <li>Indique recursos disponíveis</li>
          <li>Considere o tempo real de aula</li>
        </ul>
      </div>
    </div>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────
export function Screen5PlanForm({ onGoTo, onGeneratePlan }: Props) {
  const [showModal, setShowModal]   = useState(false);
  const [profiles,  setProfiles]    = useState<Array<{ id: number }>>([]);
  const [profCount, setProfCount]   = useState(0);

  const [idea,      setIdea]        = useState("");
  const [tema,      setTema]        = useState("");
  const [comp,      setComp]        = useState("");
  const [ano,       setAno]         = useState("");
  const [duracao,   setDuracao]     = useState("");
  const [recursos,  setRecursos]    = useState("");

  const handleSaveProfile = () => {
    const id = profCount + 1;
    setProfCount(id);
    setProfiles(prev => [...prev, { id }]);
    setShowModal(false);
  };

  const removeProfile = (id: number) => setProfiles(prev => prev.filter(p => p.id !== id));

  const handleLimpar = () => {
    setIdea(""); setTema(""); setComp(""); setAno(""); setDuracao("");
    setRecursos("");
    setProfiles([]); setProfCount(0);
  };

  const handleGerar = () => {
    onGeneratePlan({
      comp: comp || "Matemática",
      ano: ano || "3º Ano",
      tema: tema || "O ciclo da água e sua importância",
    });
  };

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={3} onGoTo={onGoTo} />

      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        display: "grid", gridTemplateColumns: "1fr 258px", overflow: "hidden",
      }}>
        {/* ── Main scrollable form ── */}
        <div style={{ padding: "28px 30px 48px 30px", overflowY: "auto" }}>

          {/* Page header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: "#be82ff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* calendar icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M10 2.5V7.5" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 2.5V7.5" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 10a1.25 1.25 0 0 1 1.25-1.25h20A1.25 1.25 0 0 1 26.25 10v15a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 25V10Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 12.5H26.25" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 700, color: "#000" }}>Planejar Aula com IA</div>
              <div style={{ fontSize: 14, color: "#45556c", marginTop: 2 }}>Crie planos de aula completos e personalizados</div>
            </div>
          </div>

          {/* ── Card 1: Ideia ── */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: "20px 22px", marginBottom: 14, background: "#fff" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#2b2b2b", marginBottom: 4 }}>Crie um plano de aula completo</div>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 14, lineHeight: 1.5 }}>
              A nossa IA irá criar um plano de aula detalhado com objetivos, metodologia, recursos e avaliação alinhados à BNCC.
            </div>

            <FieldLabel required>Descreva sua ideia para a atividade</FieldLabel>

            {/* Gradient-border textarea (same pattern as Screen2Form) */}
            <div style={{
              borderRadius: 10, padding: 2,
              background: "linear-gradient(135deg, #ff6b8a 0%, #be82ff 100%)",
            }}>
              <textarea
                value={idea}
                onChange={e => setIdea(e.target.value)}
                placeholder={`Por exemplo: "Atividade de matemática para trabalhar proporção, grandezas e medidas utilizando objetos de casa como referência!`}
                style={{
                  width: "100%", border: "none", borderRadius: 8,
                  padding: "12px 14px", fontSize: 13, color: "#333",
                  resize: "none", height: 100, outline: "none",
                  fontFamily: "Poppins, sans-serif", boxSizing: "border-box",
                  background: "#fff", display: "block",
                }}
              />
            </div>
          </div>

          {/* ── Card 2: Perfis ── */}
          <div style={{
            background: "rgba(0,190,172,0.04)",
            border: "1.5px solid #00beac",
            borderRadius: 14, padding: "16px 20px", marginBottom: 14,
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
              {/* Heart icon */}
              <div style={{
                width: 30, height: 30, borderRadius: 6, flexShrink: 0,
                background: "rgba(0,190,172,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M17.367 3.883a4.583 4.583 0 0 0-6.484 0L10 4.767l-.883-.884a4.584 4.584 0 0 0-6.484 6.484L10 17.717l7.367-7.35a4.583 4.583 0 0 0 0-6.484Z" stroke="#00beac" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a", display: "inline" }}>Criar plano adaptado </div>
                <span style={{ fontSize: 13, color: "#888", fontWeight: 400 }}>(opcional)</span>
                <div style={{ fontSize: 12, color: "#666", marginTop: 3, lineHeight: 1.5 }}>
                  Para que possamos criar um plano adaptado para diferentes perfis de aprendizagem, clique no botão abaixo:
                </div>
              </div>
            </div>

            {/* Profile chips */}
            {profiles.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {profiles.map(p => (
                  <ProfileChip key={p.id} id={p.id} onRemove={() => removeProfile(p.id)} />
                ))}
              </div>
            )}

            {/* Add profile button */}
            <button
              onClick={() => profiles.length < 4 && setShowModal(true)}
              disabled={profiles.length >= 4}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1.5px solid #00beac", borderRadius: 20,
                padding: "7px 16px", fontSize: 13,
                background: "rgba(0,190,172,0.04)",
                color: profiles.length < 4 ? "#00beac" : "#aaa",
                borderColor: profiles.length < 4 ? "#00beac" : "#ccc",
                cursor: profiles.length < 4 ? "pointer" : "not-allowed",
                fontFamily: "Poppins, sans-serif",
                transition: "all 0.15s",
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: "50%",
                border: `1.5px solid ${profiles.length < 4 ? "#00beac" : "#ccc"}`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke={profiles.length < 4 ? "#00beac" : "#ccc"} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              Adicionar perfil
            </button>
          </div>

          {/* ── Card 3: Form fields ── */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: "20px 22px", marginBottom: 14, background: "#fff" }}>
            {/* Tema */}
            <div style={{ marginBottom: 14 }}>
              <FieldLabel required>Tema da Aula</FieldLabel>
              <input
                value={tema}
                onChange={e => setTema(e.target.value)}
                placeholder="Ex: Grandezas e medidas matemáticas"
                style={inputSt}
              />
            </div>

            {/* Componente + Ano */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <ComponenteSelect value={comp} onChange={setComp} required />
              <AnoSelect value={ano} onChange={setAno} required />
            </div>

            {/* Duração */}
            <div style={{ marginBottom: 14 }}>
              <FieldLabel required>Duração Estimada</FieldLabel>
              <input
                value={duracao}
                onChange={e => setDuracao(e.target.value)}
                placeholder="Ex: 50 minutos, 2 aulas..."
                style={inputSt}
              />
            </div>

            {/* BNCC */}
            <div style={{ marginBottom: 14 }}>
              <BnccField />
            </div>

            {/* Recursos Disponíveis */}
            <div>
              <FieldLabel optional>Recursos Disponíveis</FieldLabel>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", pointerEvents: "none" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bcbcbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
                <input
                  value={recursos}
                  onChange={e => setRecursos(e.target.value)}
                  placeholder="Busca com sugestões: ex: EF03MA01"
                  style={{ ...inputSt, paddingLeft: 32, paddingRight: 32 }}
                />
                <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* ── Actions ── */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 4 }}>
            <button onClick={handleLimpar} style={{
              border: "2px solid #fc8181", borderRadius: 9,
              padding: "10px 22px", fontSize: 14, color: "#e53e3e",
              background: "#fff", cursor: "pointer", transition: "all 0.15s",
              fontFamily: "Poppins, sans-serif",
            }}>Limpar</button>

            <button onClick={handleGerar} style={{
              background: "#0032be", border: "none", borderRadius: 9,
              padding: "12px 24px", fontSize: 14, color: "#fff",
              cursor: "pointer", fontWeight: 600,
              display: "flex", alignItems: "center", gap: 8,
              transition: "all 0.15s", fontFamily: "Poppins, sans-serif",
            }}>
              {/* spark/star icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
              </svg>
              Gerar Plano com IA
            </button>
          </div>
        </div>

        {/* ── Right tips ── */}
        <RightSidebar />
      </div>

      {showModal && (
        <ProfileModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}
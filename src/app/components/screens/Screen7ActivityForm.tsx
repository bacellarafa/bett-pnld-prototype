import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { ComponenteSelect, AnoSelect, BnccField } from "../FormShared";

interface Props {
  onGoTo: (n: number) => void;
  onGenerateActivity: (data: { comp: string; ano: string }) => void;
}

const ACCENT = "#46b2ff";

function RightSidebar() {
  return (
    <div style={{ borderLeft: "1px solid #f0f0f0", background: "#fafafa", padding: "20px 14px", overflowY: "hidden" }}>
      {[
        {
          bgColor: "#f0fdf4", borderColor: "#7bf1a8", titleColor: "#008236",
          title: "Limite de uso diário",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
            </svg>
          ),
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <div>Para apoiar seu planejamento, lembre-se do seu limite diário:</div>
              <ul style={{ marginLeft: 14, marginTop: 4 }}>
                <li>Planos de aula restantes hoje: <strong>2 de 3</strong></li>
                <li>Atividades restantes hoje: <strong>3 de 5</strong></li>
              </ul>
              <div style={{ marginTop: 8 }}>Ao atingir o limite, você poderá realizar novas criações no dia seguinte.</div>
            </div>
          ),
        },
        {
          bgColor: "#eef2ff", borderColor: "#4c6fff", titleColor: "#435bff",
          title: "Como funciona?",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#435bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
            </svg>
          ),
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <p>Escolha o tipo de atividade e defina uma quantidade de questões.</p>
              <p style={{ marginTop: 4 }}>Preencha o ano/série e selecione o componente curricular. Também é possível indicar habilidades da BNCC.</p>
              <p style={{ marginTop: 4 }}>Por fim, clique em "Gerar Atividade com IA" para criar a atividade.</p>
              <p style={{ marginTop: 6 }}><strong>Todos os campos com (*) são de preenchimento obrigatório.</strong></p>
            </div>
          ),
        },
        {
          bgColor: "#ffeaa7", borderColor: "#f5b301", titleColor: "#32322f",
          title: "Dicas para uma boa atividade",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#f5b301" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" /><path d="M10 22h4" />
            </svg>
          ),
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <ul style={{ marginLeft: 14 }}>
                <li>Seja específico no tema da atividade</li>
                <li style={{ marginTop: 4 }}>Defina uma quantidade de questões adequada para o tema indicado</li>
                <li style={{ marginTop: 4 }}>Considere o tempo real de aula para aplicação da atividade</li>
              </ul>
            </div>
          ),
        },
      ].map((card, i) => (
        <div key={i} style={{
          borderRadius: 10, padding: 14, marginBottom: 14, fontSize: 12,
          background: card.bgColor, border: `2px solid ${card.borderColor}`,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 13, fontWeight: 700, marginBottom: 8, color: card.titleColor,
          }}>
            {card.icon} {card.title}
          </div>
          {card.content}
        </div>
      ))}
    </div>
  );
}

export function Screen7ActivityForm({ onGoTo, onGenerateActivity }: Props) {
  const [idea, setIdea]               = useState("");
  const [selectedTipo, setSelectedTipo] = useState(1);
  const [tema, setTema]               = useState("");
  const [qnum, setQnum]               = useState("5");
  const [comp, setComp]               = useState("");
  const [ano, setAno]                 = useState("");

  const limpar = () => {
    setIdea(""); setTema(""); setComp(""); setAno(""); setQnum("5");
  };

  const gerar = () => {
    onGenerateActivity({ comp: comp || "Matemática", ano: ano || "5º Ano" });
  };

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={1} onGoTo={onGoTo} />

      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        display: "grid", gridTemplateColumns: "1fr 268px", overflow: "hidden",
      }}>
        {/* ── Main form ── */}
        <div style={{ padding: "32px 32px 40px 36px", overflowY: "auto" }}>

          {/* Page header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: ACCENT,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* File icon — igual ao item de menu "Criar Atividade" */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#0a0a0a" }}>Criar Atividade com IA</div>
              <div style={{ fontSize: 13, color: "#45556c", marginTop: 2 }}>Crie atividades com questões personalizadas para sua turma</div>
            </div>
          </div>

          {/* Card: Configure + Idea */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 16, padding: "22px 24px", marginBottom: 18 }}>

            {/* Descreva sua ideia */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                Descreva sua ideia para a atividade <span style={{ color: "#ff505f" }}>*</span>
              </div>
              <div style={{
                borderRadius: 10, padding: 2,
                background: "linear-gradient(135deg, #46b2ff 0%, #0032be 100%)",
              }}>
                <textarea
                  value={idea}
                  onChange={e => setIdea(e.target.value)}
                  placeholder='Por exemplo: "Atividade de matemática para trabalhar proporção, grandezas e medidas utilizando objetos de casa como referência!'
                  style={{
                    width: "100%", border: "none", borderRadius: 8,
                    padding: "12px 14px", fontSize: 13, color: "#333",
                    resize: "none", height: 110, outline: "none",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box",
                    background: "#fff", display: "block",
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #f0f0f0", marginBottom: 20 }} />

            {/* Configure section */}
            <div style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>Configure sua atividade</div>
            <div style={{ fontSize: 13, color: "#6a7282", marginBottom: 18 }}>
              Preencha os campos abaixo para que o assistente gere questões alinhadas ao seu planejamento.
            </div>

            {/* Tipo de atividade */}
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 10 }}>
              Tipo de atividade <span style={{ color: "#ff505f" }}>*</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
              {[
                { name: "Questões avulsas",  sub: "Gera questões individuais dissertativas" },
                { name: "Exercício",         sub: "Gera uma lista de questões mistas com feedback instantâneo" },
                { name: "Simulado",          sub: "Avaliação com questões de múltipla escolha e limite de tempo" },
              ].map((tipo, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedTipo(i)}
                  style={{
                    border: selectedTipo === i ? `2px solid ${ACCENT}` : "2px solid #e5e7eb",
                    borderRadius: 10, padding: "14px 12px", cursor: "pointer",
                    transition: "all 0.15s", textAlign: "center",
                    background: selectedTipo === i ? "#e8f5ff" : "#fff",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedTipo === i ? ACCENT : "#333", marginBottom: 4 }}>
                    {tipo.name}
                  </div>
                  <div style={{ fontSize: 11, color: "#6a7282", lineHeight: 1.4 }}>{tipo.sub}</div>
                </div>
              ))}
            </div>

            {/* Tema + Questões */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 95px", gap: 12, alignItems: "start", marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                  Tema da atividade <span style={{ color: "#ff505f" }}>*</span>
                </div>
                <input
                  value={tema}
                  onChange={e => setTema(e.target.value)}
                  placeholder="Ex: Grandezas e medidas matemáticas"
                  style={{
                    width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
                    padding: "11px 14px", fontSize: 13, color: "#333", outline: "none",
                    transition: "border-color 0.2s", fontFamily: "Poppins, sans-serif",
                    boxSizing: "border-box", height: 50,
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                  Questões <span style={{ color: "#ff505f" }}>*</span>
                </div>
                <input
                  value={qnum}
                  onChange={e => setQnum(e.target.value)}
                  type="number" min="1" max="20"
                  style={{
                    width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
                    padding: "11px 8px", fontSize: 15, color: ACCENT,
                    textAlign: "center", fontWeight: 700, outline: "none",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50,
                  }}
                />
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#6a7282", marginBottom: 16 }}>
              Exemplo: Frações no cotidiano, receitas e medidas.
            </div>

            {/* Componente + Ano */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
              <ComponenteSelect value={comp} onChange={setComp} required />
              <AnoSelect value={ano} onChange={setAno} required />
            </div>

            {/* BNCC */}
            <BnccField />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <button
              onClick={limpar}
              style={{
                border: "2px solid #fc8181", borderRadius: 9,
                padding: "10px 22px", fontSize: 14, color: "#e53e3e",
                background: "#fff", cursor: "pointer", transition: "all 0.15s",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Limpar
            </button>
            <button
              onClick={gerar}
              style={{
                background: "#0032be", border: "none", borderRadius: 9,
                padding: "12px 24px", fontSize: 14, color: "#fff",
                cursor: "pointer", fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8,
                transition: "all 0.15s", fontFamily: "Poppins, sans-serif",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
              </svg>
              Gerar Atividade com IA
            </button>
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}
import { useState } from "react";
import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
  onFormData: (data: { comp: string; ano: string; perfil: string }) => void;
}

const CHECKBOXES = [
  "Necessita de apoio frente a desafios novos",
  "Fragilidade para lidar com frustrações",
  "Necessita de apoio para manter a atenção",
  "Necessita de organização, rotina e previsibilidade",
  "Necessita de apoio visual e/ou concretos",
  "Requer pausas e oportunidades de movimento",
  "Engaja-se melhor em atividades curtas",
  "Necessita de apoio em situações de espera",
  "Necessita de apoio em atividades em grupo",
  "Beneficia-se de ambientes com menos estímulos",
  "Necessita de rotinas e combinados",
  "Beneficia-se da antecipação de mudanças",
  "Engaja-se em conteúdos de seu interesse",
  "Necessita de tempo ampliado para realizar atividades",
  "Necessita de apoio para realizar atividades",
  "Precisa de apoio para fazer atividades",
  "Precisa de apoio para organizar informações",
  "Beneficia-se de exemplos práticos",
  "Compreende melhor conteúdos contextualizados",
  "Gosta de receber devolutivas",
  "Necessita de apoio com mudanças de contexto",
  "Compreende enunciados com vocabulário mais acessível",
  "Compreende melhor textos curtos",
  "Necessita de apoio na leitura de enunciados",
  "Beneficia-se de organização visual clara",
  "Gosta de oralidade e/ou prática",
  "Prefere copiar em vez de ler",
  "Necessita de apoio para organizar a escrita",
];

function RightSidebar() {
  return (
    <div style={{ borderLeft: "1px solid #f0f0f0", background: "#fafafa", padding: "20px 14px", overflowY: "hidden" }}>
      {[
        {
          bgColor: "#f0fdf4", borderColor: "#7bf1a8", titleColor: "#008236",
          title: "Limite de uso diário",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>,
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <div>Para apoiar seu planejamento, lembre-se do seu limite diário:</div>
              <ul style={{ marginLeft: 14, marginTop: 4 }}>
                <li>Planos de aula restantes hoje: <strong>2 de 3</strong></li>
                <li>Atividades restantes hoje: <strong>3 de 5</strong></li>
              </ul>
              <div style={{ marginTop: 8 }}>Ao atingir o limite, você poderá realizar novas criações no dia seguinte.</div>
            </div>
          )
        },
        {
          bgColor: "#eef2ff", borderColor: "#4c6fff", titleColor: "#435bff",
          title: "Como funciona?",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#435bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <p>Escolha o tipo de atividade e defina uma quantidade de questões.</p>
              <p style={{ marginTop: 4 }}>Preencha o ano/série e selecione o componente curricular. Também é possível indicar habilidades da BNCC.</p>
              <p style={{ marginTop: 4 }}>Por fim, clique em "Gerar Atividade com IA" para criar a atividade.</p>
              <p style={{ marginTop: 6 }}><strong>Todos os campos com (*) são de preenchimento obrigatório.</strong></p>
            </div>
          )
        },
        {
          bgColor: "#ffeaa7", borderColor: "#f5b301", titleColor: "#32322f",
          title: "Dicas para uma boa atividade",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5b301" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
          content: (
            <div style={{ color: "#2b2b2b", lineHeight: 1.6, fontSize: 12 }}>
              <ul style={{ marginLeft: 14 }}>
                <li>Seja específico no tema da atividade</li>
                <li style={{ marginTop: 4 }}>Defina uma quantidade de questões adequada para o tema indicado</li>
                <li style={{ marginTop: 4 }}>Considere o tempo real de aula para aplicação da atividade</li>
              </ul>
            </div>
          )
        }
      ].map((card, i) => (
        <div key={i} style={{
          borderRadius: 10, padding: 14, marginBottom: 14, fontSize: 12,
          background: card.bgColor, border: `2px solid ${card.borderColor}`
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 13, fontWeight: 700, marginBottom: 8, color: card.titleColor
          }}>
            {card.icon} {card.title}
          </div>
          {card.content}
        </div>
      ))}
    </div>
  );
}

export function Screen2Form({ onGoTo, onFormData }: Props) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [profiles, setProfiles] = useState<Array<{ id: number; items: string[] }>>([]);
  const [profileCount, setProfileCount] = useState(0);
  const [idea, setIdea] = useState("");
  const [selectedTipo, setSelectedTipo] = useState(1);
  const [tema, setTema] = useState("");
  const [qnum, setQnum] = useState("5");
  const [comp, setComp] = useState("");
  const [ano, setAno] = useState("");

  const handleCheckbox = (idx: number) => {
    setCheckedItems(prev => {
      if (prev.includes(idx)) return prev.filter(i => i !== idx);
      if (prev.length >= 4) return prev;
      return [...prev, idx];
    });
  };

  const addPerfil = () => {
    if (checkedItems.length === 0 || profiles.length >= 4) return;
    const newId = profileCount + 1;
    setProfileCount(newId);
    setProfiles(prev => [...prev, { id: newId, items: checkedItems.map(i => CHECKBOXES[i]) }]);
    setCheckedItems([]);
  };

  const removePerfil = (idx: number) => {
    setProfiles(prev => prev.filter((_, i) => i !== idx));
  };

  const limpar = () => {
    setCheckedItems([]);
    setProfiles([]);
    setProfileCount(0);
    setIdea("");
    setTema("");
    setComp("");
    setAno("");
    setQnum("5");
  };

  const gerar = () => {
    const compVal = comp || "Matemática";
    const anoVal = ano || "5º Ano";
    const perfilText = profiles.length > 0 ? profiles[0].items[0] : "Necessita de apoio frente a desafios novos";
    onFormData({ comp: compVal, ano: anoVal, perfil: perfilText });
    onGoTo(3);
  };

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={2} onGoTo={onGoTo} />
      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        display: "grid", gridTemplateColumns: "1fr 268px", overflow: "hidden"
      }}>
        {/* Form main */}
        <div style={{ padding: "32px 32px 40px 36px", overflowY: "auto" }}>

          {/* Page header */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 58, height: 58, borderRadius: 12, flexShrink: 0,
              background: "#63dcd0",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#0a0a0a" }}>Inclusão e Adaptações</div>
              <div style={{ fontSize: 13, color: "#45556c", marginTop: 2 }}>Crie adaptações pedagógicas personalizadas</div>
            </div>
          </div>

          {/* Card 1: Student info */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 16, padding: "22px 24px", marginBottom: 18 }}>
            {/* Card header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 58, height: 58, borderRadius: 8, flexShrink: 0,
                background: "#63dcd0",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0a" }}>Informações sobre o aluno</div>
                <div style={{ fontSize: 13, color: "#45556c", marginTop: 2 }}>Descreva as necessidades educacionais do aluno.</div>
              </div>
            </div>

            {/* Subtitle */}
            <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>
              Monte o perfil e adicione à lista <span style={{ color: "#ff505f" }}>*</span>
            </div>
            <div style={{ fontSize: 13, color: "#6a7282", marginBottom: 10 }}>
              Selecione até 4 características por perfil ({checkedItems.length}/4).
            </div>

            {/* Checkbox grid — scrollable, 8 items visible */}
            <div
              className="characteristics-scroll"
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7,
                maxHeight: 196, overflowY: "auto", paddingRight: 4,
              }}
            >
              {CHECKBOXES.map((text, idx) => {
                const isChecked = checkedItems.includes(idx);
                const isDisabled = !isChecked && checkedItems.length >= 4;
                return (
                  <label
                    key={idx}
                    onClick={() => !isDisabled && handleCheckbox(idx)}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, padding: "9px 12px",
                      border: isChecked ? "2px solid #4c6fff" : "1.5px solid #e2e8f0",
                      borderRadius: 10, cursor: isDisabled ? "not-allowed" : "pointer",
                      fontSize: 12,
                      color: isChecked ? "#3364ff" : "#0a0a0a",
                      background: isChecked ? "#eef2ff" : "#ffffff",
                      transition: "all 0.15s", lineHeight: 1.4,
                      opacity: isDisabled ? 0.45 : 1,
                      fontWeight: isChecked ? 600 : 400,
                      userSelect: "none",
                    }}
                  >
                    {/* Custom checkbox */}
                    <div style={{
                      width: 15, height: 15, borderRadius: 3, flexShrink: 0,
                      background: isChecked ? "#4c6fff" : "#ffffff",
                      border: isChecked ? "2px solid #4c6fff" : "1.5px solid #c8d0da",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.15s",
                    }}>
                      {isChecked && (
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    {text}
                  </label>
                );
              })}
            </div>

            {/* Profiles row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
              <span style={{ fontSize: 13, color: "#6a7282" }}>Perfis adicionados ({profiles.length}/4)</span>
              {checkedItems.length > 0 && (
                <button
                  onClick={addPerfil}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    border: "1px solid #00beac", borderRadius: 14,
                    padding: "6px 14px", fontSize: 13, color: "#00beac",
                    cursor: "pointer", background: "#fff", transition: "all 0.15s",
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00beac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M12 5v14" />
                  </svg>
                  Adicionar perfil
                </button>
              )}
            </div>

            {/* Profile chips */}
            {profiles.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                {profiles.map((p, i) => (
                  <div key={p.id} style={{
                    display: "flex", alignItems: "center", gap: 7,
                    background: "#fffcff", border: "1px solid #887e91",
                    borderRadius: 100, padding: "6px 14px", fontSize: 13, color: "#494150"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    Perfil {p.id}
                    <span
                      onClick={() => removePerfil(i)}
                      style={{ cursor: "pointer", fontSize: 14, color: "#494150", marginLeft: 2, lineHeight: 1, opacity: 0.7 }}
                    >×</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card 2: Configure + Idea (merged) */}
          <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: 16, padding: "22px 24px", marginBottom: 18 }}>

            {/* Textarea: Descreva sua ideia */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                Descreva sua ideia para a atividade <span style={{ color: "#ff505f" }}>*</span>
              </div>
              {/* Gradient border wrapper */}
              <div style={{
                borderRadius: 10, padding: 2,
                background: "linear-gradient(135deg, #ff6b8a 0%, #be82ff 100%)",
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
                    background: "#fff", display: "block"
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #f0f0f0", marginBottom: 20 }} />

            {/* Configure section title */}
            <div style={{ fontSize: 17, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>Configure sua atividade</div>
            <div style={{ fontSize: 13, color: "#6a7282", marginBottom: 18 }}>Preencha os campos abaixo para que o assistente gere questões alinhadas ao seu planejamento.</div>

            {/* Tipo de atividade */}
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 10 }}>
              Tipo de atividade <span style={{ color: "#ff505f" }}>*</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 18 }}>
              {[
                { name: "Questões avulsas", sub: "Gera questões individuais dissertativas" },
                { name: "Exercício", sub: "Gera uma lista de questões mistas com feedback instantâneo" },
                { name: "Simulado", sub: "Avaliação com questões de múltipla escolha e limite de tempo" },
              ].map((tipo, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedTipo(i)}
                  style={{
                    border: selectedTipo === i ? "2px solid #4c6fff" : "2px solid #e5e7eb",
                    borderRadius: 10, padding: "14px 12px", cursor: "pointer",
                    transition: "all 0.15s", textAlign: "center",
                    background: selectedTipo === i ? "#eef2ff" : "#fff"
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700, color: selectedTipo === i ? "#3364ff" : "#333", marginBottom: 4 }}>{tipo.name}</div>
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
                    boxSizing: "border-box", height: 50
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
                    padding: "11px 8px", fontSize: 15, color: "#46b2ff",
                    textAlign: "center", fontWeight: 700, outline: "none",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50
                  }}
                />
              </div>
            </div>
            {/* Hint below tema/questões */}
            <div style={{ fontSize: 12, color: "#6a7282", marginBottom: 16 }}>
              Exemplo: Frações no cotidiano, receitas e medidas.
            </div>

            {/* Componente + Ano */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                  Componente curricular <span style={{ color: "#ff505f" }}>*</span>
                </div>
                <select
                  value={comp}
                  onChange={e => setComp(e.target.value)}
                  style={{
                    width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
                    padding: "11px 14px", fontSize: 13, color: comp ? "#333" : "#6a7282",
                    background: "#fff", outline: "none", cursor: "pointer",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50
                  }}
                >
                  <option value="">Selecione componente curricular</option>
                  <option>Matemática</option>
                  <option>Língua Portuguesa</option>
                  <option>Ciências</option>
                  <option>História</option>
                  <option>Geografia</option>
                </select>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                  Ano/Série <span style={{ color: "#ff505f" }}>*</span>
                </div>
                <select
                  value={ano}
                  onChange={e => setAno(e.target.value)}
                  style={{
                    width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
                    padding: "11px 14px", fontSize: 13, color: ano ? "#333" : "#6a7282",
                    background: "#fff", outline: "none", cursor: "pointer",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50
                  }}
                >
                  <option value="">Selecione ano/série</option>
                  {["1º Ano","2º Ano","3º Ano","4º Ano","5º Ano","6º Ano","7º Ano","8º Ano","9º Ano"].map(a => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* BNCC */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
                Habilidade da BNCC <span style={{ color: "#8c8c8c", fontWeight: 400, fontSize: 12 }}>(opcional)</span>
              </div>
              <div style={{ position: "relative" }}>
                <span style={{
                  position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                  display: "flex", alignItems: "center", pointerEvents: "none"
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bcbcbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </span>
                <input
                  placeholder="Busca com sugestões: ex: EF03MA01"
                  style={{
                    width: "100%", border: "2px solid #e5e7eb", borderRadius: 10,
                    padding: "11px 14px 11px 32px", fontSize: 13,
                    color: "rgba(102,102,102,0.8)", outline: "none",
                    fontFamily: "Poppins, sans-serif", boxSizing: "border-box", height: 50
                  }}
                />
              </div>
              <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>Nenhuma habilidade selecionada</div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
            <button
              onClick={limpar}
              style={{
                border: "2px solid #fc8181", borderRadius: 9,
                padding: "10px 22px", fontSize: 14, color: "#e53e3e",
                background: "#fff", cursor: "pointer", transition: "all 0.15s",
                fontFamily: "Poppins, sans-serif"
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
                transition: "all 0.15s", fontFamily: "Poppins, sans-serif"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
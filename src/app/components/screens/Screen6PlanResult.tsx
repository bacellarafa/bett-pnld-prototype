import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { ExportModal } from "../ExportModal";
import { FeedbackControl } from "../FeedbackControl";
import { EditableText } from "../EditableText";

interface Props {
  onGoTo: (n: number) => void;
  planData: { comp: string; ano: string; tema: string };
}

const CONTENT_TYPE = "plano_de_aula" as const;

// ─── Accordion section card com botão "Editar conteúdo" ───────────────────────
function SectionCard({ title, titleSuffix, children, defaultOpen = true }: {
  title: string; titleSuffix?: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ background: "#fff", border: "1px solid #f2f2f3", borderRadius: 6, marginBottom: 10, overflow: "hidden" }}>
      <div onClick={() => setOpen(o => !o)} style={{ borderBottom: open ? "1px solid #f2f2f3" : "none", padding: "13px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", userSelect: "none" }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172b", margin: 0 }}>
          {title}{titleSuffix && <span style={{ fontWeight: 400, color: "#ababab" }}> {titleSuffix}</span>}
        </p>
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" style={{ flexShrink: 0, transform: open ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s" }}>
          <path d="M1 6L5 2L9 6" stroke="#717182" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {open && <div style={{ padding: "16px 24px", fontSize: 13, color: "#333", lineHeight: 1.7 }}>{children}</div>}
    </div>
  );
}

function MomentoCard({ n, title, duracao, text, onChange }: {
  n: number; title: string; duracao: string; text: string; onChange: (t: string) => void;
}) {
  return (
    <div style={{ background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 8, padding: "14px 18px", marginBottom: 10 }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: "#000", margin: "0 0 2px" }}>Momento {n}: {title}</p>
      <p style={{ fontSize: 12, color: "#555", margin: "0 0 8px" }}>Duração: {duracao}</p>
      <div style={{ fontSize: 13, color: "#333", lineHeight: 1.7 }}>
        <EditableText value={text} onChange={onChange} contentType={CONTENT_TYPE} fieldType="momento" sectionName={`Momento ${n}: ${title}`} readStyle={{ fontSize: 13, color: "#333", lineHeight: 1.7 }} />
      </div>
    </div>
  );
}

const MOMENTOS_INICIAIS = [
  { title: "Introdução e Motivação", duracao: "15 minutos", text: "Inicie a aula perguntando: \"Vocês sabem de onde vem a água que bebemos?\" Anote as respostas no quadro como ponto de partida para apresentar o ciclo hidrológico. Apresente um vídeo curto (5 min) sobre o ciclo da água e discuta brevemente o que foi visto." },
  { title: "Explorando o Ciclo da Água", duracao: "30 minutos", text: "Explique as etapas do ciclo (evaporação, condensação, precipitação, infiltração) com slides e imagens. Incentive a participação com perguntas dirigidas. Realize o experimento do \"ciclo da água na sacola plástica\": os alunos observam a condensação e evaporação ao longo da aula." },
  { title: "Atividade de Ciclo e Mudança Física", duracao: "25 minutos", text: "Em grupos, cada equipe receberá imagens sobre as mudanças de estado físico da água e deverá montar uma sequência lógica que represente o ciclo hidrológico." },
  { title: "Contextualização e Reflexão", duracao: "30 minutos", text: "Apresente de forma prática a produção de energia elétrica (hidrelétricas) e a importância do ciclo da água. Os alunos refletem sobre o impacto das ações humanas (desmatamento, poluição) e discutem soluções possíveis." },
  { title: "Compartilhamento e Avaliação", duracao: "30 minutos", text: "Cada grupo apresenta seu diagrama do ciclo da água com setas indicando as etapas principais. Produção textual (mínimo de um parágrafo) sobre a importância do ciclo da água e a conservação dos recursos hídricos." },
];

const DURACAO_INICIAL = "3 (três) aulas de 45 (quarenta e cinco) minutos. A aula será estruturada em momentos estratégicos que permitam uma abordagem completa e interativa — perguntas e respostas, atividades práticas de experimentação e brincadeiras para demonstrar os resultados científicos envolvidos no ciclo da água.";

export function Screen6PlanResult({ onGoTo, planData }: Props) {
  const { comp, ano, tema } = planData;
  const [activeTab, setActiveTab] = useState<"geral" | "adaptacao">("adaptacao");
  const [exportOpen, setExportOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(true);
  const [adaptOpen, setAdaptOpen] = useState(true);

  const [temaTexto, setTemaTexto] = useState(tema || "O ciclo da água e sua importância");
  const [duracaoTexto, setDuracaoTexto] = useState(DURACAO_INICIAL);
  const [momentos, setMomentos] = useState(MOMENTOS_INICIAIS);
  const updateMomento = (i: number, t: string) => setMomentos(m => m.map((mo, idx) => (idx === i ? { ...mo, text: t } : mo)));

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={3} onGoTo={onGoTo} />
      <div style={{ position: "absolute", left: 291, right: 0, top: 0, bottom: 0, overflowY: "auto", background: "#fff" }}>
        <div style={{ position: "relative", padding: "40px 40px 60px", width: 1108, boxSizing: "border-box" }}>

          {successOpen && (
            <div style={{ position: "absolute", top: 24, right: 40, width: 500, zIndex: 5, display: "flex", gap: 12, alignItems: "center", background: "#f0fdf4", border: "1px solid #00c950", borderRadius: 12, padding: 16, boxShadow: "0 4px 6px rgba(13,7,18,0.16)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a63e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172b" }}>Plano de Aula gerado com sucesso!</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 1 }}>Você ainda pode gerar <strong style={{ color: "#000" }}>2</strong> planos de aula hoje!</div>
              </div>
              <button onClick={() => setSuccessOpen(false)} aria-label="Fechar" style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", lineHeight: 0, padding: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 41, width: 1028 }}>

            {/* Header card */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 24, fontWeight: 600, color: "#000" }}>Plano de Aula: {temaTexto}</span>
                <span style={{ width: 36, height: 36, borderRadius: 14, border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }} title="Renomear">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                </span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <Chip bg="#f5f5f5" color="#666">{comp}</Chip>
                <Chip bg="#f5f5f5" color="#666">{ano} - Ensino Fundamental</Chip>
                <span style={{ fontSize: 12, color: "#666" }}>5 aulas</span>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 2 }}>
                <button onClick={() => setActiveTab("geral")} style={{ padding: "8px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer", fontFamily: "Poppins, sans-serif", border: "1px solid #000", background: activeTab === "geral" ? "#000" : "#fff", color: activeTab === "geral" ? "#fff" : "#666", transition: "all 0.15s" }}>Plano Geral (Turma)</button>
                <button onClick={() => setActiveTab("adaptacao")} style={{ padding: "8px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer", fontFamily: "Poppins, sans-serif", border: "none", background: activeTab === "adaptacao" ? "#00beac" : "rgba(0,190,172,0.1)", color: activeTab === "adaptacao" ? "#fff" : "#00beac", transition: "all 0.15s" }}>Adaptação</button>
              </div>

              {/* Adaptação ativa */}
              {activeTab === "adaptacao" && (
                <div style={{ background: "#f0faf9", border: "1px solid #b8f4ee", borderRadius: 6, overflow: "hidden" }}>
                  <div onClick={() => setAdaptOpen(o => !o)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 26px", cursor: "pointer", userSelect: "none" }}>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                      <span style={{ width: 30, height: 30, borderRadius: 8, background: "#00beac", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      </span>
                      <span style={{ fontSize: 18, fontWeight: 600, color: "#0f172b" }}>Adaptação ativa</span>
                    </div>
                    <svg width="12" height="8" viewBox="0 0 10 7" fill="none" style={{ transform: adaptOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s" }}><path d="M1 6L5 2L9 6" stroke="#00beac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  {adaptOpen && (
                    <div style={{ padding: "0 26px 24px 72px", fontSize: 18, color: "#000", lineHeight: "30px" }}>
                      <p style={{ margin: 0 }}>Este plano foi ajustado para atender ao seguinte perfil:</p>
                      <ul style={{ margin: 0, paddingLeft: 27 }}>
                        <li>Dificuldade com textos mais longos</li>
                        <li>Dificuldade com desafios novos</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Barra de ações */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 48 }}>
              <div style={{ display: "flex", gap: 18, alignItems: "center", height: "100%" }}>
                <button onClick={() => setExportOpen(true)} style={actionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  <span style={{ fontSize: 16, color: "#666" }}>Exportar</span>
                  <span style={{ width: 1, height: 28, background: "#d9d9d9" }} />
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 2L5 6L9 2" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button onClick={() => window.print()} style={actionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                  <span style={{ fontSize: 16, color: "#666" }}>Imprimir</span>
                </button>
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center", height: "100%" }}>
                <FeedbackControl contentType={CONTENT_TYPE} />
                <button onClick={() => onGoTo(5)} style={{ height: 48, background: "#0032be", border: "1px solid #0032be", borderRadius: 14, padding: "0 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /></svg>
                  <span style={{ fontSize: 16, color: "#fff" }}>Gerar Novo Plano</span>
                </button>
              </div>
            </div>

            {/* Seções */}
            <div>
              <SectionCard title="Tema/Conteúdo de aula">
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
                  <span style={{ fontWeight: 600, flexShrink: 0 }}>Tema:</span>
                  <EditableText value={temaTexto} onChange={setTemaTexto} contentType={CONTENT_TYPE} fieldType="campo_curto" sectionName="Tema" multiline={false} readStyle={{ fontSize: 13, color: "#333" }} />
                </div>
                <p style={{ fontWeight: 600, margin: "0 0 6px" }}>Objetivos:</p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>Compreender o processo pelo qual a água se move, identificando as etapas do ciclo hidrológico.</li>
                  <li>Reconhecer as mudanças de estado físico da água (evaporação, condensação, fusão, sublimação).</li>
                  <li>Analisar a importância do ciclo da água para os seres humanos, o meio ambiente e a produção de alimentos.</li>
                  <li>Identificar a relação da energia do sol com a evaporação da água.</li>
                  <li>Aplicar o conteúdo através de desenhos, maquetes ou esquemas.</li>
                </ul>
              </SectionCard>

              <SectionCard title="Duração Estimada" titleSuffix="(135 min — 3 aulas de 45 min)">
                <EditableText value={duracaoTexto} onChange={setDuracaoTexto} contentType={CONTENT_TYPE} fieldType="secao_longa" sectionName="Duração Estimada" readStyle={{ fontSize: 13, color: "#333", lineHeight: 1.7 }} />
              </SectionCard>

              <SectionCard title="Conteúdo Programático">
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>O ciclo hidrológico: o percurso da água na natureza.</li>
                  <li>Mudanças de estado físico da água: evaporação, condensação, fusão e solidificação.</li>
                  <li>A energia do sol como fonte de calor do ciclo da água.</li>
                  <li>Importância do ciclo da água: agricultura, energia elétrica (turbinas e hidrelétricas).</li>
                  <li>A conservação dos recursos hídricos e suas consequências.</li>
                </ul>
              </SectionCard>

              <SectionCard title="Metodologia">
                <p style={{ margin: "0 0 6px" }}>Abordagem construtivista ativa, com interações participativas:</p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li><strong>Aula expositiva e dialogada:</strong> questões de roteiro e slides para acessar o conhecimento prévio.</li>
                  <li><strong>Atividades práticas:</strong> experimentos visuais com os elementos do ciclo da água.</li>
                  <li><strong>Desenhos e esquemas:</strong> os alunos representam visualmente o ciclo da água.</li>
                </ul>
              </SectionCard>

              <SectionCard title="Aulas e Sequências Didáticas">
                {momentos.map((m, i) => (
                  <MomentoCard key={i} n={i + 1} title={m.title} duracao={m.duracao} text={m.text} onChange={(t) => updateMomento(i, t)} />
                ))}
              </SectionCard>

              <SectionCard title="Avaliação">
                <p style={{ margin: "0 0 6px" }}>Avaliação contínua e formativa, observando:</p>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>Desenvolvimento do raciocínio científico na montagem do ciclo da água.</li>
                  <li>Participação e engajamento durante as discussões e atividades.</li>
                  <li>Verificação dos conhecimentos adquiridos e aplicabilidade no cotidiano.</li>
                </ul>
              </SectionCard>

              <SectionCard title="Materiais e Ferramentas">
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>Projetor / multimídia para apresentação de slides e vídeos.</li>
                  <li>Sacolas plásticas transparentes, água colorida, fita adesiva (experimento).</li>
                  <li>Folhas de atividade, tesoura e cola para as atividades em grupo.</li>
                  <li>Quadro branco ou lousa para registro coletivo.</li>
                </ul>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>

      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} contentType={CONTENT_TYPE} variant="plano" entryPoint="action_bar" materialLabel="Plano de Aula" />
    </div>
  );
}

const actionBtn: React.CSSProperties = {
  height: 48, background: "#fff", border: "1px solid #666", borderRadius: 14,
  padding: "0 17px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
  fontFamily: "Poppins, sans-serif",
};

function Chip({ children, bg, color, weight = 500 }: { children: React.ReactNode; bg: string; color: string; weight?: number }) {
  return (
    <span style={{ background: bg, color, padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: weight, whiteSpace: "nowrap" }}>
      {children}
    </span>
  );
}

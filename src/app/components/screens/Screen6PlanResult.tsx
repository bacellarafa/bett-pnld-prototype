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

// ─── Accordion section card ───────────────────────────────────────────────────
function SectionCard({
  title, titleSuffix, children, defaultOpen = true,
}: {
  title: string;
  titleSuffix?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{
      background: "#fff", border: "1px solid #f2f2f3",
      borderRadius: 6, marginBottom: 10, overflow: "hidden",
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          background: "#fff", borderBottom: open ? "1px solid #f2f2f3" : "none",
          padding: "13px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", userSelect: "none",
        }}
      >
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172b", margin: 0 }}>
          {title}
          {titleSuffix && (
            <span style={{ fontWeight: 400, color: "#ababab" }}> {titleSuffix}</span>
          )}
        </p>
        <svg
          width="10" height="7" viewBox="0 0 10 7" fill="none"
          style={{ flexShrink: 0, transform: open ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s" }}
        >
          <path d="M1 6L5 2L9 6" stroke="#717182" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open && (
        <div style={{ padding: "16px 24px", fontSize: 13, color: "#333", lineHeight: 1.7 }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Momento sub-card (editável) ──────────────────────────────────────────────
function MomentoCard({
  n, title, duracao, text, onChange,
}: {
  n: number; title: string; duracao: string; text: string; onChange: (t: string) => void;
}) {
  return (
    <div style={{
      background: "#f9fafb", border: "1px solid #f3f4f6",
      borderRadius: 8, padding: "14px 18px", marginBottom: 10,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: "#000", margin: "0 0 2px" }}>
        Momento {n}: {title}
      </p>
      <p style={{ fontSize: 12, color: "#555", margin: "0 0 8px" }}>Duração: {duracao}</p>
      <div style={{ fontSize: 13, color: "#333", lineHeight: 1.7 }}>
        <EditableText
          value={text}
          onChange={onChange}
          contentType={CONTENT_TYPE}
          fieldType="momento"
          sectionName={`Momento ${n}: ${title}`}
          readStyle={{ fontSize: 13, color: "#333", lineHeight: 1.7 }}
        />
      </div>
    </div>
  );
}

// ─── Dados iniciais dos momentos ──────────────────────────────────────────────
const MOMENTOS_INICIAIS = [
  { title: "Introdução e Motivação", duracao: "15 minutos", text: "Inicie a aula perguntando: \"Vocês sabem de onde vem a água que bebemos?\" Anote as respostas no quadro como ponto de partida para apresentar o ciclo hidrológico. Apresente um vídeo curto (5 min) sobre o ciclo da água e discuta brevemente o que foi visto." },
  { title: "Explorando o Ciclo da Água", duracao: "30 minutos", text: "Explique as etapas do ciclo (evaporação, condensação, precipitação, infiltração) com slides e imagens. Incentive a participação com perguntas dirigidas. Realize o experimento do \"ciclo da água na sacola plástica\": os alunos observam a condensação e evaporação ao longo da aula." },
  { title: "Atividade de Ciclo e Mudança Física", duracao: "25 minutos", text: "Em grupos, cada equipe receberá imagens sobre as mudanças de estado físico da água e deverá montar uma sequência lógica que represente o ciclo hidrológico." },
  { title: "Contextualização e Reflexão", duracao: "30 minutos", text: "Apresente de forma prática a produção de energia elétrica (hidrelétricas) e a importância do ciclo da água. Os alunos refletem sobre o impacto das ações humanas (desmatamento, poluição) e discutem soluções possíveis." },
  { title: "Compartilhamento e Avaliação", duracao: "30 minutos", text: "Cada grupo apresenta seu diagrama do ciclo da água com setas indicando as etapas principais. Produção textual (mínimo de um parágrafo) sobre a importância do ciclo da água e a conservação dos recursos hídricos." },
];

const DURACAO_INICIAL =
  "3 (três) aulas de 45 (quarenta e cinco) minutos. A aula será estruturada em momentos estratégicos que permitam uma abordagem completa e interativa — perguntas e respostas, atividades práticas de experimentação e brincadeiras para demonstrar os resultados científicos envolvidos no ciclo da água.";

// ─── Main component ────────────────────────────────────────────────────────────
export function Screen6PlanResult({ onGoTo, planData }: Props) {
  const { comp, ano, tema } = planData;

  const [activeTab, setActiveTab] = useState<"geral" | "adaptacao">("adaptacao");
  const [exportOpen, setExportOpen] = useState(false);

  // Conteúdo editável
  const [planTitle, setPlanTitle] = useState("Plano de Aula");
  const [temaTexto, setTemaTexto] = useState(tema || "O ciclo da água e sua importância");
  const [duracaoTexto, setDuracaoTexto] = useState(DURACAO_INICIAL);
  const [momentos, setMomentos] = useState(MOMENTOS_INICIAIS);

  const setActive = (tab: "geral" | "adaptacao") => setActiveTab(tab);

  const updateMomento = (i: number, t: string) =>
    setMomentos((m) => m.map((mo, idx) => (idx === i ? { ...mo, text: t } : mo)));

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={3} onGoTo={onGoTo} />

      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        overflowY: "auto", background: "#fff",
      }}>
        <div style={{ padding: "28px 36px 60px 36px" }}>

          {/* ── Success banner ── */}
          <div style={{
            background: "#f0fdf4", borderRadius: 14, borderLeft: "5px solid #00c950",
            padding: "12px 18px 10px", marginBottom: 10, boxSizing: "border-box",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#ck)">
                  <path d="M18.333 9.233V10a8.333 8.333 0 1 1-4.942-7.617" stroke="#00A63E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.333 3.333 10 11.675l-2.5-2.5" stroke="#00A63E" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="ck"><rect width="20" height="20" fill="white" /></clipPath></defs>
              </svg>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>Plano de Aula gerado com sucesso!</span>
            </div>
            <p style={{ fontSize: 12, color: "#666", margin: 0, paddingLeft: 28 }}>
              Você ainda pode gerar <strong style={{ color: "#000" }}>2</strong> planos de aula hoje!
            </p>
          </div>

          {/* ── Subject tag ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
            <div style={{ background: "#faa01e", borderRadius: 6, height: 24, padding: "0 10px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#fff", whiteSpace: "nowrap" }}>{comp} — {ano}</span>
            </div>
            <span style={{ fontSize: 12, color: "#666" }}>5 aulas</span>
          </div>

          {/* ── Plan header card with tabs ── */}
          <div style={{
            background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10, marginBottom: 12,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ padding: "22px 24px 14px", textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <EditableText
                  value={planTitle}
                  onChange={setPlanTitle}
                  contentType={CONTENT_TYPE}
                  fieldType="titulo"
                  sectionName="Título do plano"
                  multiline={false}
                  readStyle={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a" }}
                />
              </div>
              <p style={{ fontSize: 13, color: "#666", margin: "3px 0 0" }}>{ano} do Ensino Fundamental</p>
            </div>

            <div style={{ borderTop: "1px solid #f0f0f0", padding: "12px 28px", display: "flex", gap: 20, alignItems: "center" }}>
              <button
                onClick={() => setActive("geral")}
                style={{
                  padding: "8px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer",
                  fontFamily: "Poppins, sans-serif", border: "1px solid #000",
                  background: activeTab === "geral" ? "#000" : "#fff",
                  color: activeTab === "geral" ? "#fff" : "#666", transition: "all 0.15s",
                }}
              >
                Plano Geral (Turma)
              </button>
              <button
                onClick={() => setActive("adaptacao")}
                style={{
                  padding: "8px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer",
                  fontFamily: "Poppins, sans-serif", border: "none",
                  background: activeTab === "adaptacao" ? "#00beac" : "rgba(0,190,172,0.1)",
                  color: activeTab === "adaptacao" ? "#fff" : "#00beac", transition: "all 0.15s",
                }}
              >
                Adaptação
              </button>
            </div>
          </div>

          {/* ── Adaptação Ativa card ── */}
          {activeTab === "adaptacao" && (
            <div style={{
              background: "#f0faf9", border: "1px solid #b8f4ee", borderRadius: 8,
              padding: "14px 20px", marginBottom: 12, display: "flex", gap: 12, alignItems: "flex-start",
            }}>
              <div style={{ background: "#63dcd0", borderRadius: 7, width: 28, height: 28, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M16.667 17.5v-1.667A3.333 3.333 0 0 0 13.333 12.5H6.667A3.333 3.333 0 0 0 3.333 15.833V17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="6.667" r="3.333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#000", margin: "0 0 3px" }}>Adaptação Ativa</p>
                <p style={{ fontSize: 12, color: "#334155", margin: "0 0 4px" }}>Este plano foi ajustado para atender ao seguinte perfil:</p>
                <ul style={{ paddingLeft: 16, fontSize: 12, color: "#334155", margin: 0 }}>
                  <li>Dificuldade com textos mais longos</li>
                  <li>Dificuldade com desafios novos</li>
                </ul>
              </div>
            </div>
          )}

          {/* ── Action bar ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {/* Exportar ▾ */}
              <button
                onClick={() => setExportOpen(true)}
                style={{
                  background: "#46b2ff", borderRadius: 10, height: 38, padding: "0 16px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  cursor: "pointer", border: "none", fontFamily: "Poppins, sans-serif",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 10v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.667 6.667 8 10l3.333-3.333" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 10V2" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>Exportar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </button>

              {/* Imprimir */}
              <button
                onClick={() => window.print()}
                style={{
                  background: "#fff", borderRadius: 10, height: 38, padding: "0 16px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  cursor: "pointer", border: "1px solid #666", fontFamily: "Poppins, sans-serif",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#pr)">
                    <path d="M4 5.333V1.333h8V5.333" stroke="#666" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 10.667H2.667A1.333 1.333 0 0 1 1.333 9.333V6.667A1.333 1.333 0 0 1 2.667 5.333h10.666A1.333 1.333 0 0 1 14.667 6.667v2.666A1.333 1.333 0 0 1 13.333 10.667H12" stroke="#666" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 8h8v6.667H4z" stroke="#666" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs><clipPath id="pr"><rect width="16" height="16" fill="white" /></clipPath></defs>
                </svg>
                <span style={{ fontSize: 13, color: "#666" }}>Imprimir</span>
              </button>
            </div>

            {/* Feedback + Gerar Novo Plano */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <FeedbackControl contentType={CONTENT_TYPE} />
              <button
                onClick={() => onGoTo(5)}
                style={{
                  background: "#0032be", borderRadius: 10, height: 38, padding: "0 18px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  cursor: "pointer", border: "none", fontFamily: "Poppins, sans-serif",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
                <span style={{ fontSize: 13, color: "#fff", fontWeight: 600 }}>Gerar Novo Plano</span>
              </button>
            </div>
          </div>

          {/* ── Accordion sections ── */}
          <SectionCard title="Tema/Conteúdo de aula">
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
              <span style={{ fontWeight: 600, flexShrink: 0 }}>Tema:</span>
              <EditableText
                value={temaTexto}
                onChange={setTemaTexto}
                contentType={CONTENT_TYPE}
                fieldType="campo_curto"
                sectionName="Tema"
                multiline={false}
                readStyle={{ fontSize: 13, color: "#333" }}
              />
            </div>
            <p style={{ fontWeight: 600, margin: "0 0 6px" }}>Objetivos:</p>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li>Compreender o processo pelo qual a água se move, identificando as etapas do ciclo hidrológico.</li>
              <li>Reconhecer as mudanças de estado físico da água (evaporação, condensação, fusão, sublimação) que ocorrem durante o ciclo hidrológico.</li>
              <li>Analisar a importância do ciclo da água para os seres humanos, o meio ambiente e a produção de alimentos e geração de energia elétrica.</li>
              <li>Identificar a relação da energia do sol com a evaporação da água.</li>
              <li>Aplicar o conteúdo através de desenhos, maquetes ou esquemas para representar as etapas do ciclo da água.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Duração Estimada" titleSuffix="(135 min — 3 aulas de 45 min)">
            <EditableText
              value={duracaoTexto}
              onChange={setDuracaoTexto}
              contentType={CONTENT_TYPE}
              fieldType="secao_longa"
              sectionName="Duração Estimada"
              readStyle={{ fontSize: 13, color: "#333", lineHeight: 1.7 }}
            />
          </SectionCard>

          <SectionCard title="Conteúdo Programático">
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li>O ciclo hidrológico: o percurso da água na natureza.</li>
              <li>Mudanças de estado físico da água: evaporação, condensação, fusão e solidificação.</li>
              <li>A energia do sol como fonte de calor do ciclo da água.</li>
              <li>Importância do ciclo da água para seres humanos e animais: uso na agricultura, energia elétrica (turbinas e hidrelétricas).</li>
              <li>A conservação dos recursos hídricos e suas consequências.</li>
              <li>O papel da floresta no ciclo da água e sua relação com a qualidade do ar e do solo.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Metodologia">
            <p style={{ margin: "0 0 6px" }}>Abordagem construtivista ativa, possibilitando a construção do conhecimento através de interações participativas:</p>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li><strong>Aula expositiva e dialogada:</strong> com questões de roteiro e slides para acessar o conhecimento prévio dos alunos.</li>
              <li><strong>Atividades Práticas:</strong> experimentos visuais com os elementos do ciclo da água.</li>
              <li><strong>Desenhos e Esquemas:</strong> os alunos representam visualmente o ciclo da água através de desenhos e esquemas.</li>
            </ul>
          </SectionCard>

          <SectionCard title="Aulas e Sequências Didáticas">
            {momentos.map((m, i) => (
              <MomentoCard
                key={i}
                n={i + 1}
                title={m.title}
                duracao={m.duracao}
                text={m.text}
                onChange={(t) => updateMomento(i, t)}
              />
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

      {/* ── Modal de exportação (variante Plano: toggle "Incluir adaptações") ── */}
      <ExportModal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        contentType={CONTENT_TYPE}
        variant="plano"
        entryPoint="action_bar"
        materialLabel="Plano de Aula"
      />
    </div>
  );
}

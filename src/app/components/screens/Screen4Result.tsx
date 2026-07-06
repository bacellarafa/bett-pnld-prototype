import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { ExportModal } from "../ExportModal";
import { FeedbackControl } from "../FeedbackControl";
import { showToast } from "../../lib/toast";

interface Props {
  onGoTo: (n: number) => void;
  formData: { comp: string; ano: string; perfil: string };
}

const CONTENT_TYPE = "atividade_inclusiva" as const;

const QUESTIONS = [
  "Cite três exemplos de grandezas que estudamos em Matemática e que usamos no dia a dia.",
  "Qual é a unidade padrão de medida de comprimento no Sistema Métrico Decimal? Além dela, cite duas unidades de medida de comprimento.",
  "Se você precisa medir a massa de um pacote de arroz e a massa de um caminhão, quais unidades de massa seriam mais adequadas para cada situação?",
  "Para medir a quantidade de água em uma garrafa e a quantidade de remédio em uma seringa, quais unidades de medida de capacidade você usaria?",
  "Mencione dois instrumentos que podemos usar para medir o comprimento de objetos ou distâncias.",
];

const ANSWERS = [
  "Ex.: comprimento, massa e capacidade (tempo e temperatura também são aceitos).",
  "O metro (m). Outras: centímetro (cm) e quilômetro (km).",
  "Pacote de arroz: grama/quilograma (kg); caminhão: tonelada (t).",
  "Garrafa: litro (L); seringa: mililitro (mL).",
  "Régua e trena (fita métrica).",
];

export function Screen4Result({ onGoTo, formData }: Props) {
  const { comp, ano, perfil } = formData;
  const [title, setTitle] = useState(`Atividade Inclusiva de ${comp}`);
  const [titleEditing, setTitleEditing] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [adaptOpen, setAdaptOpen] = useState(true);
  const [exportOpen, setExportOpen] = useState(false);
  const [exportEntry, setExportEntry] = useState<"action_bar" | "edit_alert">("action_bar");
  const [exportFormat, setExportFormat] = useState<"pdf" | "docx">("pdf");

  useEffect(() => {
    showToast("Atividade gerada com sucesso!", "Você ainda pode gerar 3 atividades hoje!");
  }, []);

  const openExport = (entry: "action_bar" | "edit_alert", format: "pdf" | "docx" = "pdf") => {
    setExportEntry(entry); setExportFormat(format); setExportOpen(true);
  };

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={2} onGoTo={onGoTo} />
      <div style={{ position: "absolute", left: 291, right: 0, top: 0, bottom: 0, overflowY: "auto", background: "#fff" }}>
        <div style={{ position: "relative", padding: "40px 40px 60px", width: 1108, boxSizing: "border-box" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: 41, width: 1028 }}>

            {/* ── Header card (título + chips + adaptação) ── */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Título + lápis */}
              <div style={{ display: "flex", gap: 12, alignItems: "center", minWidth: 0 }}>
                {titleEditing ? (
                  <input value={title} autoFocus onChange={(e) => setTitle(e.target.value)} onBlur={() => setTitleEditing(false)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === "Escape") setTitleEditing(false); }}
                    style={{ fontSize: 24, fontWeight: 600, color: "#000", border: "1px solid #cbd5e1", borderRadius: 8, padding: "2px 10px", fontFamily: "Poppins, sans-serif", outline: "none", width: 560, maxWidth: "60vw" }} />
                ) : (
                  <>
                    <span title={title} style={{ fontSize: 24, fontWeight: 600, color: "#000", maxWidth: 620, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
                    <button onClick={() => setTitleEditing(true)} title="Renomear" style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 14, border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                    </button>
                  </>
                )}
              </div>

              {/* Chips */}
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                <Chip bg="#f5f5f5" color="#666">{comp}</Chip>
                <Chip bg="#f5f5f5" color="#666">{ano} - Ensino Fundamental</Chip>
                <Chip bg="#666" color="#f5f5f5" titleAttr="Matemática (5º ano): identificar e descrever regularidades em sequências numéricas recursivas.">EF05MA01</Chip>
                <Chip bg="#00beac" color="#fff" weight={600}>Atividade inclusiva</Chip>
                <span style={{ fontSize: 12, color: "#666" }}>5 questões</span>
                <span style={{ fontSize: 12, color: "#666" }}>•</span>
                <span style={{ fontSize: 12, color: "#666" }}>Questões avulsas</span>
              </div>

              {/* Adaptação ativa */}
              <div style={{ background: "#f0faf9", border: "1px solid #b8f4ee", borderRadius: 6, overflow: "hidden" }}>
                <div onClick={() => setAdaptOpen(o => !o)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 26px", cursor: "pointer", userSelect: "none" }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <span style={{ width: 30, height: 30, borderRadius: 8, background: "#00beac", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172b" }}>Adaptação ativa</span>
                  </div>
                  <svg width="12" height="8" viewBox="0 0 10 7" fill="none" style={{ transform: adaptOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s" }}><path d="M1 6L5 2L9 6" stroke="#00beac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                {adaptOpen && (
                  <div style={{ padding: "0 26px 24px 72px", fontSize: 13, color: "#333", lineHeight: 1.7 }}>
                    <p style={{ margin: 0 }}>Atividade foi adaptada para atender ao seguinte perfil:</p>
                    <ul style={{ margin: 0, paddingLeft: 27 }}>
                      <li>{perfil || "Dificuldade com textos mais longos"}</li>
                      <li>Dificuldade com desafios novos</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* ── Barra de ações ── */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 48 }}>
              <div style={{ display: "flex", gap: 18, alignItems: "center", height: "100%" }}>
                {/* Exportar (split com divisória + chevron) */}
                <button onClick={() => openExport("action_bar")} style={actionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                  <span style={{ fontSize: 16, color: "#666" }}>Exportar</span>
                  <span style={{ width: 1, height: 28, background: "#d9d9d9" }} />
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M1 2L5 6L9 2" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                {/* Imprimir */}
                <button onClick={() => window.print()} style={actionBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                  <span style={{ fontSize: 16, color: "#666" }}>Imprimir</span>
                </button>
                {/* Exibir respostas */}
                <button onClick={() => setShowAnswers(v => !v)} style={{ ...actionBtn, borderColor: showAnswers ? "#0032be" : "#666" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={showAnswers ? "#0032be" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                  <span style={{ fontSize: 16, color: showAnswers ? "#0032be" : "#666" }}>{showAnswers ? "Ocultar respostas" : "Exibir respostas"}</span>
                </button>
              </div>

              <div style={{ display: "flex", gap: 18, alignItems: "center", height: "100%" }}>
                <FeedbackControl contentType={CONTENT_TYPE} />
                <button onClick={() => onGoTo(2)} style={{ height: 48, background: "#0032be", border: "1px solid #0032be", borderRadius: 14, padding: "0 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
                  <span style={{ fontSize: 16, color: "#fff" }}>Gerar Nova Atividade</span>
                </button>
              </div>
            </div>

            {/* ── Alerta de edição ── */}
            {alertOpen && (
              <div style={{ display: "flex", alignItems: "stretch", background: "#f2faff", border: "1px solid #96b0f4", borderRadius: 8, overflow: "hidden", gap: 16, paddingRight: 16 }}>
                <div style={{ width: 4, background: "#0041e6", flexShrink: 0 }} />
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "12px 0", flex: 1 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0041e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ fontSize: 14, color: "#494150", lineHeight: 1.52 }}>As questões não podem ser editadas aqui. Para fazer alterações, exporte a atividade em Word (.docx)</span>
                    <button onClick={() => openExport("edit_alert", "docx")} style={{ alignSelf: "flex-start", background: "none", border: "none", padding: 0, color: "#0041e6", fontSize: 14, textDecoration: "underline", cursor: "pointer", fontFamily: "Poppins, sans-serif" }}>Exportar em .DOCX</button>
                  </div>
                </div>
                <button onClick={() => setAlertOpen(false)} aria-label="Fechar" style={{ background: "none", border: "none", cursor: "pointer", color: "#494150", lineHeight: 0, padding: 0, alignSelf: "center", flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
            )}

            {/* ── Questões ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {QUESTIONS.map((q, i) => (
                <div key={i} style={{ border: "1px solid #f2f2f3", borderRadius: 6, padding: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <p style={{ margin: 0, fontSize: 16, color: "#101828", lineHeight: "24px" }}>{i + 1}. {q}</p>
                    {showAnswers ? (
                      <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 14, padding: 16, fontSize: 14, color: "#166534" }}>
                        <strong>Gabarito:</strong> {ANSWERS[i]}
                      </div>
                    ) : (
                      <div style={{ background: "#f5f5f5", border: "1px dashed rgba(102,102,102,0.4)", borderRadius: 14, height: 60, padding: 16, boxSizing: "border-box" }}>
                        <span style={{ fontSize: 13, color: "rgba(102,102,102,0.4)" }}>[Espaço para resposta]</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} contentType={CONTENT_TYPE} variant="atividade" entryPoint={exportEntry} initialFormat={exportFormat} materialLabel={`Atividade Inclusiva de ${comp}`} />
    </div>
  );
}

const actionBtn: React.CSSProperties = {
  height: 48, background: "#fff", border: "1px solid #666", borderRadius: 14,
  padding: "0 17px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
  fontFamily: "Poppins, sans-serif",
};

function Chip({ children, bg, color, weight = 500, titleAttr }: { children: React.ReactNode; bg: string; color: string; weight?: number; titleAttr?: string }) {
  return (
    <span title={titleAttr} style={{ background: bg, color, padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: weight, whiteSpace: "nowrap", cursor: titleAttr ? "help" : "default" }}>
      {children}
    </span>
  );
}

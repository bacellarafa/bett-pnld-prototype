import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { ExportModal } from "../ExportModal";
import { FeedbackControl } from "../FeedbackControl";

interface Props {
  onGoTo: (n: number) => void;
  formData: { comp: string; ano: string; perfil: string };
}

const CONTENT_TYPE = "atividade_inclusiva" as const;

const QUESTIONS = [
  "1. Cite três exemplos de grandezas que estudamos em Matemática e que usamos no dia a dia.",
  "2. Qual é a unidade padrão de medida de comprimento no Sistema Métrico Decimal? Além dela, cite duas unidades de medida de comprimento.",
  "3. Se você precisa medir a massa de um pacote de arroz e a massa de um caminhão, quais unidades de massa seriam mais adequadas para cada situação?",
  "4. Para medir a quantidade de água em uma garrafa e a quantidade de remédio em uma seringa, quais unidades de medida de capacidade você usaria?",
  "5. Mencione dois instrumentos que podemos usar para medir o comprimento de objetos ou distâncias.",
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
  const [showAnswers, setShowAnswers] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [exportEntry, setExportEntry] = useState<"action_bar" | "edit_alert">("action_bar");
  const [exportFormat, setExportFormat] = useState<"pdf" | "docx">("pdf");

  const openExport = (entry: "action_bar" | "edit_alert", format: "pdf" | "docx" = "pdf") => {
    setExportEntry(entry);
    setExportFormat(format);
    setExportOpen(true);
  };

  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={2} onGoTo={onGoTo} />
      <div style={{ position: "absolute", left: 291, right: 0, top: 0, bottom: 0, overflowY: "auto", background: "#fff" }}>
        <div style={{ padding: "32px 40px 40px 40px", minHeight: 900 }}>

          {/* Success banner */}
          <div style={{
            background: "#f0fdf4", borderLeft: "5px solid #22c55e",
            borderRadius: 12, padding: "16px 22px", marginBottom: 12
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 17, fontWeight: 600, color: "#000" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
              </svg>
              Atividade gerada com sucesso!
            </div>
            <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
              Você ainda pode gerar <strong style={{ color: "#000" }}>3</strong> atividades hoje!
            </div>
          </div>

          {/* Alerta de edição (barra azul inline) — edit_alert_cta_clicked */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
            background: "#eff6ff", border: "1px solid #bfdbfe", borderLeft: "4px solid #3b82f6",
            borderRadius: 10, padding: "11px 16px", marginBottom: 16,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
              </svg>
              <span style={{ fontSize: 13, color: "#1e40af" }}>
                Quer editar as questões? Exporte em <strong>.DOCX</strong> e ajuste no seu editor de texto.
              </span>
            </div>
            <button
              onClick={() => openExport("edit_alert", "docx")}
              style={{
                flexShrink: 0, display: "flex", alignItems: "center", gap: 7,
                background: "#2563eb", color: "#fff", border: "none", borderRadius: 9,
                padding: "8px 14px", fontSize: 12.5, fontWeight: 500, cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Exportar em .DOCX
            </button>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 22, flexWrap: "wrap" }}>
            <span style={{ padding: "4px 12px", borderRadius: 7, fontSize: 12, color: "#fff", fontWeight: 400, background: "#f59e0b" }}>
              {comp} – {ano}
            </span>
            <span style={{ padding: "4px 12px", borderRadius: 7, fontSize: 12, color: "#fff", fontWeight: 400, background: "#00beac" }}>
              Atividade inclusiva
            </span>
            <span style={{ fontSize: 12, color: "#888" }}>5 questões</span>
          </div>

          {/* Header card */}
          <div style={{
            background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
            padding: "28px 32px", textAlign: "center", marginBottom: 16,
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#0a0a0a", marginBottom: 6 }}>
              Atividade Inclusiva de {comp}
            </div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 6 }}>{ano} do Ensino Fundamental</div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 20, lineHeight: 1.5 }}>
              <strong>Habilidade:</strong> EF05MA01 – Identificar e descrever regularidades em sequências numéricas recursivas
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 100 }}>
              <div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>Série de Questões</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#000" }}>5</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>Questões</div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#000" }}>Questões Isoladas</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 12 }}>
              {/* Exportar ▾ */}
              <button
                onClick={() => openExport("action_bar")}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  borderRadius: 12, padding: "9px 16px", fontSize: 14,
                  cursor: "pointer", background: "#46b2ff", border: "1px solid #46b2ff",
                  color: "#fff", fontFamily: "Poppins, sans-serif", fontWeight: 500,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                Exportar
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </button>

              {/* Imprimir */}
              <button
                onClick={() => window.print()}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  borderRadius: 12, padding: "9px 16px", fontSize: 14,
                  cursor: "pointer", background: "#fff", border: "1px solid #999",
                  color: "#555", fontFamily: "Poppins, sans-serif",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                Imprimir
              </button>

              {/* Exibir respostas */}
              <button
                onClick={() => setShowAnswers((v) => !v)}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  borderRadius: 12, padding: "9px 16px", fontSize: 14,
                  cursor: "pointer",
                  background: showAnswers ? "#eef2ff" : "#fff",
                  border: `1px solid ${showAnswers ? "#6366f1" : "#999"}`,
                  color: showAnswers ? "#4338ca" : "#555", fontFamily: "Poppins, sans-serif",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={showAnswers ? "#4338ca" : "#666"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                {showAnswers ? "Ocultar respostas" : "Exibir respostas"}
              </button>
            </div>

            {/* Feedback + Gerar Nova */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <FeedbackControl contentType={CONTENT_TYPE} />
              <button
                onClick={() => onGoTo(2)}
                style={{
                  background: "#0032be", color: "#fff", border: "none", borderRadius: 12,
                  padding: "10px 20px", fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 7, fontWeight: 600,
                  fontFamily: "Poppins, sans-serif"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" />
                </svg>
                Gerar Nova Atividade
              </button>
            </div>
          </div>

          {/* Summary */}
          <div style={{
            background: "#f0faf9", border: "1px solid #b8f4ee", borderRadius: 10,
            padding: "18px 22px", marginBottom: 20
          }}>
            <div style={{
              width: 28, height: 28, background: "#63dcd0", borderRadius: 7,
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#00beac", marginBottom: 3 }}>O que esta atividade trabalha?</div>
            <div style={{ fontSize: 12, color: "#444" }}>Resumo da atividade gerada.</div>
            <hr style={{ border: 0, borderTop: "1.5px solid #b8f4ee", margin: "10px 0" }} />
            <div style={{ fontSize: 13, fontWeight: 600, color: "#000", marginBottom: 4 }}>Perfil do Aluno Informado</div>
            <ul style={{ paddingLeft: 16 }}>
              <li style={{ fontSize: 12, color: "#555" }}>{perfil}</li>
            </ul>
          </div>

          {/* Questions */}
          <div style={{
            background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
            overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
          }}>
            {QUESTIONS.map((q, i) => (
              <div key={i} style={{
                border: "1px solid #f2f2f3", borderRadius: 7, padding: "16px 20px", margin: 16
              }}>
                <div style={{ fontSize: 14, color: "#101828", marginBottom: 10, lineHeight: 1.55 }}>{q}</div>
                {showAnswers ? (
                  <div style={{
                    background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 6,
                    padding: "12px 14px", fontSize: 13, color: "#166534",
                  }}>
                    <strong>Gabarito:</strong> {ANSWERS[i]}
                  </div>
                ) : (
                  <div style={{
                    background: "#fff", border: "1px solid #f2f2f3", borderRadius: 6,
                    padding: "12px 14px", minHeight: 72, fontSize: 13, color: "#bbb"
                  }}>
                    [Espaço para resposta]
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de exportação */}
      <ExportModal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        contentType={CONTENT_TYPE}
        variant="atividade"
        entryPoint={exportEntry}
        initialFormat={exportFormat}
        materialLabel={`Atividade Inclusiva de ${comp}`}
      />
    </div>
  );
}

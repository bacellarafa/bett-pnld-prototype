import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
}

export function Screen0Home({ onGoTo }: Props) {
  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden" }}>
      <Sidebar activeNav={0} onGoTo={onGoTo} />
      <div style={{ position: "absolute", left: 291, right: 0, top: 0, bottom: 0, overflowY: "auto", background: "#fff" }}>
        <div style={{ padding: "52px 72px 40px 72px", minHeight: 900 }}>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#0a0a0a", marginBottom: 4 }}>Bem-vindo(a), Professor(a)!</div>
          <div style={{ fontSize: 16, color: "#4a5568", marginBottom: 24, fontWeight: 400 }}>O que você gostaria de fazer hoje?</div>

          {/* AI Banner */}
          <div style={{
            background: "linear-gradient(135deg, #00beac 0%, #005c56 60%, #073e38 100%)",
            borderRadius: 16, padding: "28px 28px 28px 32px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            marginBottom: 18, position: "relative", overflow: "hidden"
          }}>
            <div style={{
              content: "", position: "absolute", right: 240, top: -40,
              width: 180, height: 180, background: "rgba(255,255,255,0.06)", borderRadius: "50%"
            }} />
            <div style={{ maxWidth: 480, position: "relative", zIndex: 1 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.18)", borderRadius: 100,
                padding: "4px 12px", fontSize: 12, color: "#fff", marginBottom: 14,
                backdropFilter: "blur(4px)"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                </svg>
                Inteligência Artificial
              </div>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 10 }}>
                Vamos planejar a sua<br />próxima aula juntos?
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.88)", lineHeight: 1.55 }}>
                Nossa IA transforma suas ideias em atividades e roteiros completos. Aproveite para experimentar a{" "}
                <strong style={{ fontWeight: 700, color: "#fff" }}>criação de atividades inclusiva</strong>{" "}
                e veja como é simples acolher diferentes perfis.
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 210 }}>
              {[
                { color: "#46b2ff", shadow: "0 3px 8px rgba(70,178,255,0.4)", icon: "⚡", text: "Criar Atividade com IA" },
                { color: "#3ecdc1", shadow: "0 3px 8px rgba(0,190,172,0.3)", icon: "♥", text: "Criar Atividade Inclusiva", onClick: () => onGoTo(1) },
                { color: "#b98ee8", shadow: "0 3px 8px rgba(210,169,255,0.3)", icon: "📅", text: "Criar Plano de Aula" },
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={btn.onClick}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "9px 14px",
                    borderRadius: 10, fontSize: 13, fontWeight: 600, color: "#fff",
                    cursor: "pointer", border: "none", textAlign: "left",
                    background: btn.color, boxShadow: btn.shadow,
                    transition: "filter 0.15s, transform 0.1s", whiteSpace: "nowrap",
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>}
                    {i === 1 && <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></>}
                    {i === 2 && <><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>}
                  </svg>
                  {btn.text}
                </button>
              ))}
            </div>
          </div>

          {/* Tip card */}
          <div style={{
            background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 14,
            padding: "16px 24px", display: "flex", alignItems: "center",
            justifyContent: "space-between", marginBottom: 24
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#101828" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" /><path d="M10 22h4" />
              </svg>
              <span><strong>Dica do dia:</strong> Use a Biblioteca para encontrar atividades prontas</span>
            </div>
            <div style={{ color: "#0032be", fontSize: 14, display: "flex", alignItems: "center", gap: 4, cursor: "pointer", fontWeight: 500 }}>
              Acessar
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0032be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Main grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 256px", gap: 28 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#101828", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                Criados Recentemente
                <span style={{ fontSize: 13, color: "#0032be", display: "flex", alignItems: "center", gap: 2, cursor: "pointer", fontWeight: 500 }}>
                  Ver tudo
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0032be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </span>
              </div>
              {[
                { icon: "blue", title: "Atividade de Matemática - 3º Ano", meta: "Atividade", date: "2 dez. 2025", isFile: true },
                { icon: "purple", title: "Plano de Aula - Língua Portuguesa", meta: "Plano de Aula", date: "1 dez. 2025", isFile: false },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff", border: "1px solid rgba(0,0,0,0.09)",
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 12, marginBottom: 10,
                  transition: "box-shadow 0.15s"
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: item.icon === "blue" ? "#00b4fb" : "#d2a9ff",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.isFile ? <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></> : <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></>}
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#101828" }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: "#888", display: "flex", gap: 4, alignItems: "center", marginTop: 2 }}>
                      {item.meta} &nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      &nbsp; {item.date}
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#0032be", cursor: "pointer", fontWeight: 500, whiteSpace: "nowrap" }}>Abrir</div>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#101828", marginBottom: 14 }}>Outras Opções</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    { bg: "#f7f9fc", border: "#ddd", iconBg: "#00b4fb", title: "Criar do Zero", sub: "Comece uma atividade em branco" },
                    { bg: "#fff", border: "rgba(0,0,0,0.1)", iconBg: "#0032be", title: "Usar Modelo", sub: "Escolha um modelo pronto" },
                  ].map((card, i) => (
                    <div key={i} style={{
                      borderRadius: 12, padding: 18, cursor: "pointer",
                      border: `1.5px solid ${card.border}`, background: card.bg,
                      transition: "all 0.15s"
                    }}>
                      <div style={{
                        width: 44, height: 38, borderRadius: 9, background: card.iconBg,
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {i === 0 ? <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></> : <><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></>}
                        </svg>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#101828", marginBottom: 3 }}>{card.title}</div>
                      <div style={{ fontSize: 12, color: "#888" }}>{card.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Library */}
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#101828", marginBottom: 14 }}>Mais Usados da Biblioteca</div>
              {[
                { name: "Operações Básicas", sub: "Matemática", uses: "24 usos" },
                { name: "Interpretação de Texto", sub: "Português", uses: "18 usos" },
                { name: "Sistema Solar", sub: "Ciências", uses: "15 usos" },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 12, padding: "12px 14px", marginBottom: 10,
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#101828" }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 1 }}>{item.sub}</div>
                  </div>
                  <div style={{
                    background: "#f0f0f0", borderRadius: 5, padding: "3px 8px",
                    fontSize: 12, color: "#666", whiteSpace: "nowrap"
                  }}>{item.uses}</div>
                </div>
              ))}
              <div style={{
                background: "#0032be", borderRadius: 9, padding: "10px 16px",
                textAlign: "center", color: "#fff", fontSize: 13, fontWeight: 600,
                cursor: "pointer", marginTop: 8, transition: "background 0.15s"
              }}>
                Ver Biblioteca Completa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

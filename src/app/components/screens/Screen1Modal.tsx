import gifSrc from "../../../imports/Gravando_2026-04-24_131246.gif";
import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
}

function RightSidebarCards() {
  return (
    <div style={{ borderLeft: "1px solid #f0f0f0", background: "#fafafa", padding: "20px 14px", overflowY: "auto" }}>
      {[
        {
          color: "green", bgColor: "#f0fdf4", borderColor: "#bbf7d0", titleColor: "#15803d",
          title: "Limite de uso diário",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>,
          content: (
            <div style={{ color: "#444", lineHeight: 1.6, fontSize: 12 }}>
              <div>Para apoiar seu planejamento, lembre-se do seu limite diário:</div>
              <ul style={{ marginLeft: 14 }}>
                <li>Planos de aula restantes hoje: <strong>2 de 3</strong></li>
                <li>Atividades restantes hoje: <strong>3 de 5</strong></li>
              </ul>
              <div style={{ marginTop: 8 }}>Ao atingir o limite, você poderá realizar novas criações no dia seguinte.</div>
            </div>
          )
        },
        {
          color: "blue", bgColor: "#eff6ff", borderColor: "#bfdbfe", titleColor: "#1d4ed8",
          title: "Como funciona?",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
          content: (
            <div style={{ color: "#444", lineHeight: 1.6, fontSize: 12 }}>
              <p>Escolha o tipo de atividade e defina uma quantidade de questões.</p>
              <p style={{ marginTop: 6 }}>Preencha o ano/série e selecione o componente curricular.</p>
              <p style={{ marginTop: 6 }}>Por fim, clique em "Gerar Atividade com IA" para criar a atividade.</p>
              <p style={{ marginTop: 6 }}><strong>Todos os campos com (*) são de preenchimento obrigatório.</strong></p>
            </div>
          )
        },
        {
          color: "yellow", bgColor: "#fffbeb", borderColor: "#fde68a", titleColor: "#92400e",
          title: "Dicas para uma boa atividade",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>,
          content: (
            <div style={{ color: "#444", lineHeight: 1.6, fontSize: 12 }}>
              <ul style={{ marginLeft: 14 }}>
                <li>Seja específico no tema da atividade</li>
                <li style={{ marginTop: 4 }}>Defina uma quantidade de questões adequada</li>
                <li style={{ marginTop: 4 }}>Considere o tempo real de aula</li>
              </ul>
            </div>
          )
        }
      ].map((card, i) => (
        <div key={i} style={{
          borderRadius: 10, padding: 14, marginBottom: 12, fontSize: 12,
          background: card.bgColor, border: `1px solid ${card.borderColor}`
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, fontWeight: 700, marginBottom: 8, color: card.titleColor
          }}>
            {card.icon} {card.title}
          </div>
          {card.content}
        </div>
      ))}
    </div>
  );
}

export function Screen1Modal({ onGoTo }: Props) {
  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden", position: "relative" }}>
      <Sidebar activeNav={2} onGoTo={onGoTo} />

      {/* Blurred form behind modal */}
      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        display: "grid", gridTemplateColumns: "1fr 268px",
        overflow: "hidden", filter: "blur(2px) brightness(0.65)"
      }}>
        <div style={{ padding: "32px 32px 40px 36px", overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 46, height: 46, borderRadius: 12, flexShrink: 0,
              background: "linear-gradient(135deg,#3ecdc1,#00beac)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0a" }}>Inclusão e Adaptações</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Crie adaptações pedagógicas personalizadas</div>
            </div>
          </div>
        </div>
        <RightSidebarCards />
      </div>

      {/* Modal overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200
      }}>
        <div style={{
          background: "#fff", borderRadius: 18, padding: 32,
          width: 560, textAlign: "center",
          boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
          animation: "popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)"
        }}>
          {/* GIF Preview */}
          <div style={{ borderRadius: 10, marginBottom: 22, overflow: "hidden", background: "#f8faff", lineHeight: 0 }}>
            <img
              src={gifSrc}
              alt="Demonstração da criação inclusiva com IA"
              style={{ width: "100%", borderRadius: 8, display: "block", maxHeight: 220, objectFit: "cover" }}
            />
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#101828", marginBottom: 10, lineHeight: 1.35 }}>
            Conheça a nova função de<br />criação Inclusiva com IA
          </div>
          <div style={{ fontSize: 14, color: "#555", lineHeight: 1.65, marginBottom: 22 }}>
            Agora, você pode criar perfis detalhados com até 4 características específicas de aprendizagem.<br /><br />
            Nossa Inteligência Artificial relaciona esses dados para sugerir{" "}
            <strong>planos de aula e atividades adaptados</strong>, criando materiais acessíveis para apoiar você na rotina em sala de aula.
          </div>
          <button
            onClick={() => onGoTo(2)}
            style={{
              background: "#0032be", color: "#fff", border: "none", borderRadius: 10,
              padding: 13, fontSize: 15, fontWeight: 600,
              cursor: "pointer", width: "100%", transition: "all 0.15s",
              fontFamily: "Poppins, sans-serif"
            }}
          >
            Conhecer agora
          </button>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
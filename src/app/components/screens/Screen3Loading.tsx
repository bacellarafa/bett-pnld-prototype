import { Sidebar } from "../Sidebar";

interface Props {
  onGoTo: (n: number) => void;
}

export function Screen3Loading({ onGoTo }: Props) {
  return (
    <div style={{ display: "flex", width: 1440, height: 900, background: "#fff", overflow: "hidden", position: "relative" }}>
      <Sidebar activeNav={2} onGoTo={onGoTo} />

      {/* Blurred form behind */}
      <div style={{
        position: "absolute", left: 291, right: 0, top: 0, bottom: 0,
        display: "grid", gridTemplateColumns: "1fr 268px",
        overflow: "hidden", filter: "blur(2px) brightness(0.6)"
      }}>
        <div style={{ padding: "32px 32px 40px 36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 12, flexShrink: 0,
              background: "#63dcd0",
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
          <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 14, padding: "22px 24px", height: 200 }} />
          <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 14, padding: "22px 24px", height: 120, marginTop: 18 }} />
        </div>
        <div style={{ borderLeft: "1px solid #f0f0f0", background: "#fafafa", padding: "20px 14px" }}>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 14, height: 120 }} />
          <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: 14, height: 140, marginTop: 12 }} />
        </div>
      </div>

      {/* Loading overlay */}
      <div style={{
        position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200
      }}>
        <div style={{
          background: "#0032be", borderRadius: 14,
          padding: "32px 48px", textAlign: "center", color: "#fff", minWidth: 340
        }}>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Aguarde...</div>
          <div style={{ fontSize: 14, opacity: 0.85 }}>Suas atividades estão sendo geradas</div>
          <div style={{
            width: 44, height: 44, margin: "18px auto 0",
            border: "4px solid rgba(255,255,255,0.25)",
            borderTopColor: "#fff", borderRadius: "50%",
            animation: "spin 0.75s linear infinite"
          }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
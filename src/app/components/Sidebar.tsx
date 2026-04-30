import { FTDLogo } from "./FTDLogo";

interface SidebarProps {
  activeNav: number; // 0=home, 2=inclusive
  onGoTo?: (screen: number) => void;
}

const HomeIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const FileIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
  </svg>
);
const HeartIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
const CalendarIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const BookIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const FolderIcon = ({ stroke = "#666" }: { stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}>
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

const navItems = [
  { label: "Início",              icon: HomeIcon,     screen: 0  },
  { label: "Criar Atividade",     icon: FileIcon,     screen: 7  },
  { label: "Atividade Inclusiva", icon: HeartIcon,    badge: "Novo", screen: 1 },
  { label: "Planejar Aulas",      icon: CalendarIcon, screen: 5  },
  { label: "Biblioteca",          icon: BookIcon,     screen: 9  },
  { label: "Meus Materiais",      icon: FolderIcon,   screen: 10 },
];

export function Sidebar({ activeNav, onGoTo }: SidebarProps) {
  return (
    <div style={{
      position: "absolute", left: 0, top: 0, width: 291, height: "100%",
      background: "#fff", borderRight: "1px solid #e2e8f0",
      boxShadow: "8px 0 24px rgba(0,0,0,0.06)",
      display: "flex", flexDirection: "column", zIndex: 10
    }}>
      {/* Header */}
      <div style={{
        padding: 16, height: 70, borderBottom: "1px solid #e2e8f0",
        display: "flex", alignItems: "center"
      }}>
        <FTDLogo />
      </div>

      {/* Nav */}
      <div style={{ padding: 10, flex: 1, display: "flex", flexDirection: "column", gap: 6, overflowY: "auto" }}>
        {navItems.map((item, i) => {
          const isActive = i === activeNav;
          const stroke = isActive ? "#fff" : "#666";
          const Icon = item.icon;
          return (
            <button
              key={i}
              onClick={() => item.screen !== undefined && onGoTo && onGoTo(item.screen as number)}
              style={{
                display: "flex", alignItems: "center", gap: 10, minHeight: 44,
                padding: "0 14px", borderRadius: 12, cursor: "pointer",
                background: isActive ? "#46b2ff" : "#fff", border: "none", width: "100%",
                fontSize: 14, fontWeight: isActive ? 600 : 400, color: isActive ? "#fff" : "#555",
                textAlign: "left", transition: "all 0.15s",
                boxShadow: isActive ? "0 3px 8px rgba(70,178,255,0.4)" : "0 1px 2px rgba(0,0,0,0.08)",
                fontFamily: "Poppins, sans-serif"
              }}
            >
              <Icon stroke={stroke} />
              {item.label}
              {item.badge && (
                <span style={{
                  border: `1px solid ${isActive ? "#fff" : "#555"}`,
                  borderRadius: 4, padding: "1px 6px", fontSize: 10,
                  marginLeft: 4, opacity: 0.85,
                  color: isActive ? "#fff" : "#555"
                }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ padding: 12, borderTop: "1px solid #e2e8f0" }}>
        <div style={{
          background: "#f7f9fc", borderRadius: 12, padding: "10px 12px",
          display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10
        }}>
          <div style={{
            width: 36, height: 36, background: "#46b2ff", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontSize: 14, fontWeight: 600, flexShrink: 0
          }}>P</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172b" }}>Professor(a)</div>
            <div style={{ fontSize: 11, color: "#888", display: "flex", gap: 10, marginTop: 3, alignItems: "center" }}>
              <span>
                <CalendarIcon stroke="#666" />
                {" "}2/3
              </span>
              <span>
                <FileIcon stroke="#666" />
                {" "}3/5
              </span>
            </div>
            <div style={{ fontSize: 11, color: "#888", marginTop: 6, cursor: "pointer", textDecoration: "underline" }}>
              Ver perfil
            </div>
          </div>
        </div>
        <button style={{
          border: "1px solid rgba(102,102,102,0.3)", borderRadius: 10,
          padding: "7px 14px", background: "#fff", fontSize: 13, color: "#444",
          cursor: "pointer", width: "100%", fontFamily: "Poppins, sans-serif"
        }}>
          Sair
        </button>
      </div>
    </div>
  );
}
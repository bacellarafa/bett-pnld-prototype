import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Screen0Home } from "./components/screens/Screen0Home";
import { Screen1Modal } from "./components/screens/Screen1Modal";
import { Screen2Form } from "./components/screens/Screen2Form";
import { Screen3Loading } from "./components/screens/Screen3Loading";
import { Screen4Result } from "./components/screens/Screen4Result";

const TOTAL_SCREENS = 5;

// Which nav item is "active" in the sidebar per screen
const SIDEBAR_NAV = [0, 2, 2, 2, 2];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    comp: "Matemática",
    ano: "5º Ano",
    perfil: "Necessita de apoio frente a desafios novos",
  });

  const getInitialScale = () => {
    const w = window.innerWidth;
    return w > 0 ? w / 1440 : 1;
  };
  const getSidebarH = (s: number) => {
    if (!s || !isFinite(s)) return 900;
    return Math.ceil(window.innerHeight / s);
  };

  const [scale,    setScale]    = useState(getInitialScale);
  const [sidebarH, setSidebarH] = useState(() => getSidebarH(getInitialScale()));

  useEffect(() => {
    const update = () => {
      const s = window.innerWidth / 1440;
      setScale(s);
      setSidebarH(getSidebarH(s));
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goTo(current - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  const goTo = (n: number) => {
    if (n < 0 || n >= TOTAL_SCREENS) return;
    setCurrent(n);
    if (n === 3) setTimeout(() => setCurrent(4), 2500);
  };

  const handleFormData = (data: { comp: string; ano: string; perfil: string }) => {
    setFormData(data);
  };

  // Canvas fills viewport width; height follows 1440:900 ratio
  const sidebarW = Math.round(291 * scale);
  const canvasH  = Math.round(900 * scale);

  return (
    <>
      {/* Fixed blue background — always covers the whole viewport */}
      <div style={{
        position: "fixed", inset: 0,
        background: "linear-gradient(160deg, #07184a 0%, #0a2568 40%, #0d2e7a 70%, #091d58 100%)",
        zIndex: -1,
      }} />

      {/*
        ── FIXED SIDEBAR ──────────────────────────────────────────────────────
        Rendered OUTSIDE the transform canvas so it never scrolls with the page.
        The inner div is scaled identically to the canvas (transformOrigin: top left)
        and sized to fill the full viewport height in local (pre-scale) units.
        The sidebar component itself uses position:absolute + height:100%, so it
        fills whatever height the wrapper provides.
      */}
      <div style={{
        position: "fixed", top: 0, left: 0, zIndex: 100,
        width: sidebarW, height: "100vh",
        overflow: "hidden",
      }}>
        <div style={{
          position: "relative",
          width: 291, height: sidebarH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}>
          <Sidebar activeNav={SIDEBAR_NAV[current]} onGoTo={goTo} />
        </div>
      </div>

      {/*
        ── SCROLLABLE CANVAS WRAPPER ───────────────────────────────────────────
        height = canvasH tells the browser how tall the document is, enabling
        natural body scroll when the scaled canvas taller than the viewport.
      */}
      <div style={{ width: "100%", height: canvasH, position: "relative" }}>
        {/*
          The 1440×900 canvas scaled to fill the full viewport width.
          The in-canvas sidebars rendered by screen components are visually
          covered by the fixed sidebar above (same background, higher z-index).
        */}
        <div style={{
          width: 1440, height: 900,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "absolute", top: 0, left: 0,
          background: "#fff",
          overflow: "hidden",
          fontFamily: "Poppins, system-ui, sans-serif",
        }}>
          <div style={{ position: "relative", width: 1440, height: 900 }}>
            <ScreenWrapper active={current === 0}>
              <Screen0Home onGoTo={goTo} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 1}>
              <Screen1Modal onGoTo={goTo} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 2}>
              <Screen2Form onGoTo={goTo} onFormData={handleFormData} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 3}>
              <Screen3Loading onGoTo={goTo} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 4}>
              <Screen4Result onGoTo={goTo} formData={formData} />
            </ScreenWrapper>
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Poppins', system-ui, sans-serif;
          background: #07184a;
          overflow-x: hidden;
          overflow-y: auto;
        }
        button, input, select, textarea { font-family: inherit; }
        @keyframes fadein { from { opacity: 0.6; } to { opacity: 1; } }
      `}</style>
    </>
  );
}

function ScreenWrapper({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  if (!active) return null;
  return (
    <div style={{ position: "absolute", inset: 0, animation: "fadein 0.25s ease" }}>
      {children}
    </div>
  );
}
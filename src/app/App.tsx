import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { ToastHost } from "./lib/toast";
import { Screen0Home }      from "./components/screens/Screen0Home";
import { Screen1Modal }     from "./components/screens/Screen1Modal";
import { Screen2Form }      from "./components/screens/Screen2Form";
import { Screen3Loading }   from "./components/screens/Screen3Loading";
import { Screen4Result }    from "./components/screens/Screen4Result";
import { Screen5PlanForm }  from "./components/screens/Screen5PlanForm";
import { Screen6PlanResult } from "./components/screens/Screen6PlanResult";
import { Screen7ActivityForm } from "./components/screens/Screen7ActivityForm";
import { Screen8ActivityResult } from "./components/screens/Screen8ActivityResult";
import { Screen9Biblioteca }     from "./components/screens/Screen9Biblioteca";
import { Screen10MeusMateriais } from "./components/screens/Screen10MeusMateriais";

const TOTAL_SCREENS = 11;

// 0=Início, 1=CriarAtividade, 2=AtividadeInclusiva, 3=PlanejarAulas, 4=Biblioteca, 5=MeusMateriais
const SIDEBAR_NAV = [0, 2, 2, 2, 2, 3, 3, 1, 1, 4, 5];

export default function App() {
  const [current, setCurrent] = useState(0);

  // Data for activity result (Screen4)
  const [formData, setFormData] = useState({
    comp: "Matemática",
    ano: "5º Ano",
    perfil: "Necessita de apoio frente a desafios novos",
  });

  // Data for plan result (Screen6)
  const [planData, setPlanData] = useState({
    comp: "Matemática",
    ano: "3º Ano",
    tema: "O ciclo da água e sua importância",
  });

  // Data for activity result (Screen8)
  const [activityData, setActivityData] = useState({
    comp: "Matemática",
    ano: "5º Ano",
  });

  // ── Scale logic ────────────────────────────────────────────────────────────
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

  // ── Keyboard navigation ───────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   goTo(current - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  // ── Navigation ────────────────────────────────────────────────────────────
  /** Default goTo: loading (screen 3) always leads to activity result (screen 4). */
  const goTo = (n: number) => {
    if (n < 0 || n >= TOTAL_SCREENS) return;
    setCurrent(n);
    if (n === 3) setTimeout(() => setCurrent(4), 2500);
  };

  /** Called by Screen5PlanForm; uses a separate timeout to navigate to plan result. */
  const generatePlan = (data: { comp: string; ano: string; tema: string }) => {
    setPlanData(data);
    setCurrent(3);
    setTimeout(() => setCurrent(6), 2500);
  };

  const handleFormData = (data: { comp: string; ano: string; perfil: string }) => {
    setFormData(data);
  };

  /** Called by Screen7ActivityForm; uses a separate timeout to navigate to activity result. */
  const generateActivity = (data: { comp: string; ano: string }) => {
    setActivityData(data);
    setCurrent(3);
    setTimeout(() => setCurrent(8), 2500);
  };

  // ── Dimensions ───────────────────────────────────────────────────────────
  const sidebarW = Math.round(291 * scale);
  const canvasH  = Math.round(900 * scale);

  return (
    <>
      {/* Fixed blue background */}
      <div style={{
        position: "fixed", inset: 0,
        background: "linear-gradient(160deg, #07184a 0%, #0a2568 40%, #0d2e7a 70%, #091d58 100%)",
        zIndex: -1,
      }} />

      {/*
        FIXED SIDEBAR — rendered outside the transform canvas so it never
        scrolls with the page. Scaled to match the canvas transform exactly.
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
        SCROLLABLE CANVAS — height = canvasH so the body knows the document
        size, enabling natural vertical scroll when content exceeds viewport.
      */}
      <div style={{ width: "100%", height: canvasH, position: "relative" }}>
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
            <ScreenWrapper active={current === 5}>
              <Screen5PlanForm onGoTo={goTo} onGeneratePlan={generatePlan} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 6}>
              <Screen6PlanResult onGoTo={goTo} planData={planData} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 7}>
              <Screen7ActivityForm onGoTo={goTo} onGenerateActivity={generateActivity} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 8}>
              <Screen8ActivityResult onGoTo={goTo} activityData={activityData} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 9}>
              <Screen9Biblioteca onGoTo={goTo} />
            </ScreenWrapper>
            <ScreenWrapper active={current === 10}>
              <Screen10MeusMateriais onGoTo={goTo} />
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

      {/* Toasts de confirmação — fora do canvas escalado (tamanho real, canto sup. direito) */}
      <ToastHost />
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
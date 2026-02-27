import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "motion/react";
import {
  Camera,
  Ruler,
  Pencil,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

type Method = "camera" | "ruler" | "manual" | null;
type Step = "intro" | "choose" | "measure" | "result";

// Typewriter Component
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[4px] h-[0.8em] bg-azul-primario align-middle ml-1 -mt-2"
      />
    </span>
  );
}

// Ripple Button Component
function RippleButton({ children, onClick, className, disabled, ...props }: any) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 600);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className={cn("relative overflow-hidden", className)}
      onClick={(e) => {
        if (disabled) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      disabled={disabled}
      {...props}
    >
      {isRippling ? (
        <span
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none w-10 h-10"
          style={{
            left: coords.x,
            top: coords.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        ""
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

// Animated Counter Component
function AnimatedCounter({ value, isFloat = false }: { value: number; isFloat?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalDuration = 1500;
    let incrementTime = (totalDuration / end) * 1.5;

    let timer = setInterval(() => {
      start += isFloat ? 0.5 : 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isFloat]);

  return <span>{isFloat ? count.toFixed(1) : count}</span>;
}

export function MedirPe() {
  const [step, setStep] = useState<Step>("intro");
  const [method, setMethod] = useState<Method>(null);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [result, setResult] = useState<{
    br: number;
    us: number;
    eu: number;
    cm: number;
  } | null>(null);

  // Manual inputs
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("normal");
  const [showError, setShowError] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const handleStart = () => setStep("choose");

  const handleChooseMethod = (m: Method) => {
    setMethod(m);
    setStep("measure");
  };

  const handleCalculate = () => {
    if (method === "manual" && !length) {
      setShowError(true);
      setTimeout(() => setShowError(false), 500);
      return;
    }
    simulateMeasurement();
  };

  const simulateMeasurement = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      setIsMeasuring(false);
      setResult({ br: 42, us: 10, eu: 43, cm: parseFloat(length) || 27.5 });
      setStep("result");
    }, 2500);
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col relative overflow-hidden bg-gradient-to-br from-branco-off via-azul-gelo/50 to-branco-off animate-gradient-x">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-azul-claro rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-azul-gelo rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-azul-primario rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Floating subtle particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-azul-primario/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {step === "result" && <Confetti width={windowWidth} height={windowHeight} recycle={false} numberOfPieces={400} gravity={0.15} />}

      <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {/* STEP 1: Intro */}
          {step === "intro" && (
            <motion.div
              key="intro"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -50 }}
              className="text-center max-w-2xl"
            >
              <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                <motion.div
                  animate={{ x: [-20, 20, -20], rotate: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-azul-gelo"
                >
                  <Ruler className="w-16 h-16 text-azul-primario" />
                </motion.div>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-display font-bold text-azul-escuro mb-6 min-h-[120px] md:min-h-[100px]">
                <TypewriterText text="Descubra o tamanho perfeito para os seus pés!" />
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-cinza-texto mb-10">
                Chega de devoluções. Use nossa ferramenta interativa para
                encontrar a medida exata e comprar com confiança.
              </motion.p>

              <motion.div variants={itemVariants}>
                <RippleButton
                  onClick={handleStart}
                  className="bg-azul-primario text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-azul-escuro hover:scale-105 transition-all shadow-lg shadow-azul-primario/30 flex items-center gap-2 mx-auto"
                >
                  Começar Medição
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </motion.div>
            </motion.div>
          )}

          {/* STEP 2: Choose Method */}
          {step === "choose" && (
            <motion.div
              key="choose"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-4xl"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-azul-escuro mb-4">
                  Escolha como quer medir
                </h2>
                <p className="text-cinza-texto">
                  Temos 3 métodos fáceis para você.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={itemVariants}>
                  <MethodCard
                    icon={<Camera className="w-8 h-8" />}
                    title="Câmera (AR)"
                    description="Escaneie seu pé usando a câmera do celular. Rápido e mágico."
                    onClick={() => handleChooseMethod("camera")}
                    recommended
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MethodCard
                    icon={<Ruler className="w-8 h-8" />}
                    title="Régua Digital"
                    description="Use um cartão para calibrar a tela e meça diretamente no visor."
                    onClick={() => handleChooseMethod("ruler")}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <MethodCard
                    icon={<Pencil className="w-8 h-8" />}
                    title="Manual"
                    description="Meça com uma fita métrica e insira os valores aqui."
                    onClick={() => handleChooseMethod("manual")}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Measure */}
          {step === "measure" && (
            <motion.div
              key="measure"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/40"
            >
              <motion.button
                variants={itemVariants}
                onClick={() => setStep("choose")}
                className="text-sm text-cinza-texto hover:text-azul-primario mb-6 flex items-center gap-1 transition-colors"
              >
                ← Voltar aos métodos
              </motion.button>

              {method === "manual" && (
                <div className="space-y-8">
                  <motion.div variants={itemVariants} className="text-center">
                    <h3 className="text-2xl font-display font-bold text-azul-escuro mb-2">
                      Medição Manual
                    </h3>
                    <p className="text-cinza-texto text-sm">
                      Siga os passos e insira as medidas.
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-center mb-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-48 h-48 bg-azul-gelo rounded-2xl flex items-center justify-center relative shadow-inner"
                    >
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-azul-primario"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          fill="currentColor"
                          fillOpacity="0.2"
                        />
                        <line
                          x1="5"
                          y1="2"
                          x2="19"
                          y2="2"
                          strokeDasharray="4 4"
                        />
                        <line
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                          strokeDasharray="4 4"
                        />
                        <line
                          x1="5"
                          y1="22"
                          x2="19"
                          y2="22"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-4">
                    <motion.div
                      animate={showError ? { x: [-10, 10, -10, 10, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <label className="flex items-center text-sm font-medium text-azul-escuro mb-1">
                        Comprimento do pé (cm)
                        <div className="relative group inline-block ml-2">
                          <Info className="w-4 h-4 text-cinza-texto cursor-pointer hover:text-azul-primario transition-colors" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-azul-escuro text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center shadow-lg">
                            Meça do calcanhar até a ponta do dedão mais longo.
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-azul-escuro"></div>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Ex: 27.5"
                        className={cn(
                          "w-full bg-branco-off border rounded-xl px-4 py-3 outline-none transition-all duration-300",
                          showError 
                            ? "border-accent-erro focus:ring-2 focus:ring-accent-erro/50" 
                            : "border-cinza-leve focus:border-azul-primario focus:ring-2 focus:ring-azul-primario/30 focus:shadow-[0_0_15px_rgba(0,112,243,0.2)]"
                        )}
                      />
                    </motion.div>

                    <div>
                      <label className="flex items-center text-sm font-medium text-azul-escuro mb-1">
                        Largura do pé
                        <div className="relative group inline-block ml-2">
                          <Info className="w-4 h-4 text-cinza-texto cursor-pointer hover:text-azul-primario transition-colors" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-azul-escuro text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 text-center shadow-lg">
                            Selecione o formato que mais se aproxima do seu pé.
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-azul-escuro"></div>
                          </div>
                        </div>
                      </label>
                      <div className="flex gap-2">
                        {["Estreito", "Normal", "Largo"].map((w) => (
                          <button
                            key={w}
                            onClick={() => setWidth(w.toLowerCase())}
                            className={cn(
                              "flex-1 py-3 rounded-xl border text-sm font-medium transition-all duration-300",
                              width === w.toLowerCase()
                                ? "bg-azul-primario text-white border-azul-primario shadow-md scale-105"
                                : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo hover:border-azul-claro/50",
                            )}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <RippleButton
                      onClick={handleCalculate}
                      disabled={isMeasuring}
                      className="w-full relative overflow-hidden text-white py-4 rounded-xl font-bold transition-all disabled:opacity-80 flex justify-center items-center gap-2 group bg-azul-primario hover:bg-azul-escuro"
                    >
                      {/* Radial gradient background */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl ring-2 ring-transparent group-hover:ring-azul-primario/50 group-hover:shadow-[0_0_20px_rgba(0,112,243,0.4)] transition-all duration-300 pointer-events-none"></div>

                      <span className="relative z-10 flex items-center gap-2">
                        {isMeasuring ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "linear",
                              }}
                            >
                              <Zap className="w-5 h-5" />
                            </motion.div>
                            Calculando tamanho...
                          </>
                        ) : (
                          "Calcular meu tamanho"
                        )}
                      </span>
                    </RippleButton>
                  </motion.div>
                </div>
              )}

              {(method === "camera" || method === "ruler") && (
                <div className="text-center py-12">
                  <motion.div variants={itemVariants} className="w-24 h-24 bg-azul-gelo rounded-full flex items-center justify-center mx-auto mb-6">
                    {method === "camera" ? (
                      <Camera className="w-10 h-10 text-azul-primario" />
                    ) : (
                      <Ruler className="w-10 h-10 text-azul-primario" />
                    )}
                  </motion.div>
                  <motion.h3 variants={itemVariants} className="text-2xl font-display font-bold text-azul-escuro mb-4">
                    {method === "camera" ? "Câmera AR" : "Régua Digital"}
                  </motion.h3>
                  <motion.p variants={itemVariants} className="text-cinza-texto mb-8">
                    Esta funcionalidade requer acesso à câmera ou calibração de
                    tela. <br />
                    (Simulação para demonstração)
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <RippleButton
                      onClick={simulateMeasurement}
                      disabled={isMeasuring}
                      className="bg-azul-primario text-white px-8 py-3 rounded-xl font-bold hover:bg-azul-escuro transition-colors mx-auto"
                    >
                      {isMeasuring ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <Zap className="w-5 h-5" />
                          </motion.div>
                          Escaneando...
                        </div>
                      ) : (
                        "Iniciar Simulação"
                      )}
                    </RippleButton>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 4: Result */}
          {step === "result" && result && (
            <motion.div
              key="result"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full max-w-3xl text-center"
            >
              <motion.div
                variants={itemVariants}
                className="w-20 h-20 bg-accent-sucesso rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent-sucesso/30"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-3xl font-display font-bold text-azul-escuro mb-2">
                Tamanho Encontrado!
              </motion.h2>
              <motion.p variants={itemVariants} className="text-cinza-texto mb-10">
                Baseado nas suas medidas (<AnimatedCounter value={result.cm} isFloat />cm), este é o seu tamanho
                ideal:
              </motion.p>

              <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 mb-10 border border-cinza-leve/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-azul-primario to-azul-claro"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <p className="text-sm font-bold text-cinza-texto uppercase tracking-widest mb-2">
                      Brasil
                    </p>
                    <div className="text-7xl font-display font-black text-azul-primario">
                      <AnimatedCounter value={result.br} />
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-24 bg-cinza-leve/50"></div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <p className="text-xs font-bold text-cinza-texto uppercase tracking-widest mb-1">
                        US
                      </p>
                      <p className="text-3xl font-display font-bold text-azul-escuro">
                        <AnimatedCounter value={result.us} />
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-cinza-texto uppercase tracking-widest mb-1">
                        EU
                      </p>
                      <p className="text-3xl font-display font-bold text-azul-escuro">
                        <AnimatedCounter value={result.eu} />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/explorar"
                  className="bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center justify-center gap-2 hover:scale-105"
                >
                  Ver sapatos tamanho {result.br}
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <RippleButton
                  onClick={() => setStep("choose")}
                  className="bg-white text-azul-escuro border border-cinza-leve px-8 py-4 rounded-xl font-bold hover:bg-branco-off transition-colors"
                >
                  Medir novamente
                </RippleButton>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MethodCard({
  icon,
  title,
  description,
  onClick,
  recommended = false,
}: any) {
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-cinza-leve/30 shadow-sm hover:shadow-xl hover:border-azul-claro/50 transition-all text-left flex flex-col h-full group"
    >
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-azul-primario to-azul-claro text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          Recomendado
        </span>
      )}
      <div className="w-16 h-16 bg-azul-gelo rounded-2xl flex items-center justify-center text-azul-primario mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-azul-escuro mb-2">
        {title}
      </h3>
      <p className="text-sm text-cinza-texto flex-grow">{description}</p>
    </motion.button>
  );
}

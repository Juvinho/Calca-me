import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Ruler,
  Pencil,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Method = "camera" | "ruler" | "manual" | null;
type Step = "intro" | "choose" | "measure" | "result";

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

  const handleStart = () => setStep("choose");

  const handleChooseMethod = (m: Method) => {
    setMethod(m);
    setStep("measure");
  };

  const simulateMeasurement = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      setIsMeasuring(false);
      setResult({ br: 42, us: 10, eu: 43, cm: 27.5 });
      setStep("result");
    }, 3000);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col relative overflow-hidden bg-branco-off">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-azul-claro rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-azul-gelo rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-azul-primario rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-12 flex-grow flex flex-col items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {/* STEP 1: Intro */}
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-center max-w-2xl"
            >
              <div className="mb-8 flex justify-center">
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
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-azul-escuro mb-6">
                Descubra o tamanho perfeito para os seus pés!
              </h1>
              <p className="text-lg text-cinza-texto mb-10">
                Chega de devoluções. Use nossa ferramenta interativa para
                encontrar a medida exata e comprar com confiança.
              </p>

              <button
                onClick={handleStart}
                className="bg-azul-primario text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-azul-escuro hover:scale-105 transition-all shadow-lg shadow-azul-primario/30 flex items-center gap-2 mx-auto"
              >
                Começar Medição
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Choose Method */}
          {step === "choose" && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full max-w-4xl"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-azul-escuro mb-4">
                  Escolha como quer medir
                </h2>
                <p className="text-cinza-texto">
                  Temos 3 métodos fáceis para você.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MethodCard
                  icon={<Camera className="w-8 h-8" />}
                  title="Câmera (AR)"
                  description="Escaneie seu pé usando a câmera do celular. Rápido e mágico."
                  onClick={() => handleChooseMethod("camera")}
                  recommended
                />
                <MethodCard
                  icon={<Ruler className="w-8 h-8" />}
                  title="Régua Digital"
                  description="Use um cartão para calibrar a tela e meça diretamente no visor."
                  onClick={() => handleChooseMethod("ruler")}
                />
                <MethodCard
                  icon={<Pencil className="w-8 h-8" />}
                  title="Manual"
                  description="Meça com uma fita métrica e insira os valores aqui."
                  onClick={() => handleChooseMethod("manual")}
                />
              </div>
            </motion.div>
          )}

          {/* STEP 3: Measure */}
          {step === "measure" && (
            <motion.div
              key="measure"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 border border-cinza-leve/20"
            >
              <button
                onClick={() => setStep("choose")}
                className="text-sm text-cinza-texto hover:text-azul-primario mb-6 flex items-center gap-1"
              >
                ← Voltar aos métodos
              </button>

              {method === "manual" && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold text-azul-escuro mb-2">
                      Medição Manual
                    </h3>
                    <p className="text-cinza-texto text-sm">
                      Siga os passos e insira as medidas.
                    </p>
                  </div>

                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-48 h-48 bg-azul-gelo rounded-2xl flex items-center justify-center relative"
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
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-azul-escuro mb-1">
                        Comprimento do pé (cm)
                      </label>
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Ex: 27.5"
                        className="w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-azul-primario transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-azul-escuro mb-1">
                        Largura do pé
                      </label>
                      <div className="flex gap-2">
                        {["Estreito", "Normal", "Largo"].map((w) => (
                          <button
                            key={w}
                            onClick={() => setWidth(w.toLowerCase())}
                            className={cn(
                              "flex-1 py-3 rounded-xl border text-sm font-medium transition-all",
                              width === w.toLowerCase()
                                ? "bg-azul-primario text-white border-azul-primario shadow-md"
                                : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo",
                            )}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={simulateMeasurement}
                    disabled={!length || isMeasuring}
                    className="w-full bg-azul-primario text-white py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
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
                  </button>
                </div>
              )}

              {(method === "camera" || method === "ruler") && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-azul-gelo rounded-full flex items-center justify-center mx-auto mb-6">
                    {method === "camera" ? (
                      <Camera className="w-10 h-10 text-azul-primario" />
                    ) : (
                      <Ruler className="w-10 h-10 text-azul-primario" />
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-azul-escuro mb-4">
                    {method === "camera" ? "Câmera AR" : "Régua Digital"}
                  </h3>
                  <p className="text-cinza-texto mb-8">
                    Esta funcionalidade requer acesso à câmera ou calibração de
                    tela. <br />
                    (Simulação para demonstração)
                  </p>
                  <button
                    onClick={simulateMeasurement}
                    disabled={isMeasuring}
                    className="bg-azul-primario text-white px-8 py-3 rounded-xl font-bold hover:bg-azul-escuro transition-colors"
                  >
                    {isMeasuring ? "Escaneando..." : "Iniciar Simulação"}
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 4: Result */}
          {step === "result" && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-3xl text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  duration: 0.8,
                }}
                className="w-20 h-20 bg-accent-sucesso rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent-sucesso/30"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl font-display font-bold text-azul-escuro mb-2">
                Tamanho Encontrado!
              </h2>
              <p className="text-cinza-texto mb-10">
                Baseado nas suas medidas ({result.cm}cm), este é o seu tamanho
                ideal:
              </p>

              <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-cinza-leve/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-azul-primario to-azul-claro"></div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <p className="text-sm font-bold text-cinza-texto uppercase tracking-widest mb-2">
                      Brasil
                    </p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-7xl font-display font-black text-azul-primario"
                    >
                      {result.br}
                    </motion.div>
                  </div>

                  <div className="hidden md:block w-px h-24 bg-cinza-leve/50"></div>

                  <div className="grid grid-cols-2 gap-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-center"
                    >
                      <p className="text-xs font-bold text-cinza-texto uppercase tracking-widest mb-1">
                        US
                      </p>
                      <p className="text-3xl font-display font-bold text-azul-escuro">
                        {result.us}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center"
                    >
                      <p className="text-xs font-bold text-cinza-texto uppercase tracking-widest mb-1">
                        EU
                      </p>
                      <p className="text-3xl font-display font-bold text-azul-escuro">
                        {result.eu}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/explorar"
                  className="bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center justify-center gap-2"
                >
                  Ver sapatos tamanho {result.br}
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => setStep("choose")}
                  className="bg-white text-azul-escuro border border-cinza-leve px-8 py-4 rounded-xl font-bold hover:bg-branco-off transition-colors"
                >
                  Medir novamente
                </button>
              </div>
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
      className="relative bg-white p-8 rounded-3xl border border-cinza-leve/30 shadow-sm hover:shadow-xl hover:border-azul-claro/50 transition-all text-left flex flex-col h-full group"
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

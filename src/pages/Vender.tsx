import { useState } from "react";
import { motion } from "motion/react";
import { UploadCloud, Camera, Sparkles, Rocket } from "lucide-react";

export function Vender() {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
    }, 2000);
  };

  const handlePublish = () => {
    setIsPublished(true);
  };

  if (isPublished) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-branco-off p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-xl p-12 max-w-lg w-full text-center relative overflow-hidden"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="w-32 h-32 bg-azul-gelo rounded-full flex items-center justify-center mx-auto mb-8 relative z-10"
          >
            <Rocket className="w-16 h-16 text-azul-primario" />
          </motion.div>

          {/* Confetti simulation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 1.5 + 0.5,
                  opacity: 0,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute w-3 h-3 bg-azul-primario rounded-sm"
                style={{
                  backgroundColor: ["#1A56DB", "#60A5FA", "#10B981", "#F59E0B"][
                    Math.floor(Math.random() * 4)
                  ],
                }}
              />
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold text-azul-escuro mb-4 relative z-10">
            Anúncio Publicado!
          </h2>
          <p className="text-cinza-texto mb-8 relative z-10">
            Seu sapato já está disponível para milhares de compradores na
            Calça-me.
          </p>

          <button
            onClick={() => {
              setIsPublished(false);
              setStep(1);
            }}
            className="bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 relative z-10"
          >
            Vender outro sapato
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-display font-bold text-azul-escuro mb-4">
          Transforme sapatos em dinheiro
        </h1>
        <p className="text-cinza-texto text-lg">
          Crie seu anúncio em menos de 2 minutos.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-cinza-leve/30 rounded-full z-0"></div>
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-azul-primario rounded-full z-0"
          initial={{ width: "0%" }}
          animate={{ width: step === 1 ? "50%" : "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? "bg-azul-primario text-white" : "bg-branco-off text-cinza-texto border border-cinza-leve"}`}
          >
            1
          </div>
          <span className="text-sm font-medium text-azul-escuro">Fotos</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? "bg-azul-primario text-white" : "bg-branco-off text-cinza-texto border border-cinza-leve"}`}
          >
            2
          </div>
          <span className="text-sm font-medium text-azul-escuro">Detalhes</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-cinza-leve/20">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-2xl font-display font-bold text-azul-escuro mb-6">
              Adicione fotos do seu sapato
            </h2>

            <div
              className="border-2 border-dashed border-azul-claro bg-azul-gelo/50 rounded-2xl p-12 text-center hover:bg-azul-gelo transition-colors cursor-pointer group relative overflow-hidden"
              onClick={handleUpload}
            >
              {isUploading ? (
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    className="mb-4"
                  >
                    <Sparkles className="w-12 h-12 text-azul-primario" />
                  </motion.div>
                  <p className="text-azul-escuro font-medium">
                    A IA está analisando suas fotos...
                  </p>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-10 h-10 text-azul-primario" />
                  </div>
                  <h3 className="text-xl font-bold text-azul-escuro mb-2">
                    Arraste as fotos ou clique aqui
                  </h3>
                  <p className="text-cinza-texto text-sm mb-6">
                    Formatos suportados: JPG, PNG. Máximo 5MB por foto.
                  </p>

                  <div className="flex items-center justify-center gap-2 text-sm text-azul-primario font-medium bg-white py-2 px-4 rounded-full inline-flex shadow-sm">
                    <Camera className="w-4 h-4" />
                    Tirar foto agora
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm">
                Frente
              </div>
              <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm">
                Lado
              </div>
              <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm">
                Sola
              </div>
              <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm">
                Detalhe
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-azul-escuro">
                Detalhes do Anúncio
              </h2>
              <div className="bg-azul-gelo text-azul-primario px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Preenchido por IA
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-azul-escuro mb-2">
                  Título do Anúncio
                </label>
                <input
                  type="text"
                  defaultValue="Nike Air Max 90 Essential"
                  className="w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-azul-primario transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
                    Marca
                  </label>
                  <input
                    type="text"
                    defaultValue="Nike"
                    className="w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-azul-primario transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
                    Tamanho (BR)
                  </label>
                  <input
                    type="number"
                    defaultValue="42"
                    className="w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-azul-primario transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-azul-escuro mb-2">
                  Condição
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Novo", "Seminovo", "Usado - Bom", "Usado - Regular"].map(
                    (cond, i) => (
                      <button
                        key={cond}
                        className={`py-3 rounded-xl border text-sm font-medium transition-all ${i === 2 ? "bg-azul-primario text-white border-azul-primario" : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo"}`}
                      >
                        {cond}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-azul-escuro mb-2">
                  Preço (R$)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cinza-texto font-medium">
                    R$
                  </span>
                  <input
                    type="text"
                    defaultValue="189,90"
                    className="w-full bg-branco-off border border-cinza-leve rounded-xl pl-12 pr-4 py-3 text-lg font-bold text-azul-escuro focus:outline-none focus:ring-2 focus:ring-azul-primario transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-accent-sucesso font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Preço sugerido
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cinza-leve/30 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-cinza-texto font-medium hover:text-azul-primario transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={handlePublish}
                  className="bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Publicar Anúncio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

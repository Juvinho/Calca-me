import { useState, useEffect } from "react";
import { UploadCloud, Camera, Sparkles, Rocket } from "lucide-react";

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(value * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [value]);

  return <span>{count.toFixed(2).replace('.', ',')}</span>;
}

export function Vender() {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [price, setPrice] = useState("189,90");
  const [hasError, setHasError] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
    }, 2000);
  };

  const handlePublish = () => {
    if (!price || price.trim() === "") {
      setHasError(true);
      setTimeout(() => setHasError(false), 600);
      return;
    }
    setIsPublished(true);
  };

  if (isPublished) {
    const numericPrice = parseFloat(price.replace(',', '.'));
    
    return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-branco-off via-azul-gelo/50 to-branco-off animate-gradient-x relative overflow-hidden p-4">
        {/* Particles Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }} 
            />
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 max-w-lg w-full text-center relative overflow-hidden animate-scale-in">
          <div
            className="w-32 h-32 bg-azul-gelo rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <Rocket className="w-16 h-16 text-azul-primario" />
          </div>

          <h2 
            className="text-3xl font-display font-bold text-azul-escuro mb-4 relative z-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Anúncio Publicado!
          </h2>
          <p 
            className="text-cinza-texto mb-6 relative z-10 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            Seu sapato já está disponível para milhares de compradores na
            Calça-me.
          </p>
          
          {!isNaN(numericPrice) && (
            <div 
              className="bg-azul-gelo/50 rounded-2xl p-4 mb-8 relative z-10 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <p className="text-sm text-cinza-texto font-medium mb-1">Valor do anúncio</p>
              <p className="text-3xl font-display font-bold text-azul-primario">
                R$ <AnimatedNumber value={numericPrice} />
              </p>
            </div>
          )}

          <button
            onClick={() => {
              setIsPublished(false);
              setStep(1);
            }}
            className="btn-ripple bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 relative z-10 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            Vender outro sapato
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-branco-off via-azul-gelo/50 to-branco-off animate-gradient-x relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-display font-bold text-azul-escuro mb-4 animate-typewriter inline-block">
            Transforme sapatos em dinheiro
          </h1>
          <p className="text-cinza-texto text-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Crie seu anúncio em menos de 2 minutos.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-cinza-leve/30 rounded-full z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-azul-primario rounded-full z-0 transition-all duration-500"
            style={{ width: step === 1 ? "50%" : "100%" }}
          ></div>

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

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/40 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {step === 1 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-display font-bold text-azul-escuro mb-6">
                Adicione fotos do seu sapato
              </h2>

              <div
                className="border-2 border-dashed border-azul-claro bg-azul-gelo/50 rounded-2xl p-12 text-center hover:bg-azul-gelo transition-colors cursor-pointer group relative overflow-hidden btn-ripple"
                onClick={handleUpload}
              >
                {isUploading ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 animate-spin">
                      <Sparkles className="w-12 h-12 text-azul-primario" />
                    </div>
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
                <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  Frente
                </div>
                <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  Lado
                </div>
                <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  Sola
                </div>
                <div className="aspect-square bg-branco-off rounded-xl border border-cinza-leve flex items-center justify-center text-cinza-texto text-sm animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  Detalhe
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-up">
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
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
                    Título do Anúncio
                  </label>
                  <input
                    type="text"
                    defaultValue="Nike Air Max 90 Essential"
                    className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <div>
                    <label className="block text-sm font-medium text-azul-escuro mb-2">
                      Marca
                    </label>
                    <input
                      type="text"
                      defaultValue="Nike"
                      className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-azul-escuro mb-2">
                      Tamanho (BR)
                    </label>
                    <input
                      type="number"
                      defaultValue="42"
                      className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
                    Condição
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Novo", "Seminovo", "Usado - Bom", "Usado - Regular"].map(
                      (cond, i) => (
                        <button
                          key={cond}
                          className={`btn-ripple py-3 rounded-xl border text-sm font-medium transition-all ${i === 2 ? "bg-azul-primario text-white border-azul-primario" : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo"}`}
                        >
                          {cond}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
                    Preço (R$) <span className="text-accent-erro">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cinza-texto font-medium">
                      R$
                    </span>
                    <input
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className={`input-glow w-full bg-branco-off border rounded-xl pl-12 pr-4 py-3 text-lg font-bold text-azul-escuro ${hasError ? 'animate-shake border-accent-erro' : 'border-cinza-leve'}`}
                      placeholder="0,00"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-accent-sucesso font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Preço sugerido
                    </div>
                  </div>
                  {hasError && (
                    <p className="text-accent-erro text-xs mt-2 font-medium">O preço é obrigatório.</p>
                  )}
                </div>

                <div className="pt-6 border-t border-cinza-leve/30 flex justify-between items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <button
                    onClick={() => setStep(1)}
                    className="text-cinza-texto font-medium hover:text-azul-primario transition-colors"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={handlePublish}
                    className="btn-ripple bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Publicar Anúncio
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

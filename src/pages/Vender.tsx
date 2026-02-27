import { useState, useEffect } from "react";
import { UploadCloud, Camera, Sparkles, Rocket, TrendingUp, Star, DollarSign, Package, Eye, Share2, AlertCircle } from "lucide-react";
import { GoogleGenerativeAI } from "@google/genai";

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

<<<<<<< HEAD
// Mock data for sales history
const SALES_HISTORY = [
  { id: 1, title: "Adidas Ultraboost 21", price: 320, views: 156, sold: true, date: "2024-02-20" },
  { id: 2, title: "Nike Court Legacy", price: 245, views: 89, sold: true, date: "2024-02-15" },
  { id: 3, title: "Puma RS-X", price: 180, views: 234, sold: false, date: "2024-02-10" },
];

interface ProductData {
  title: string;
  brand: string;
  size: string;
  condition: "Novo" | "Seminovo" | "Usado - Bom" | "Usado - Regular";
  color: string;
  description: string;
  price: string;
}

// AI Description Generator
async function generateDescription(productData: Partial<ProductData>): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    return `${productData.brand} ${productData.title}\nSapato em condição ${productData.condition}. Tamanho ${productData.size}. Cores: ${productData.color}.`;
  }

  try {
    const client = new GoogleGenerativeAI({ apiKey });
    const model = client.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Crie uma descrição persuasiva e concisa para um anúncio de sapato em um marketplace.
Brand: ${productData.brand}
Modelo: ${productData.title}
Tamanho: ${productData.size}
Condição: ${productData.condition}
Cor: ${productData.color}

A descrição deve ter no máximo 3 linhas, ser atrativa e destacar pontos positivos. Use emojis com moderação.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return text.trim();
  } catch (error) {
    console.error("Error generating description:", error);
    return `${productData.brand} ${productData.title}\nSapato em condição ${productData.condition}. Tamanho ${productData.size}. Cores: ${productData.color}.`;
  }
}

export function Vender() {
  const [step, setStep] = useState(0); // 0: dashboard, 1: upload, 2: details, 3: preview
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  
  const [price, setPrice] = useState("189,90");
  const [hasError, setHasError] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [productData, setProductData] = useState<ProductData>({
    title: "Nike Air Max 90 Essential",
    brand: "Nike",
    size: "42",
    condition: "Usado - Bom",
    color: "Azul",
    description: "",
    price: "189,90",
  });

  // Stats
  const totalSold = SALES_HISTORY.filter(s => s.sold).length;
  const totalEarnings = SALES_HISTORY.filter(s => s.sold).reduce((acc, s) => acc + s.price, 0);
  const totalViews = SALES_HISTORY.reduce((acc, s) => acc + s.views, 0);
=======
export function Vender() {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [price, setPrice] = useState("189,90");
  const [hasError, setHasError] = useState(false);
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553

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

<<<<<<< HEAD
  const handleGenerateDescription = async () => {
    setIsGeneratingDescription(true);
    const desc = await generateDescription(productData);
    setProductData(prev => ({ ...prev, description: desc }));
    setIsGeneratingDescription(false);
  };

=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
              setStep(0);
=======
              setStep(1);
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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

<<<<<<< HEAD
  // Dashboard Screen (Step 0)
  if (step === 0) {
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

        <div className="container mx-auto px-4 md:px-6 py-12 max-w-5xl relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold text-azul-escuro mb-2">
              Suas Vendas
            </h1>
            <p className="text-cinza-texto">Acompanhe seu desempenho e histórico de anúncios.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/40 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-cinza-texto text-sm font-medium">Anúncios Vendidos</span>
                <Package className="w-5 h-5 text-accent-sucesso" />
              </div>
              <p className="text-3xl font-display font-bold text-azul-escuro">{totalSold}</p>
              <p className="text-xs text-cinza-texto mt-2">Neste período</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/40 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-cinza-texto text-sm font-medium">Total Ganho</span>
                <DollarSign className="w-5 h-5 text-azul-primario" />
              </div>
              <p className="text-3xl font-display font-bold text-azul-escuro">
                R$ <AnimatedNumber value={totalEarnings} />
              </p>
              <p className="text-xs text-cinza-texto mt-2">Incluindo comissão</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/40 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-cinza-texto text-sm font-medium">Visualizações</span>
                <Eye className="w-5 h-5 text-aqua-claro" />
              </div>
              <p className="text-3xl font-display font-bold text-azul-escuro">{totalViews}</p>
              <p className="text-xs text-cinza-texto mt-2">Últimos 30 dias</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/40 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-cinza-texto text-sm font-medium">Avaliação</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-display font-bold text-azul-escuro">4.8</p>
              <p className="text-xs text-cinza-texto mt-2">45 avaliações</p>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/40 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-display font-bold text-azul-escuro mb-6">Anúncios Recentes</h2>
            
            <div className="space-y-3">
              {SALES_HISTORY.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between p-4 bg-branco-off rounded-xl hover:bg-azul-gelo/30 transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-azul-escuro">{sale.title}</p>
                    <p className="text-xs text-cinza-texto">{sale.views} visualizações • {new Date(sale.date).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-azul-primario">R$ {sale.price}</p>
                    <p className={`text-xs font-medium ${sale.sold ? 'text-accent-sucesso' : 'text-cinza-texto'}`}>
                      {sale.sold ? '✓ Vendido' : 'Ativo'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Sale Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setStep(1)}
              className="btn-ripple bg-azul-primario text-white px-10 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: '500ms' }}
            >
              <Rocket className="w-5 h-5" />
              Criar Novo Anúncio
            </button>
          </div>
        </div>
      </div>
    );
  }

=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
            style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
=======
            style={{ width: step === 1 ? "50%" : "100%" }}
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? "bg-azul-primario text-white" : "bg-branco-off text-cinza-texto border border-cinza-leve"}`}
            >
              3
            </div>
            <span className="text-sm font-medium text-azul-escuro">Preview</span>
          </div>
=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD

              <div className="pt-6 border-t border-cinza-leve/30 flex justify-end items-center mt-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <button
                  onClick={() => setStep(2)}
                  className="btn-ripple bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2"
                >
                  Continuar
                  <Rocket className="w-5 h-5" />
                </button>
              </div>
=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
                    value={productData.title}
                    onChange={(e) => setProductData(prev => ({ ...prev, title: e.target.value }))}
=======
                    defaultValue="Nike Air Max 90 Essential"
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
                      value={productData.brand}
                      onChange={(e) => setProductData(prev => ({ ...prev, brand: e.target.value }))}
=======
                      defaultValue="Nike"
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
                      className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-azul-escuro mb-2">
                      Tamanho (BR)
                    </label>
                    <input
<<<<<<< HEAD
                      type="text"
                      value={productData.size}
                      onChange={(e) => setProductData(prev => ({ ...prev, size: e.target.value }))}
=======
                      type="number"
                      defaultValue="42"
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
                      className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
<<<<<<< HEAD
                    Cor
                  </label>
                  <input
                    type="text"
                    value={productData.color}
                    onChange={(e) => setProductData(prev => ({ ...prev, color: e.target.value }))}
                    className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label className="block text-sm font-medium text-azul-escuro mb-2">
=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
                    Condição
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Novo", "Seminovo", "Usado - Bom", "Usado - Regular"].map(
<<<<<<< HEAD
                      (cond) => (
                        <button
                          key={cond}
                          onClick={() => setProductData(prev => ({ ...prev, condition: cond as any }))}
                          className={`btn-ripple py-3 rounded-xl border text-sm font-medium transition-all ${productData.condition === cond ? "bg-azul-primario text-white border-azul-primario" : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo"}`}
=======
                      (cond, i) => (
                        <button
                          key={cond}
                          className={`btn-ripple py-3 rounded-xl border text-sm font-medium transition-all ${i === 2 ? "bg-azul-primario text-white border-azul-primario" : "bg-branco-off text-cinza-texto border-cinza-leve hover:bg-azul-gelo"}`}
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
                        >
                          {cond}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
<<<<<<< HEAD
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-azul-escuro">
                      Descrição (Gerada por IA)
                    </label>
                    <button
                      onClick={handleGenerateDescription}
                      disabled={isGeneratingDescription}
                      className="text-xs text-azul-primario font-bold hover:text-azul-escuro transition-colors flex items-center gap-1 disabled:opacity-50"
                    >
                      <Sparkles className="w-3 h-3" />
                      {isGeneratingDescription ? "Gerando..." : "Gerar"}
                    </button>
                  </div>
                  <textarea
                    value={productData.description}
                    onChange={(e) => setProductData(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="input-glow w-full bg-branco-off border border-cinza-leve rounded-xl px-4 py-3 resize-none"
                    placeholder="A IA vai criar uma descrição automaticamente..."
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
                      <TrendingUp className="w-3 h-3" />
                      Competitivo
=======
                      <Sparkles className="w-3 h-3" />
                      Preço sugerido
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
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
<<<<<<< HEAD
                    onClick={() => setStep(3)}
                    className="btn-ripple bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2"
                  >
                    Revisar Anúncio
                    <Eye className="w-5 h-5" />
=======
                    onClick={handlePublish}
                    className="btn-ripple bg-azul-primario text-white px-8 py-4 rounded-xl font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Publicar Anúncio
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
                  </button>
                </div>
              </div>
            </div>
          )}
<<<<<<< HEAD

          {step === 3 && (
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-display font-bold text-azul-escuro mb-6">
                Prévia do Seu Anúncio
              </h2>

              {/* Product Preview Card */}
              <div className="bg-branco-off rounded-2xl overflow-hidden shadow-lg mb-8 border border-cinza-leve">
                <div className="aspect-square bg-gradient-to-br from-azul-gelo to-azul-claro flex items-center justify-center">
                  <div className="text-center">
                    <Package className="w-24 h-24 text-azul-primario/30 mx-auto" />
                    <p className="text-cinza-texto mt-4">Imagem do sapato</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-azul-escuro">{productData.title}</h3>
                      <p className="text-sm text-cinza-texto">{productData.brand} • Tamanho {productData.size}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-yellow-700">4.8</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 mb-4 border border-cinza-leve">
                    <p className="text-sm text-cinza-texto leading-relaxed">{productData.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-cinza-leve text-center">
                      <p className="text-cinza-texto text-xs mb-1">Condição</p>
                      <p className="font-bold text-azul-escuro">{productData.condition}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-cinza-leve text-center">
                      <p className="text-cinza-texto text-xs mb-1">Cor</p>
                      <p className="font-bold text-azul-escuro">{productData.color}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-cinza-leve text-center">
                      <p className="text-cinza-texto text-xs mb-1">Vendedor</p>
                      <p className="font-bold text-azul-escuro">Você</p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-bold text-azul-primario">R$ {price}</span>
                    <span className="text-cinza-texto text-sm">À vista</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-azul-primario text-white py-3 rounded-lg font-bold hover:bg-azul-escuro transition-colors">
                      Comprar
                    </button>
                    <button className="px-4 py-3 border border-cinza-leve rounded-lg hover:bg-branco-off transition-colors">
                      <Share2 className="w-5 h-5 text-cinza-texto" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">Revise todas as informações antes de publicar. Você poderá editar depois se necessário.</div>
              </div>

              <div className="pt-6 border-t border-cinza-leve/30 flex justify-between items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <button
                  onClick={() => setStep(2)}
                  className="text-cinza-texto font-medium hover:text-azul-primario transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={handlePublish}
                  className="btn-ripple bg-accent-sucesso text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-600/20 flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Publicar Agora!
                </button>
              </div>
            </div>
          )}
=======
>>>>>>> c79505c92ed6b3aebca497cce7bd9d9fa8b93553
        </div>
      </div>
    </div>
  );
}

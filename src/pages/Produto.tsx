import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Share2,
  Star,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  MessageCircle,
  Facebook,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_PRODUCT = {
  id: "1",
  title: "Nike Air Max 90 Essential",
  price: 189.9,
  originalPrice: 350.0,
  images: [
    "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
  ],
  condition: "Usado - Bom",
  rating: 4.8,
  reviews: 23,
  seller: {
    username: "joao_sneakers",
    rating: 4.9,
    sales: 156,
    isTopSeller: true,
  },
  sizes: [38, 39, 40, 41, 42, 43],
  color: "Azul / Branco",
  description:
    "Tênis Nike Air Max 90 original, usado poucas vezes. Apresenta leves marcas de uso na sola, mas o cabedal está impecável. Acompanha caixa original.",
};

export function Produto() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(42);
  const [isLiked, setIsLiked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % MOCK_PRODUCT.images.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) =>
        (prev - 1 + MOCK_PRODUCT.images.length) % MOCK_PRODUCT.images.length,
    );

  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeThumb = container.children[currentImage] as HTMLElement;
      if (activeThumb) {
        container.scrollTo({
          left:
            activeThumb.offsetLeft -
            container.offsetWidth / 2 +
            activeThumb.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-cinza-texto mb-8">
        <Link to="/" className="hover:text-azul-primario transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          to="/explorar"
          className="hover:text-azul-primario transition-colors"
        >
          Tênis
        </Link>
        <span>/</span>
        <span className="text-azul-escuro font-medium truncate">
          {MOCK_PRODUCT.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-branco-off rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={MOCK_PRODUCT.images[currentImage]}
                alt={`${MOCK_PRODUCT.title} - Foto ${currentImage + 1}`}
                className="w-full h-full object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
            >
              <ChevronLeft className="w-6 h-6 text-azul-escuro" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-sm"
            >
              <ChevronRight className="w-6 h-6 text-azul-escuro" />
            </button>

            <div className="absolute top-4 right-4 flex gap-2">
              <div className="relative">
                <AnimatePresence>
                  {isShareOpen && (
                    <>
                      <motion.a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        animate={{ opacity: 1, x: -55, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-blue-600 hover:scale-110 transition-transform z-10"
                      >
                        <Facebook className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=Confira este sapato na Calça-me!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        animate={{ opacity: 1, x: -40, y: 40, scale: 1 }}
                        exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
                        className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-sky-500 hover:scale-110 transition-transform z-10"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={`https://api.whatsapp.com/send?text=Confira este sapato na Calça-me! ${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        animate={{ opacity: 1, x: 0, y: 55, scale: 1 }}
                        exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-green-500 hover:scale-110 transition-transform z-10"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </motion.a>
                    </>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="relative z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <Share2 className="w-5 h-5 text-cinza-texto" />
                </button>
              </div>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <motion.div animate={isLiked ? { scale: [1, 1.5, 1] } : {}}>
                  <Heart
                    className={cn(
                      "w-5 h-5 transition-colors",
                      isLiked
                        ? "fill-accent-erro text-accent-erro"
                        : "text-cinza-texto",
                    )}
                  />
                </motion.div>
              </button>
            </div>
          </div>

          <div
            ref={thumbnailsRef}
            className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar scroll-smooth"
          >
            {MOCK_PRODUCT.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={cn(
                  "relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all",
                  currentImage === idx
                    ? "border-azul-primario"
                    : "border-transparent hover:border-cinza-leve",
                )}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover mix-blend-multiply bg-branco-off"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-azul-escuro mb-2">
              {MOCK_PRODUCT.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-cinza-texto">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent-alerta text-accent-alerta" />
                <span className="font-medium text-azul-escuro">
                  {MOCK_PRODUCT.rating}
                </span>
                <span>({MOCK_PRODUCT.reviews} avaliações)</span>
              </div>
              <span className="w-1 h-1 bg-cinza-leve rounded-full"></span>
              <span
                className={cn(
                  "px-2 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider border",
                  MOCK_PRODUCT.condition === "Novo"
                    ? "bg-accent-sucesso/10 text-accent-sucesso border-accent-sucesso/20"
                    : "bg-azul-primario/10 text-azul-primario border-azul-primario/20",
                )}
              >
                {MOCK_PRODUCT.condition}
              </span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-end gap-3 mb-1">
              <span className="text-4xl font-display font-bold text-azul-escuro">
                R$ {MOCK_PRODUCT.price.toFixed(2).replace(".", ",")}
              </span>
              {MOCK_PRODUCT.originalPrice && (
                <span className="text-lg text-cinza-texto line-through mb-1">
                  R$ {MOCK_PRODUCT.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>
            <p className="text-sm text-cinza-texto">
              em até 6x de R${" "}
              {(MOCK_PRODUCT.price / 6).toFixed(2).replace(".", ",")} sem juros
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-azul-escuro">Tamanho</h3>
              <Link
                to="/medir-pe"
                className="text-sm text-azul-primario hover:underline flex items-center gap-1"
              >
                Não sabe seu tamanho? ✨
              </Link>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {MOCK_PRODUCT.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "py-3 rounded-xl border text-sm font-bold transition-all",
                    selectedSize === size
                      ? "bg-azul-primario text-white border-azul-primario shadow-md"
                      : "bg-white text-cinza-texto border-cinza-leve hover:border-azul-claro hover:text-azul-primario",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="flex-1 bg-azul-primario text-white py-4 rounded-xl font-bold text-lg hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center justify-center gap-2 group">
              <ShoppingCart className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
              Comprar Agora
            </button>
            <button className="flex-1 bg-branco-off text-azul-escuro border border-cinza-leve py-4 rounded-xl font-bold text-lg hover:bg-azul-gelo transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Fazer Oferta
            </button>
          </div>

          {/* Seller Info */}
          <div className="bg-branco-off rounded-2xl p-4 md:p-6 mb-8 border border-cinza-leve/30">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-azul-gelo rounded-full flex items-center justify-center text-azul-primario font-display font-bold text-xl relative">
                  {MOCK_PRODUCT.seller.username.charAt(0).toUpperCase()}
                  {MOCK_PRODUCT.seller.isTopSeller && (
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent-alerta rounded-full border-2 border-white flex items-center justify-center text-[10px]">
                      👑
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-medium text-azul-escuro">
                    @{MOCK_PRODUCT.seller.username}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-cinza-texto mt-1">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-accent-alerta text-accent-alerta" />{" "}
                      {MOCK_PRODUCT.seller.rating}
                    </span>
                    <span>•</span>
                    <span>{MOCK_PRODUCT.seller.sales} vendas</span>
                  </div>
                </div>
              </div>
              <button className="text-sm font-medium text-azul-primario hover:underline">
                Ver perfil
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-lg text-azul-escuro mb-3">
              Descrição
            </h3>
            <p className="text-cinza-texto leading-relaxed">
              {MOCK_PRODUCT.description}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 border-t border-cinza-leve/30 pt-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-accent-sucesso shrink-0" />
              <div>
                <h4 className="font-medium text-azul-escuro text-sm mb-1">
                  Compra Garantida
                </h4>
                <p className="text-xs text-cinza-texto">
                  Receba o produto que está esperando ou devolvemos o dinheiro.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-azul-primario shrink-0" />
              <div>
                <h4 className="font-medium text-azul-escuro text-sm mb-1">
                  Envio Rápido
                </h4>
                <p className="text-xs text-cinza-texto">
                  O vendedor tem até 3 dias úteis para postar o produto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

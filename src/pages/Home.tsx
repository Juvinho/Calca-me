import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, Ruler, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoeCard } from "@/components/ui/ShoeCard";

const HERO_SHOES = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
];

const CATEGORIES = [
  { id: "tenis", name: "Tênis", icon: "👟", count: "1.2k" },
  { id: "salto", name: "Salto", icon: "👠", count: "850" },
  { id: "bota", name: "Bota", icon: "🥾", count: "420" },
  { id: "social", name: "Social", icon: "👞", count: "310" },
  { id: "sandalia", name: "Sandália", icon: "🩴", count: "940" },
];

const TRENDING_SHOES = [
  {
    id: "1",
    title: "Nike Air Max 90",
    price: 189.9,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=800",
    condition: "Usado - Bom" as const,
    rating: 4.8,
    seller: "joao_sneakers",
    size: 42,
    color: "blue",
  },
  {
    id: "2",
    title: "Adidas Ultraboost",
    price: 350.0,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    condition: "Novo" as const,
    rating: 5.0,
    seller: "maria_store",
    size: 39,
    color: "black",
  },
  {
    id: "3",
    title: "Vans Old Skool",
    price: 120.5,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    condition: "Usado - Regular" as const,
    rating: 4.2,
    seller: "skate_boy",
    size: 40,
    color: "red",
  },
  {
    id: "4",
    title: "New Balance 574",
    price: 280.0,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=800",
    condition: "Novo" as const,
    rating: 4.9,
    seller: "sneaker_head",
    size: 41,
    color: "gray",
  },
];

const HERO_TEXTS = [
  "Compre e venda",
  "Descubra e anuncie",
  "Renove e lucre",
];

export function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [startTypingDynamic, setStartTypingDynamic] = useState(false);
  
  const [currentHeroShoe, setCurrentHeroShoe] = useState(0);
  const [heroShoeDirection, setHeroShoeDirection] = useState(0);

  const nextHeroShoe = () => {
    setHeroShoeDirection(1);
    setCurrentHeroShoe((prev) => (prev + 1) % HERO_SHOES.length);
  };

  const prevHeroShoe = () => {
    setHeroShoeDirection(-1);
    setCurrentHeroShoe((prev) => (prev - 1 + HERO_SHOES.length) % HERO_SHOES.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTypingDynamic(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTypingDynamic) return;

    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const i = loopNum % HERO_TEXTS.length;
      const fullText = HERO_TEXTS[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, startTypingDynamic]);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 lg:pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-bold text-azul-escuro leading-[1.1] mb-6"
              >
                <span className="inline-block overflow-hidden whitespace-nowrap animate-[typing_2s_steps(40,end)] align-bottom">
                  Cada passo conta.
                </span>{" "}
                <br />
                <span className="text-azul-primario">
                  {text}
                </span>
                {startTypingDynamic && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[4px] h-[0.8em] bg-azul-primario align-middle ml-1 -mt-2"
                  />
                )}
                <br />
                sapatos com estilo.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-cinza-texto mb-8 max-w-lg"
              >
                O maior marketplace exclusivo para calçados. Encontre o tamanho
                perfeito, venda o que não usa mais e renove sua sapateira.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/explorar"
                  className="bg-azul-primario text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-azul-escuro transition-colors flex items-center justify-center gap-2 group"
                >
                  Comprar Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/vender"
                  className="bg-branco-off text-azul-escuro border border-cinza-leve px-8 py-4 rounded-full font-medium text-lg hover:bg-azul-gelo transition-colors flex items-center justify-center"
                >
                  Vender Sapato
                </Link>
              </motion.div>
            </div>

            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-azul-gelo rounded-full blur-3xl opacity-50 animate-pulse"></div>

              {/* Floating mini shoes */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-24 h-24 bg-white rounded-2xl shadow-xl p-2 z-20 hidden md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=200"
                  alt="Mini sneaker"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-2xl shadow-xl p-2 z-20 hidden md:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=200"
                  alt="Mini sneaker"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center"
              >
                <AnimatePresence initial={false} custom={heroShoeDirection}>
                  <motion.img
                    key={currentHeroShoe}
                    custom={heroShoeDirection}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? "100%" : "-100%",
                        opacity: 0,
                        rotate: direction > 0 ? 15 : -45,
                      }),
                      center: {
                        zIndex: 1,
                        x: 0,
                        opacity: 1,
                        rotate: -15,
                      },
                      exit: (direction: number) => ({
                        zIndex: 0,
                        x: direction < 0 ? "100%" : "-100%",
                        opacity: 0,
                        rotate: direction < 0 ? 15 : -45,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      rotate: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    src={HERO_SHOES[currentHeroShoe]}
                    alt="Sneaker 3D"
                    className="absolute w-full h-auto drop-shadow-2xl rounded-3xl cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                <button
                  onClick={prevHeroShoe}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg z-20 transition-transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-azul-escuro" />
                </button>
                <button
                  onClick={nextHeroShoe}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white shadow-lg z-20 transition-transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-azul-escuro" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start shrink-0"
            >
              <Link
                to={`/explorar?categoria=${cat.id}`}
                className="flex flex-col items-center justify-center w-32 h-32 bg-branco-off rounded-2xl border border-cinza-leve/50 hover:border-azul-claro hover:bg-azul-gelo transition-all group"
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="text-4xl mb-2 group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300"
                >
                  {cat.icon}
                </motion.span>
                <span className="font-medium text-azul-escuro">{cat.name}</span>
                <span className="text-xs text-cinza-texto mt-1">
                  {cat.count} sapatos
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Banner Medir Pé */}
      <section className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-azul-escuro to-azul-primario rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-azul-claro/30 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Não sabe seu tamanho? ✨
            </h2>
            <p className="text-azul-gelo text-lg mb-8">
              Descubra agora com nossa ferramenta mágica de medição interativa.
              Encontre o sapato perfeito para o seu pé na primeira tentativa!
            </p>
            <Link
              to="/medir-pe"
              className="inline-flex items-center gap-2 bg-white text-azul-primario px-6 py-3 rounded-full font-bold hover:bg-azul-gelo hover:scale-105 transition-all"
            >
              <Ruler className="w-5 h-5" />
              Medir meu pé agora
            </Link>
          </div>

          <div className="relative z-10 w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"
              />
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white drop-shadow-lg"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Em Alta */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-2">
            <Zap className="w-6 h-6 text-accent-alerta fill-accent-alerta" />
            Em Alta
          </h2>
          <Link
            to="/explorar"
            className="text-azul-primario font-medium hover:underline flex items-center gap-1"
          >
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDING_SHOES.map((shoe, i) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ShoeCard {...shoe} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

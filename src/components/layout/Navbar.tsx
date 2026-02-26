import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Heart, Ruler } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glassmorphism shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative text-azul-primario">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-pulse-footprint"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-azul-escuro">
            Calça-me
          </span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <input
              type="text"
              placeholder="Buscar sapatos..."
              className="w-full bg-branco-off border border-cinza-leve rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-azul-claro focus:border-transparent transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cinza-texto w-5 h-5 group-focus-within:text-azul-primario transition-colors" />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/explorar"
            className="text-sm font-medium text-cinza-texto hover:text-azul-primario transition-colors"
          >
            Explorar
          </Link>
          <Link
            to="/vender"
            className="text-sm font-medium text-cinza-texto hover:text-azul-primario transition-colors"
          >
            Vender
          </Link>
          <Link
            to="/medir-pe"
            className="flex items-center gap-1 text-sm font-medium text-azul-primario bg-azul-gelo px-3 py-1.5 rounded-full hover:bg-azul-claro/20 transition-colors"
          >
            <Ruler className="w-4 h-4" />
            Medir Pé
          </Link>
        </nav>

        <div className="flex items-center gap-4 ml-4">
          <button className="text-cinza-texto hover:text-azul-primario transition-colors relative group">
            <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <Link to="/carrinho" className="text-cinza-texto hover:text-azul-primario transition-colors relative group">
            <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 bg-accent-erro text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          <button className="text-cinza-texto hover:text-azul-primario transition-colors group">
            <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

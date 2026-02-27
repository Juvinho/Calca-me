import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ShoeCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  condition: "Novo" | "Usado - Bom" | "Usado - Regular";
  rating: number;
  seller: string;
  size: number;
  color: string;
  className?: string;
}

export function ShoeCard({
  id,
  title,
  price,
  image,
  condition,
  rating,
  seller,
  size,
  color,
  className,
}: ShoeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative bg-white rounded-2xl p-4 border border-cinza-leve/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col",
        className,
      )}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
        className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
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

      <Link
        to={`/sapato/${id}`}
        className="block relative aspect-square mb-4 rounded-xl overflow-hidden bg-branco-off"
      >
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span
            className={cn(
              "px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md",
              condition === "Novo"
                ? "bg-accent-sucesso/10 text-accent-sucesso border border-accent-sucesso/20"
                : "bg-azul-primario/10 text-azul-primario border border-azul-primario/20",
            )}
          >
            {condition}
          </span>
        </div>
      </Link>

      <div className="flex-grow flex flex-col">
        <Link
          to={`/sapato/${id}`}
          className="block group-hover:text-azul-primario transition-colors"
        >
          <h3 className="font-display font-semibold text-lg text-azul-escuro line-clamp-1 mb-1">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-xs text-cinza-texto mb-3">
          <Star className="w-3.5 h-3.5 fill-accent-alerta text-accent-alerta" />
          <span className="font-medium">{rating}</span>
          <span className="text-cinza-leve mx-1">•</span>
          <span className="truncate">@{seller}</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-end justify-between mb-3">
              <div>
              <p className="text-xs text-cinza-texto mb-0.5">Por apenas</p>
              <p className="font-display font-bold text-2xl text-accent-erro">
                R$ {price.toFixed(2).replace(".", ",")}
              </p>
              {originalPrice && (
                <p className="text-sm text-cinza-texto line-through">R$ {originalPrice.toFixed(2).replace('.',',')}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-cinza-leve/30">
            <div className="flex items-center gap-2 text-xs text-cinza-texto">
              <span className="flex items-center gap-1 bg-branco-off px-2 py-1 rounded-md">
                <span className="font-medium">Tam:</span> {size}
              </span>
              <span className="flex items-center gap-1 bg-branco-off px-2 py-1 rounded-md">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
                <span className="capitalize">{color}</span>
              </span>
            </div>

            <button className="w-8 h-8 rounded-full bg-azul-gelo text-azul-primario flex items-center justify-center hover:bg-azul-primario hover:text-white transition-colors relative overflow-hidden group/btn">
              <ShoppingCart className="w-4 h-4 relative z-10" />
              <span className="absolute inset-0 bg-azul-primario scale-0 group-hover/btn:scale-100 transition-transform rounded-full origin-center"></span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

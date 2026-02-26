import { useState } from "react";
import { motion } from "motion/react";
import { Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { ShoeCard } from "@/components/ui/ShoeCard";

const MOCK_SHOES = [
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
  {
    id: "5",
    title: "Puma Suede",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    condition: "Usado - Bom" as const,
    rating: 4.5,
    seller: "vintage_kicks",
    size: 38,
    color: "green",
  },
  {
    id: "6",
    title: "Converse Chuck Taylor",
    price: 199.9,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    condition: "Novo" as const,
    rating: 4.7,
    seller: "classic_shoes",
    size: 43,
    color: "white",
  },
];

export function Explorar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-azul-escuro mb-2">
            Explorar Sapatos
          </h1>
          <p className="text-cinza-texto text-sm">
            Mostrando {MOCK_SHOES.length} resultados para "Tênis"
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-branco-off border border-cinza-leve px-4 py-2.5 rounded-xl text-sm font-medium text-azul-escuro hover:bg-azul-gelo transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filtros
          </button>

          <div className="relative flex-1 md:flex-none">
            <select className="w-full appearance-none bg-branco-off border border-cinza-leve px-4 py-2.5 pr-10 rounded-xl text-sm font-medium text-azul-escuro hover:bg-azul-gelo transition-colors focus:outline-none focus:ring-2 focus:ring-azul-primario">
              <option>Mais Relevantes</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Mais Recentes</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cinza-texto pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters (Desktop) */}
        <motion.aside
          initial={false}
          animate={{
            width: isFilterOpen ? 280 : 0,
            opacity: isFilterOpen ? 1 : 0,
          }}
          className="hidden lg:block overflow-hidden shrink-0"
        >
          <div className="w-[280px] bg-white border border-cinza-leve/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cinza-leve/30">
              <SlidersHorizontal className="w-5 h-5 text-azul-primario" />
              <h3 className="font-display font-bold text-lg text-azul-escuro">
                Filtros
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">
                  Tamanho
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      className="border border-cinza-leve rounded-lg py-1.5 text-sm hover:border-azul-primario hover:text-azul-primario transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">
                  Condição
                </h4>
                <div className="space-y-2">
                  {["Novo", "Seminovo", "Usado - Bom", "Usado - Regular"].map(
                    (cond) => (
                      <label
                        key={cond}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-cinza-leve text-azul-primario focus:ring-azul-primario"
                        />
                        <span className="text-sm text-cinza-texto group-hover:text-azul-escuro transition-colors">
                          {cond}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">
                  Marca
                </h4>
                <div className="space-y-2">
                  {["Nike", "Adidas", "Vans", "Puma", "New Balance", "Converse"].map(
                    (brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-cinza-leve text-azul-primario focus:ring-azul-primario"
                        />
                        <span className="text-sm text-cinza-texto group-hover:text-azul-escuro transition-colors">
                          {brand}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">
                  Cor
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Preto", bg: "bg-black" },
                    { name: "Branco", bg: "bg-white border border-cinza-leve" },
                    { name: "Azul", bg: "bg-blue-600" },
                    { name: "Vermelho", bg: "bg-red-600" },
                    { name: "Cinza", bg: "bg-gray-500" },
                    { name: "Verde", bg: "bg-green-600" },
                  ].map((color) => (
                    <button
                      key={color.name}
                      title={color.name}
                      className={`w-8 h-8 rounded-full ${color.bg} ring-2 ring-transparent hover:ring-azul-primario hover:scale-110 transition-all shadow-sm`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">
                  Preço
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-cinza-leve rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-azul-primario"
                  />
                  <span className="text-cinza-leve">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-cinza-leve rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-azul-primario"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_SHOES.map((shoe, i) => (
              <motion.div
                key={shoe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ShoeCard {...shoe} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

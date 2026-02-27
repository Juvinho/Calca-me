import { motion, AnimatePresence } from "motion/react";
import { Filter, SlidersHorizontal, ChevronDown, Search, Image as ImageIcon, Heart, Grid3x3, List, X, Sparkles, TrendingUp } from "lucide-react";
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [compareMode, setCompareMode] = useState(false);
  const [selectedToCompare, setSelectedToCompare] = useState<string[]>([]);
  const [imageSearchOpen, setImageSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Filter shoes based on all criteria
  const filteredShoes = MOCK_SHOES.filter((shoe) => {
    const matchesSearch = shoe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shoe.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(shoe.size);
    const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(shoe.condition);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(b => shoe.title.includes(b));
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(shoe.color);
    const matchesPrice = shoe.price >= priceRange.min && shoe.price <= priceRange.max;

    return matchesSearch && matchesSize && matchesCondition && matchesBrand && matchesColor && matchesPrice;
  });

  // Get active filters count
  const activeFiltersCount = 
    selectedSizes.length + 
    selectedConditions.length + 
    selectedBrands.length + 
    selectedColors.length + 
    (searchQuery ? 1 : 0);

  const toggleCompare = (id: string) => {
    if (selectedToCompare.includes(id)) {
      setSelectedToCompare(selectedToCompare.filter(i => i !== id));
    } else if (selectedToCompare.length < 3) {
      setSelectedToCompare([...selectedToCompare, id]);
    }
  };

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(i => i !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedConditions([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setPriceRange({ min: 0, max: 500 });
    setSearchQuery("");
  };

  const compareShoes = filteredShoes.filter(s => selectedToCompare.includes(s.id));

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar sapatos, marcas, vendedores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-cinza-leve rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-azul-primario placeholder-cinza-texto"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cinza-texto" />
          </div>

          <button
            onClick={() => setImageSearchOpen(!imageSearchOpen)}
            className="flex items-center justify-center gap-2 bg-azul-claro text-azul-primario px-4 py-3 rounded-xl font-medium hover:bg-azul-gelo transition-colors"
          >
            <ImageIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Buscar por Foto</span>
          </button>
        </div>

        {/* Image Search */}
        <AnimatePresence>
          {imageSearchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-3 relative"
            >
              <div className="bg-azul-gelo/50 border border-azul-claro rounded-xl p-4 flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-azul-primario" />
                <input
                  type="file"
                  accept="image/*"
                  className="flex-1 text-sm cursor-pointer"
                />
                <button className="bg-azul-primario text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-azul-escuro">Buscar</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Header with controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-azul-escuro mb-2">
            Explorar Sapatos
          </h1>
          <p className="text-cinza-texto text-sm">
            Mostrando {filteredShoes.length} de {MOCK_SHOES.length} sapatos
            {activeFiltersCount > 0 && ` (${activeFiltersCount} filtro${activeFiltersCount > 1 ? 's' : ''})`}
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-branco-off border border-cinza-leve px-4 py-2.5 rounded-xl text-sm font-medium text-azul-escuro hover:bg-azul-gelo transition-colors relative"
          >
            <Filter className="w-4 h-4" />
            Filtros
            {activeFiltersCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-alerta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="relative">
            <select className="appearance-none bg-branco-off border border-cinza-leve px-4 py-2.5 pr-10 rounded-xl text-sm font-medium text-azul-escuro hover:bg-azul-gelo transition-colors focus:outline-none focus:ring-2 focus:ring-azul-primario">
              <option>Mais Relevantes</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Mais Recentes</option>
              <option>Melhor Avaliação</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cinza-texto pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-branco-off border border-cinza-leve rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-azul-primario text-white" : "text-cinza-texto hover:text-azul-primario"}`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-azul-primario text-white" : "text-cinza-texto hover:text-azul-primario"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <motion.aside
          initial={false}
          animate={{
            width: isFilterOpen ? 280 : 0,
            opacity: isFilterOpen ? 1 : 0,
          }}
          className="hidden lg:block overflow-hidden shrink-0"
        >
          <div className="w-[280px] bg-white border border-cinza-leve/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-cinza-leve/30">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-azul-primario" />
                <h3 className="font-display font-bold text-lg text-azul-escuro">
                  Filtros
                </h3>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-azul-primario font-bold hover:text-azul-escuro"
                >
                  Limpar
                </button>
              )}
            </div>

            <div className="space-y-6">
              {/* Tamanho */}
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">Tamanho</h4>
                <div className="grid grid-cols-4 gap-2">
                  {[38, 39, 40, 41, 42, 43, 44].map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        if (selectedSizes.includes(size)) {
                          setSelectedSizes(selectedSizes.filter(s => s !== size));
                        } else {
                          setSelectedSizes([...selectedSizes, size]);
                        }
                      }}
                      className={`border rounded-lg py-1.5 text-sm transition-colors ${
                        selectedSizes.includes(size)
                          ? "bg-azul-primario text-white border-azul-primario"
                          : "border-cinza-leve hover:border-azul-primario hover:text-azul-primario"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condição */}
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">Condição</h4>
                <div className="space-y-2">
                  {["Novo", "Seminovo", "Usado - Bom", "Usado - Regular"].map((cond) => (
                    <label key={cond} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedConditions.includes(cond)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedConditions([...selectedConditions, cond]);
                          } else {
                            setSelectedConditions(selectedConditions.filter(c => c !== cond));
                          }
                        }}
                        className="w-4 h-4 rounded border-cinza-leve text-azul-primario focus:ring-azul-primario cursor-pointer"
                      />
                      <span className="text-sm text-cinza-texto group-hover:text-azul-escuro transition-colors">
                        {cond}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Marca */}
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">Marca</h4>
                <div className="space-y-2">
                  {["Nike", "Adidas", "Vans", "Puma", "New Balance", "Converse"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                        className="w-4 h-4 rounded border-cinza-leve text-azul-primario focus:ring-azul-primario cursor-pointer"
                      />
                      <span className="text-sm text-cinza-texto group-hover:text-azul-escuro transition-colors">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cor */}
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">Cor</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Preto", bg: "bg-black", color: "black" },
                    { name: "Branco", bg: "bg-white border border-cinza-leve", color: "white" },
                    { name: "Azul", bg: "bg-blue-600", color: "blue" },
                    { name: "Vermelho", bg: "bg-red-600", color: "red" },
                    { name: "Cinza", bg: "bg-gray-500", color: "gray" },
                    { name: "Verde", bg: "bg-green-600", color: "green" },
                  ].map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        if (selectedColors.includes(c.color)) {
                          setSelectedColors(selectedColors.filter(col => col !== c.color));
                        } else {
                          setSelectedColors([...selectedColors, c.color]);
                        }
                      }}
                      title={c.name}
                      className={`w-8 h-8 rounded-full ${c.bg} ring-2 transition-all shadow-sm ${
                        selectedColors.includes(c.color) ? "ring-azul-primario scale-110" : "ring-transparent hover:ring-azul-primario hover:scale-110"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Preço */}
              <div>
                <h4 className="font-medium text-azul-escuro mb-3 text-sm">Preço</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                    placeholder="Min"
                    className="w-full border border-cinza-leve rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-azul-primario"
                  />
                  <span className="text-cinza-leve">-</span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 500 })}
                    placeholder="Max"
                    className="w-full border border-cinza-leve rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-azul-primario"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Comparador */}
          <AnimatePresence>
            {selectedToCompare.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-8 bg-azul-gelo/50 border border-azul-claro rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-azul-primario" />
                    <h3 className="font-bold text-azul-escuro">Comparando {selectedToCompare.length} sapato{selectedToCompare.length > 1 ? 's' : ''}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedToCompare([])}
                    className="text-cinza-texto hover:text-azul-primario transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      {compareShoes.length > 0 && (
                        <>
                          <tr className="border-b border-azul-claro/30">
                            <td className="font-medium text-azul-escuro py-3 pr-4">Produto</td>
                            {compareShoes.map((shoe) => (
                              <td key={shoe.id} className="py-3 px-2 text-center">
                                <p className="font-bold text-azul-escuro text-xs">{shoe.title}</p>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b border-azul-claro/30">
                            <td className="font-medium text-azul-escuro py-3 pr-4">Preço</td>
                            {compareShoes.map((shoe) => (
                              <td key={shoe.id} className="py-3 px-2 text-center">
                                <p className="font-bold text-accent-sucesso">R$ {shoe.price}</p>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b border-azul-claro/30">
                            <td className="font-medium text-azul-escuro py-3 pr-4">Tamanho</td>
                            {compareShoes.map((shoe) => (
                              <td key={shoe.id} className="py-3 px-2 text-center text-cinza-texto">
                                {shoe.size}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b border-azul-claro/30">
                            <td className="font-medium text-azul-escuro py-3 pr-4">Condição</td>
                            {compareShoes.map((shoe) => (
                              <td key={shoe.id} className="py-3 px-2 text-center text-cinza-texto text-xs">
                                {shoe.condition}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="font-medium text-azul-escuro py-3 pr-4">Avaliação</td>
                            {compareShoes.map((shoe) => (
                              <td key={shoe.id} className="py-3 px-2 text-center">
                                <p className="font-bold text-yellow-500">⭐ {shoe.rating}</p>
                              </td>
                            ))}
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>

                <button className="mt-4 w-full bg-azul-primario text-white py-2.5 rounded-lg font-bold hover:bg-azul-escuro transition-colors">
                  Ver Comparação Detalhada
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid/List View */}
          {filteredShoes.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredShoes.map((shoe, i) => (
                  <motion.div
                    key={shoe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative group"
                  >
                    <ShoeCard {...shoe} />
                    {/* Overlay buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleWishlist(shoe.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                          wishlist.includes(shoe.id)
                            ? "bg-accent-alerta text-white"
                            : "bg-white text-cinza-texto hover:text-accent-alerta"
                        }`}
                      >
                        <Heart className="w-5 h-5" fill={wishlist.includes(shoe.id) ? "currentColor" : "none"} />
                      </button>
                      <button
                        onClick={() => toggleCompare(shoe.id)}
                        disabled={!selectedToCompare.includes(shoe.id) && selectedToCompare.length >= 3}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                          selectedToCompare.includes(shoe.id)
                            ? "bg-azul-primario text-white"
                            : "bg-white text-cinza-texto hover:text-azul-primario disabled:opacity-50 disabled:hover:text-cinza-texto"
                        }`}
                        title={selectedToCompare.length >= 3 && !selectedToCompare.includes(shoe.id) ? "Máximo 3 produtos" : "Comparar"}
                      >
                        <TrendingUp className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredShoes.map((shoe, i) => (
                  <motion.div
                    key={shoe.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-xl border border-cinza-leve p-4 flex items-center gap-4 group hover:shadow-lg transition-shadow"
                  >
                    <div className="w-24 h-24 bg-branco-off rounded-lg overflow-hidden flex-shrink-0">
                      <img src={shoe.image} alt={shoe.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-azul-escuro mb-1">{shoe.title}</h3>
                      <p className="text-sm text-cinza-texto mb-2">{shoe.brand} • Tamanho {shoe.size} • {shoe.condition}</p>
                      <p className="text-xs text-cinza-texto">Vendido por: {shoe.seller}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-azul-primario">R$ {shoe.price}</p>
                        <p className="text-xs text-yellow-500 font-bold">⭐ {shoe.rating}</p>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => toggleWishlist(shoe.id)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            wishlist.includes(shoe.id)
                              ? "bg-accent-alerta text-white"
                              : "bg-branco-off text-cinza-texto hover:text-accent-alerta"
                          }`}
                        >
                          <Heart className="w-4 h-4" fill={wishlist.includes(shoe.id) ? "currentColor" : "none"} />
                        </button>
                        <button
                          onClick={() => toggleCompare(shoe.id)}
                          disabled={!selectedToCompare.includes(shoe.id) && selectedToCompare.length >= 3}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                            selectedToCompare.includes(shoe.id)
                              ? "bg-azul-primario text-white"
                              : "bg-branco-off text-cinza-texto hover:text-azul-primario disabled:opacity-50"
                          }`}
                        >
                          <TrendingUp className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <p className="text-cinza-texto text-lg mb-4">Nenhum sapato encontrado com seus filtros.</p>
              <button
                onClick={clearFilters}
                className="text-azul-primario font-bold hover:text-azul-escuro"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

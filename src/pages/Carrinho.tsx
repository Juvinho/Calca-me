import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';


export function Carrinho() {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);
  const [totalFlash, setTotalFlash] = useState(false);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    setTotalFlash(true);
    setTimeout(() => setTotalFlash(false), 300);
  };

  const total = items.reduce((acc, item) => acc + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-8"
        >
          <div className="text-8xl">👟</div>
          <motion.div 
            animate={{ y: [0, 20], opacity: [1, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 right-4 text-azul-claro text-2xl"
          >
            💧
          </motion.div>
        </motion.div>
        <h2 className="text-3xl font-display font-bold text-azul-escuro mb-4">Seu carrinho está vazio</h2>
        <p className="text-cinza-texto mb-8 text-center max-w-md">
          Parece que você ainda não encontrou o par perfeito. Que tal explorar algumas opções?
        </p>
        <Link to="/explorar" className="bg-azul-primario text-white px-8 py-4 rounded-full font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20">
          Explorar Sapatos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
      <h1 className="text-3xl font-display font-bold text-azul-escuro mb-8 flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-azul-primario" />
        Seu Carrinho
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 border border-cinza-leve/30 shadow-sm flex items-center gap-6"
              >
                <div className="w-24 h-24 bg-branco-off rounded-xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-lg text-azul-escuro mb-1">{item.title}</h3>
                  <p className="text-sm text-cinza-texto mb-2">Tam: {item.size} • Cor: {item.color}</p>
                  <p className="font-bold text-azul-primario">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="w-10 h-10 rounded-full bg-branco-off text-cinza-texto flex items-center justify-center hover:bg-accent-erro/10 hover:text-accent-erro transition-colors shrink-0"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-branco-off rounded-3xl p-6 border border-cinza-leve/50 sticky top-24">
            <h3 className="font-display font-bold text-xl text-azul-escuro mb-6">Resumo do Pedido</h3>
            
            <div className="space-y-4 mb-6 text-sm text-cinza-texto">
              <div className="flex justify-between">
                <span>Subtotal ({items.length} itens)</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between">
                <span>Frete</span>
                <span className="text-accent-sucesso font-medium">Grátis</span>
              </div>
            </div>

            <div className="border-t border-cinza-leve/50 pt-4 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-medium text-azul-escuro">Total</span>
                <motion.span 
                  animate={totalFlash ? { color: ['#1A56DB', '#0B2559'], scale: [1, 1.1, 1] } : {}}
                  className="font-display font-bold text-3xl text-azul-escuro"
                >
                  R$ {total.toFixed(2).replace('.', ',')}
                </motion.span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-azul-primario text-white py-4 rounded-xl font-bold text-lg hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              Finalizar Compra
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

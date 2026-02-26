import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-branco-off relative overflow-hidden">
      {/* Sun */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-alerta/20 rounded-full blur-2xl"></div>
      <div className="absolute top-24 right-24 w-24 h-24 bg-accent-alerta/40 rounded-full blur-xl"></div>
      
      {/* Desert Ground */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#E8DCC4] to-[#D4C4A8] z-0"></div>

      <div className="relative z-10 text-center">
        <motion.div 
          animate={{ x: [-20, 20, -20], rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-9xl mb-8 drop-shadow-xl"
        >
          🥾
        </motion.div>
        
        <h1 className="text-6xl font-display font-black text-azul-escuro mb-4">404</h1>
        <h2 className="text-2xl font-bold text-cinza-texto mb-8">Parece que este sapato se perdeu no deserto...</h2>
        
        <Link to="/" className="inline-flex items-center gap-2 bg-azul-primario text-white px-8 py-4 rounded-full font-bold hover:bg-azul-escuro transition-colors shadow-lg shadow-azul-primario/20">
          <ArrowLeft className="w-5 h-5" />
          Voltar para a civilização
        </Link>
      </div>

      {/* Tumbleweed */}
      <motion.div
        animate={{ 
          x: ['-100vw', '100vw'],
          rotate: [0, 1080],
          y: [0, -50, 0, -30, 0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-0 text-6xl z-20 opacity-50"
      >
        🌾
      </motion.div>
    </div>
  );
}

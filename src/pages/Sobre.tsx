import { motion } from "motion/react";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export function Sobre() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-azul-escuro mb-6"
        >
          Sobre o <span className="text-azul-primario">Calça-me</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-cinza-texto leading-relaxed"
        >
          O Calça-me é o maior marketplace exclusivo para calçados. Nosso
          propósito é conectar pessoas apaixonadas por sapatos, facilitando a
          compra e venda de modelos novos e usados com segurança, praticidade e
          muito estilo.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-branco-off p-8 rounded-3xl border border-cinza-leve"
        >
          <div className="w-14 h-14 bg-azul-gelo rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-7 h-7 text-azul-primario" />
          </div>
          <h3 className="text-2xl font-display font-bold text-azul-escuro mb-4">
            Compra e Venda Segura
          </h3>
          <p className="text-cinza-texto leading-relaxed">
            Garantimos a segurança de todas as transações. O dinheiro só é
            liberado para o vendedor quando o comprador recebe o produto
            exatamente como descrito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-branco-off p-8 rounded-3xl border border-cinza-leve"
        >
          <div className="w-14 h-14 bg-accent-sucesso/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="w-7 h-7 text-accent-sucesso" />
          </div>
          <h3 className="text-2xl font-display font-bold text-azul-escuro mb-4">
            Sustentabilidade
          </h3>
          <p className="text-cinza-texto leading-relaxed">
            Acreditamos na moda circular. Ao comprar e vender sapatos usados,
            você ajuda a reduzir o impacto ambiental e dá uma nova vida a
            calçados incríveis.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-azul-escuro text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-azul-primario/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-azul-claro/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10">
          <Heart className="w-12 h-12 text-accent-erro mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Feito para quem ama sapatos
          </h2>
          <p className="text-azul-gelo max-w-2xl mx-auto text-lg">
            Nossa missão é criar a melhor experiência possível para você
            encontrar o par perfeito ou repassar aquele que já não usa mais.
            Cada passo conta!
          </p>
        </div>
      </motion.div>
    </div>
  );
}

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-azul-escuro text-branco-off pt-16 pb-8 relative overflow-hidden">
      {/* Wave animation at the top of footer */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-azul-primario/20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-azul-claro"
              >
                <path d="M12 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M12 12v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
                <path d="M2 12h20v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z" />
              </svg>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Calça-me
              </span>
            </Link>
            <p className="text-sm text-cinza-leve/80 mb-6">
              Cada passo conta. Compre e venda sapatos com estilo, segurança e a
              medida certa.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Comprar
            </h4>
            <ul className="space-y-2 text-sm text-cinza-leve/80">
              <li>
                <Link
                  to="/explorar"
                  className="hover:text-azul-claro transition-colors"
                >
                  Tênis
                </Link>
              </li>
              <li>
                <Link
                  to="/explorar"
                  className="hover:text-azul-claro transition-colors"
                >
                  Social
                </Link>
              </li>
              <li>
                <Link
                  to="/explorar"
                  className="hover:text-azul-claro transition-colors"
                >
                  Botas
                </Link>
              </li>
              <li>
                <Link
                  to="/explorar"
                  className="hover:text-azul-claro transition-colors"
                >
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Vender
            </h4>
            <ul className="space-y-2 text-sm text-cinza-leve/80">
              <li>
                <Link
                  to="/vender"
                  className="hover:text-azul-claro transition-colors"
                >
                  Criar Anúncio
                </Link>
              </li>
              <li>
                <Link
                  to="/vender"
                  className="hover:text-azul-claro transition-colors"
                >
                  Dicas de Venda
                </Link>
              </li>
              <li>
                <Link
                  to="/vender"
                  className="hover:text-azul-claro transition-colors"
                >
                  Taxas e Prazos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Ajuda
            </h4>
            <ul className="space-y-2 text-sm text-cinza-leve/80">
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-azul-claro transition-colors"
                >
                  Sobre o Calça-me
                </Link>
              </li>
              <li>
                <Link
                  to="/medir-pe"
                  className="hover:text-azul-claro transition-colors text-azul-claro font-medium"
                >
                  Medir meu pé ✨
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-azul-claro transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-azul-claro transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cinza-leve/60">
          <p>© 2026 Calça-me. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">
              Termos
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

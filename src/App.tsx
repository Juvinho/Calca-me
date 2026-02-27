import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Explorar } from "./pages/Explorar";
import { Produto } from "./pages/Produto";
import { Vender } from "./pages/Vender";
import { MedirPe } from "./pages/MedirPe";
import { Carrinho } from "./pages/Carrinho";
import { Sobre } from "./pages/Sobre";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explorar" element={<Explorar />} />
          <Route path="sapato/:id" element={<Produto />} />
          <Route path="vender" element={<Vender />} />
          <Route path="medir-pe" element={<MedirPe />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

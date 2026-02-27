export interface Product {
  id: string;
  nome: string;
  marca: string;
  tamanho: number;
  preco: number;
  condicao: 'novo' | 'usado';
  urlImagem: string;
  vendedorId?: string;
}

export interface CartItem {
  productId: string;
  nome: string;
  preco: number;
  quantidade: number;
  urlImagem?: string;
}

export interface User { id: string; nome: string; email: string }

// produtos.js - Módulo de produtos

const { gerarId } = require('./utilidades');

let produtos = {};

const cadastrarProduto = (numero, tipo, descricao, tamanho) => {
  if (produtos[numero]) {
    return null; // Produto com número duplicado
  }

  const id = gerarId();
  const produto = { id, numero, tipo, descricao, tamanho };
  produtos[numero] = produto;
  return produto;
};

const listarProdutos = () => {
  return Object.values(produtos);
};

const obterProdutoPorNumero = numero => {
  return produtos[numero];
};

const atualizarProdutoPorNumero = (numero, novosDados) => {
  if (!produtos[numero]) {
    return false;
  }

  produtos[numero] = { ...produtos[numero], ...novosDados };
  return true;
};

const excluirProdutoPorNumero = numero => {
  if (!produtos[numero]) {
    return false;
  }

  delete produtos[numero];
  return true;
};

module.exports = {
  cadastrarProduto,
  listarProdutos,
  obterProdutoPorNumero,
  atualizarProdutoPorNumero,
  excluirProdutoPorNumero
};
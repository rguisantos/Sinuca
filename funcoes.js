// funcoes.js - Módulo de funções

const { gerarId } = require('./utilidades');
const { cadastrarCliente, listarClientes, obterClientePorId, atualizarClientePorId, excluirClientePorId } = require('./clientes');
const { cadastrarProduto, listarProdutos, obterProdutoPorNumero, atualizarProdutoPorNumero, excluirProdutoPorNumero } = require('./produtos');
const { cadastrarLocacao, listarLocacoes, obterLocacaoPorId, atualizarLocacaoPorId, excluirLocacaoPorId } = require('./locacoes');
const { adicionarCobranca, listarCobrancas, obterCobrancaPorId } = require('./cobrancas');

module.exports = {
  cadastrarCliente,
  listarClientes,
  obterClientePorId,
  atualizarClientePorId,
  excluirClientePorId,
  cadastrarProduto,
  listarProdutos,
  obterProdutoPorNumero,
  atualizarProdutoPorNumero,
  excluirProdutoPorNumero,
  cadastrarLocacao,
  listarLocacoes,
  obterLocacaoPorId,
  atualizarLocacaoPorId,
  excluirLocacaoPorId,
  adicionarCobranca,
  listarCobrancas,
  obterCobrancaPorId,
  gerarId,
};
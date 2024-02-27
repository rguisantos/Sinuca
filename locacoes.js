// locacoes.js - Módulo de locações

const { gerarId } = require('./utilidades');

let locacoes = {};

const cadastrarLocacao = (clienteId, produtoNumero, tipo, valorFicha, porcentagem) => {
  const id = gerarId();
  const locacao = { id, clienteId, produtoNumero, tipo, valorFicha, porcentagem, ativa: true };
  locacoes[id] = locacao;
  return locacao;
};

const listarLocacoes = () => {
  return Object.values(locacoes);
};

const obterLocacaoPorId = id => {
  return locacoes[id];
};

const atualizarLocacaoPorId = (id, novosDados) => {
  if (!locacoes[id]) {
    return false;
  }

  locacoes[id] = { ...locacoes[id], ...novosDados };
  return true;
};

const excluirLocacaoPorId = id => {
  if (!locacoes[id]) {
    return false;
  }

  delete locacoes[id];
  return true;
};

module.exports = {
  cadastrarLocacao,
  listarLocacoes,
  obterLocacaoPorId,
  atualizarLocacaoPorId,
  excluirLocacaoPorId
};
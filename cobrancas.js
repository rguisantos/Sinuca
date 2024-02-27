// cobrancas.js - Módulo de cobranças

const { gerarId } = require('./utilidades');
const { adicionarCobrancaAoHistorico, obterHistoricoCobrancasPorProduto } = require('./historicoCobrancas');

let cobrancas = {};

const adicionarCobranca = (cliente, locacao, produtoNumero, partidasJogadas, contadorAtual, descontos, descontodinheiro) => {
  const id = gerarId();
  const valorFicha = locacao.valorFicha;
  const valorBruto = partidasJogadas * valorFicha;
  const valorFinal = valorBruto - descontos - descontodinheiro;

  const saldoDevedorAtual = locacao.saldoDevedor || 0;
  const valorFinalComSaldo = valorFinal + saldoDevedorAtual;

  const cobranca = {
    id,
    cliente,
    locacao,
    produtoNumero,
    partidasJogadas,
    contadorAtual,
    valorBruto,
    valorFinal,
    descontos,
    descontodinheiro,
    saldoDevedorAtual,
    valorFinalComSaldo,
    dataHora: new Date().toLocaleString(),
  };

  cobrancas[id] = cobranca;
  adicionarCobrancaAoHistorico(produtoNumero, cobranca);

  // Atualiza o saldo devedor na locação
  locacao.saldoDevedor = saldoDevedorAtual;

  return cobranca;
};

const listarCobrancas = () => {
  return Object.values(cobrancas);
};

const obterCobrancaPorId = id => {
  return cobrancas[id];
};

module.exports = {
  adicionarCobranca,
  listarCobrancas,
  obterCobrancaPorId,
};
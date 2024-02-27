// historicoCobrancas.js - Módulo de histórico de cobranças

const historicoCobrancasPorProduto = {};

const obterDataHoraAtualFormatada = () => {
  const dataHoraAtual = new Date();
  const formato = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return dataHoraAtual.toLocaleDateString('pt-BR', formato);
};

const adicionarCobrancaAoHistorico = (produtoNumero, cobranca) => {
  if (!historicoCobrancasPorProduto[produtoNumero]) {
    historicoCobrancasPorProduto[produtoNumero] = [];
  }

  const dataHoraAtualFormatada = obterDataHoraAtualFormatada();
  const cobrancaComDataHora = {
    ...cobranca,
    dataHora: dataHoraAtualFormatada,
  };

  historicoCobrancasPorProduto[produtoNumero].push(cobrancaComDataHora);
};

const obterHistoricoCobrancasPorProduto = produtoNumero => {
  return historicoCobrancasPorProduto[produtoNumero] || [];
};

module.exports = {
  adicionarCobrancaAoHistorico,
  obterHistoricoCobrancasPorProduto,
};

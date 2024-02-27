// app.js - Arquivo principal

const {
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
  } = require('./clientes');
  
  const { cadastrarLocacao, listarLocacoes, obterLocacaoPorId, atualizarLocacaoPorId, excluirLocacaoPorId } = require('./locacoes');
  
  const { adicionarCobranca, listarCobrancas, obterCobrancaPorId } = require('./cobrancas');
  
  // Exemplos de utilização
  const cliente1 = cadastrarCliente("João Silva", "123456789", "987654321", "999999999", "Rua A, 123", "Cidade A", "Estado A");
  const cliente2 = cadastrarCliente("Maria Oliveira", "987654321", "123456789", "888888888", "Rua B, 456", "Cidade B", "Estado B");
  
  cadastrarProduto("1", "Tipo A", "Descrição A", "Tamanho A");
  cadastrarProduto("2", "Tipo B", "Descrição B", "Tamanho B");
  
  const locacao1 = cadastrarLocacao(cliente1.id, "1", "mensal", 100, 0.1);
  const locacao2 = cadastrarLocacao(cliente2.id, "2", "porcentagem", 0, 0.15);
  
  adicionarCobranca(cliente1, locacao1, "1", 10, 0, 0, 0, 0);
  adicionarCobranca(cliente2, locacao2, "2", 15, 0, 0, 2, 50);
  
  const sucessoAtualizacao = atualizarClientePorId(cliente1.id, { telefone: "777777777" });
  console.log("Atualização bem-sucedida?", sucessoAtualizacao);
  
  console.log("Lista de clientes:", listarClientes());
  console.log("Lista de produtos:", listarProdutos());
  console.log("Lista de locações:", listarLocacoes());
  console.log("Lista de cobranças:", listarCobrancas());
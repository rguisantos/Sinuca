// clientes.js - Módulo de clientes

const { gerarId } = require('./utilidades');

let clientes = {};

const cadastrarCliente = (nome, cpf, rg, telefone, endereco, cidade, estado) => {
  const id = gerarId();
  const cliente = { id, nome, cpf, rg, telefone, endereco, cidade, estado };
  clientes[id] = cliente;
  return cliente;
};

const listarClientes = () => {
  return Object.values(clientes);
};

const obterClientePorId = id => {
  return clientes[id];
};

const atualizarClientePorId = (id, novosDados) => {
  if (!clientes[id]) {
    return false;
  }

  clientes[id] = { ...clientes[id], ...novosDados };
  return true;
};

const excluirClientePorId = id => {
  if (!clientes[id]) {
    return false;
  }

  delete clientes[id];
  return true;
};

module.exports = {
  cadastrarCliente,
  listarClientes,
  obterClientePorId,
  atualizarClientePorId,
  excluirClientePorId
};
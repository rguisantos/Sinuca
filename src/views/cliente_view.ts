import Cliente from '../models/cliente';

export default {
  render(cliente: Cliente) {
    return `${cliente.nome}`;
  },

  renderMany(clientes: Cliente[]) {
    return clientes.map(cliente => this.render(cliente));
  }
}
import Produto from '../models/produto';

export default {
  render(produto: Produto) {
    return `${produto.descricao}`;
  },

  renderMany(produtos: Produto[]) {
    return produtos.map(produto => this.render(produto));
  }
}
export class Produto {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }

  toString() {
    return `${this.nome} - R$ ${this.preco}`
  }
}
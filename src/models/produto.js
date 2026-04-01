export class Produto {
  constructor(nome, preco, link, origem) {
    Object.assign(this, { nome, preco, link, origem })
  }

  //apenas para print
  toString() {
    return `Nome: ${this.nome} \nPreço: R$ ${this.preco} \nLink: ${this.link} \nOrigem: ${this.origem} \n\n`
  }
}
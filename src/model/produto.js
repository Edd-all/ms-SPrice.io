export class Produto {
  constructor(nome, preco, link) {
    this.nome = nome
    this.preco = preco
    this.link = link
  }

  //apenas para print
  toString() {
    return `Nome: ${this.nome} \nPreço: R$ ${this.preco} \nLink: ${this.link} \n\n`
  }
}
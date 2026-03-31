export class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome
    this.email = email
    this.senha = senha
  }

  //apenas para print
  toString() {
    return `Nome: ${this.nome} \nEmail: ${this.email} \nSenha: ${this.senha} \n\n`
  }
}
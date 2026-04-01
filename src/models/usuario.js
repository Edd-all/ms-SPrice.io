export class Usuario {
  constructor(nome, email, senha) {
    Object.assign(this, { nome, email, senha })
  }

  //apenas para print
  toString() {
    return `Nome: ${this.nome} \nEmail: ${this.email} \nSenha: ${this.senha} \n\n`
  }
}
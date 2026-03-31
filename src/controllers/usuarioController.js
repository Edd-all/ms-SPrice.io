
const usuarios = [
  { email: 'teste@email.com', senha: '123456' }
]

export async function login(req, res) {
  const { email, senha } = req.body
  const usuario = usuarios.find(u => u.email === email && u.senha === senha)

  if (!usuario) {
    return res.status(401).json({ erro: 'Email ou senha inválidos.' })
  }

  res.json({ token: 'token-mock-valido', email })
}

# 🛒 MS-Sprice.io

**MS-Sprice.io** é um microsserviço responsável pela coleta de informações de produtos em lojas online.

Seu principal objetivo é **buscar, filtrar e consolidar produtos** com base em um preço máximo informado pelo usuário. O projeto foi desenvolvido com foco em **escalabilidade**, permitindo a adição de novos mapeamentos de lojas de forma simples e organizada.

---

## 🚀 Tecnologias

- **Express.js**
- **Puppeteer**

---

## ▶️ Como executar

### Iniciar o projeto

```bash
npm start
```

### Executar em modo de depuração (VS Code)

Utilize o terminal de Debug do VS Code e execute:

```bash
node src/index.js
```

---

## 📡 API

### Buscar produtos

**Endpoint**

```http
GET /produtos
```

### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `item` | `string` | Produto que será pesquisado |
| `precoMax` | `number` | Preço máximo permitido |

---

## 📌 Exemplos de requisição

### Via navegador

```text
http://localhost:3000/produtos?item=carro&precoMax=500
```

### Via cURL (CMD)

```bash
curl "http://localhost:3000/produtos?item=notebook&precoMax=100"
```

---

## 📈 Objetivos futuros

- Adicionar suporte a novas lojas online.
- Melhorar a performance da coleta de dados.
- Criar arquitetura de plugins para novos scrapers.
- Implementar cache para reduzir consultas repetidas.
- Disponibilizar documentação completa da API.


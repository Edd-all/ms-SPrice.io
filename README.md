O MS-Sprice.io é um micro serviço para coleta de informações de produtos de várias lojas online que tem o objetivo de filtrar e compilar produtos pelo preço desejado


Tecnologias: Express, puppeteer

rodar projeto: npm start
rodar com debug(pelo terminal de debug do vscode): node src/index.js


Requisição por link: http://localhost:3000/produtos?item=carro&precoMax=50
Requisição por curl no cmd: curl "http://localhost:3000/produtos?item=notebook&precoMax=100"
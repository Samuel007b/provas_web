// ============================================================================
// PROVA — WEN / TÉCNICO (03)  — ARQUIVO DO ALUNO
// ============================================================================
// Como fazer a prova:
//   1. Salve uma cópia deste arquivo com seu NOME COMPLETO.
//   2. Responda as questões substituindo os `return` ou implementando a lógica.
// ============================================================================

export function nomeCompleto() {
  return "Seu Nome Completo";
}

// (0,5 PONTO) Questão 1
// Qual a finalidade principal dos verbos HTTP GET e POST em uma API REST?
//   1) GET atualiza dados, POST busca dados.
//   2) GET altera dados, POST cria dados.
//   3) GET busca dados, POST cria dados.
//   4) GET deleta dados, POST busca dados.
//   5) GET busca dados, POST deleta dados.
export function questao1() {
  return 3;
}

// (0,5 PONTO) Questão 2
// Em uma API REST, o que representa corretamente os status codes 201 e 404?
//   1) 201: Criado, 404: Não encontrado.
//   2) 201: OK, 404: Erro interno.
//   3) 201: Não autorizado, 404: Criado.
//   4) 201: Bad Request, 404: Criado.
//   5) 201: Criado, 404: Bad Request.
export function questao2() {
  return 1;
}

// (0,5 PONTO) Questão 3
// Qual é o principal papel do Node.js e do framework Express no desenvolvimento back-end?
//   1) Node.js é exclusivo para front-end, e Express gerencia dependências.
//   2) Express é a linguagem de programação e Node.js é a biblioteca de estilos.
//   3) Node.js é um banco de dados e Express cria a interface visual.
//   4) Ambos servem apenas para conectar o projeto ao Prisma ORM.
//   5) Node.js permite executar JS no servidor e Express facilita a criação de rotas e servidores web.
export function questao3() {
  return 5;
}

// (0,5 PONTO) Questão 4
// Segundo as convenções REST, qual seria a rota e verbo mais adequados para atualizar um livro específico cujo ID é 15?
//   1) GET /livros/15/update
//   2) POST /livro/atualizar/15
//   3) POST /livros/15
//   4) PUT /livros/15 (ou PATCH)
//   5) UPDATE /livros/15
export function questao4() {
  return 4;
}

// (0,5 PONTO) Questão 5
// No arquivo schema.prisma, para que serve o decorator @default(autoincrement()) em um campo id?
//   1) Para indicar que o valor inicial sempre será zero.
//   2) Para gerar um UUID aleatório como chave primária.
//   3) Para criar automaticamente uma relação 1 para N.
//   4) Para que o banco gere automaticamente um número sequencial único para o campo ao inserir um registro.
//   5) Para impedir que o campo seja preenchido na criação do registro.
export function questao5() {
  return 4;
}

// (0,5 PONTO) Questão 6
// Qual é a função das migrations (como o comando `npx prisma migrate dev`)?
//   1) Criar rotas no Express automaticamente baseadas nos models.
//   2) Sincronizar as alterações feitas no schema.prisma com a estrutura real das tabelas no banco de dados.
//   3) Copiar os dados de produção para o ambiente de desenvolvimento.
//   4) Atualizar as dependências do `package.json`.
//   5) Traduzir o código JavaScript para SQL automaticamente em tempo de execução.
export function questao6() {
  return 2;
}

// (0,5 PONTO) Questão 7
// Onde geralmente os dados enviados por um cliente em uma requisição POST (como os dados de um novo livro em formato JSON) são acessados no Express?
//   1) No `req.body`.
//   2) No `req.params`.
//   3) No `res.body`.
//   4) No `req.headers`.
//   5) No `req.query`.
export function questao7() {
  return 1;
}

// (0,5 PONTO) Questão 8
// Por que utilizamos o padrão de separação de responsabilidades entre "Routes" e "Controllers"?
//   1) Para que o banco de dados funcione mais rápido.
//   2) Para esconder o código do lado do cliente (front-end).
//   3) Para dispensar a necessidade de usar o Prisma Client.
//   4) Para separar a definição das URLs HTTP (Routes) da lógica de negócios e manipulação de dados (Controllers).
//   5) Porque o Express não permite escrever tudo no mesmo arquivo.
export function questao8() {
  return 4;
}

// (0,5 PONTO) Questão 9
// No ciclo de vida de uma requisição no Express, para que serve a função `next()` dentro de um middleware?
//   1) Para gerar um erro 500 automaticamente.
//   2) Para enviar a resposta final ao cliente, encerrando a requisição.
//   3) Para reiniciar o servidor Node.js.
//   4) Para pular a requisição atual e ir para a próxima da fila.
//   5) Para passar o controle para o próximo middleware ou rota da cadeia, caso contrário a requisição ficará travada.
export function questao9() {
  return 5;
}

// (0,5 PONTO) Questão 10
// Como o Prisma Client permite buscar dados de tabelas relacionadas (ex: buscar um Autor e já trazer todos os seus Livros juntos na mesma consulta)?
//   1) Usando a propriedade `populate`.
//   2) Usando a propriedade `select`.
//   3) Usando a propriedade `include`.
//   4) Executando múltiplas consultas separadas obrigatoriamente.
//   5) Usando a propriedade `join`.
export function questao10() {
  return 3;
}


// ============================================================================
// QUESTÕES ABERTAS (2,0 PONTOS CADA)
// ============================================================================

// (2,0 PONTOS) Questão 11 — configurarRotaStatus
// Cenário: Você precisa configurar uma rota GET simples de health-check no Express.
// O objeto app é sua aplicação Express (app = express()).
//
// Regras de negócio:
// - Crie uma rota GET no caminho '/status'.
// - A rota deve responder enviando a string "ok" (use res.send).
//
// Assinatura:
// function configurarRotaStatus(app)
export function configurarRotaStatus(app) {
  app.get('/status', (req, res) => {
    res.send("ok");
  });
}

// (2,0 PONTOS) Questão 12 — listarAutoresController
// Cenário: Implementar um controller Express muito simples para listar autores.
// 
// Regras de negócio:
// - Busque todos os autores usando: await prisma.autor.findMany()
// - Retorne status 200 e a lista de autores no formato JSON.
//
// Assinatura:
// async function listarAutoresController(req, res, prisma)
export async function listarAutoresController(req, res, prisma) {
  const autores = await prisma.autor.findMany();
  return res.status(200).json(autores);
}

// (2,0 PONTOS) Questão 13 — criarAutorControllerSimples
// Cenário: Implementar o controller para adicionar um novo Autor de forma simplificada.
//
// Regras de negócio:
// - Verifique se existe a propriedade 'nome' no corpo da requisição (req.body).
// - Se o 'nome' não existir, retorne status 400 e JSON { erro: "Falta nome" }.
// - Se o 'nome' existir, crie o autor no banco:
//   await prisma.autor.create({ data: { nome } })
// - Retorne status 201 e envie no JSON o objeto do autor recém criado retornado pelo prisma.
//
// Assinatura:
// async function criarAutorControllerSimples(req, res, prisma)
export async function criarAutorControllerSimples(req, res, prisma) {
  const { nome } = req.body;
  if(!nome){
    return res.status(400).json({ erro: "Falta nome" });
  }
  const autor = await prisma.autor.create({ data: { nome } });
  return res.status(201).json(autor);
}

// (2,0 PONTOS) Questão 14 — middlewareDataRequisicao
// Cenário: Implementar um middleware simples de registro temporal.
//
// Regras de negócio:
// - O middleware deve adicionar a propriedade 'dataRequisicao' no objeto da requisição (req) com o valor 'new Date()'.
// - Em seguida, deve chamar a função next() para dar continuidade à requisição.
// - Não modifique res e não retorne nenhum erro.
//
// Assinatura:
// function middlewareDataRequisicao(req, res, next)
export function middlewareDataRequisicao(req, res, next) {
  req.dataRequisicao = new Date();
  next();
}

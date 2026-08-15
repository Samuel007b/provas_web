// ============================================================================
// PROVA — WEN / TÉCNICO (04)  — ARQUIVO DO ALUNO
// ============================================================================
// Como fazer a prova:
//   1. Salve uma cópia deste arquivo com seu NOME COMPLETO.
//   2. Responda as questões substituindo os `return` ou implementando a lógica.
// ============================================================================

export function nomeCompleto() {
  return "Seu Nome Completo";
}

// (0,5 PONTO) Questão 1
// No contexto de uma API REST, qual é a principal diferença entre os verbos HTTP
// GET e POST?
//   1) GET cria dados, POST busca dados.
//   2) GET altera dados, POST envia dados apenas para leitura.
//   3) GET busca dados, POST cria dados.
//   4) GET deleta dados, POST atualiza dados.
//   5) GET envia dados ao servidor, POST devolve dados ao cliente.
export function questao1() {
  return 3;
}

// (0,5 PONTO) Questão 2
// Em uma API, o que os status codes 201 e 404 normalmente significam?
//   1) 201: Criado, 404: Não encontrado.
//   2) 201: Requisição OK, 404: Erro interno.
//   3) 201: Não autorizado, 404: Não encontrado.
//   4) 201: Bad Request, 404: Criado.
//   5) 201: Criado, 404: Bad Request.
export function questao2() {
  return 1;
}

// (0,5 PONTO) Questão 3
// Qual é o papel do Node.js e do Express ao construir uma API em JavaScript?
//   1) Node.js é um banco de dados e Express gerencia a interface do usuário.
//   2) Node.js roda JavaScript no servidor e Express facilita rotas e servidores HTTP.
//   3) Node.js cria páginas HTML e Express formata JSON.
//   4) Node.js é usado só no front-end e Express só no back-end.
//   5) Node.js e Express são usados para escrever SQL diretamente.
export function questao3() {
  return 2;
}

// (0,5 PONTO) Questão 4
// Em uma API REST, qual seria a rota e verbo mais apropriados para atualizar
// o registro de um aluno com ID 15?
//   1) POST /alunos/15
//   2) GET /alunos/15/update
//   3) PUT /alunos/15
//   4) UPDATE /alunos/15
//   5) POST /alunos/atualizar/15
export function questao4() {
  return 3;
}

// (0,5 PONTO) Questão 5
// No schema do Prisma, para que serve o decorator @default(autoincrement())
// em um campo `id`?
//   1) Para gerar um UUID automático para o campo.
//   2) Para impedir que o campo seja inserido manualmente.
//   3) Para criar uma relação 1:N automaticamente.
//   4) Para fazer o banco atribuir um número sequencial único ao registro.
//   5) Para definir o campo como texto único.
export function questao5() {
  return 4;
}

// (0,5 PONTO) Questão 6
// Qual é a função das migrations do Prisma (como `npx prisma migrate dev`)?
//   1) Atualizar dependências do projeto.
//   2) Sincronizar o schema.prisma com as tabelas reais do banco.
//   3) Criar rotas automaticamente no Express.
//   4) Converter JavaScript em SQL.
//   5) Gerar os arquivos de documentação da API.
export function questao6() {
  return 2;
}

// (0,5 PONTO) Questão 7
// Onde os dados enviados em uma requisição POST em uma rota Express são
// normalmente acessados?
//   1) No `req.body`.
//   2) No `req.params`.
//   3) No `req.query`.
//   4) No `req.headers`.
//   5) No `res.body`.
export function questao7() {
  return 1;
}

// (0,5 PONTO) Questão 8
// Por que é útil separar as responsabilidades entre Routes e Controllers?
//   1) Para o banco de dados ficar mais rápido.
//   2) Para o Express não ter que lidar com componentes do front-end.
//   3) Para separar a definição de URLs da lógica de negócio.
//   4) Para evitar o uso de Prisma no projeto.
//   5) Para que todas as rotas usem o mesmo middleware.
export function questao8() {
  return 3;
}

// (0,5 PONTO) Questão 9
// Qual é a função de `next()` dentro de um middleware Express?
//   1) Enviar a resposta final ao cliente.
//   2) Interromper a requisição imediatamente.
//   3) Passar o controle para o próximo middleware ou rota.
//   4) Reiniciar o servidor.
//   5) Criar um novo objeto de requisição.
export function questao9() {
  return 3;
}

// (0,5 PONTO) Questão 10
// Como o Prisma Client traz dados relacionados em uma mesma consulta?
//   1) Usando `include`.
//   2) Usando `join`.
//   3) Usando `populate`.
//   4) Usando `select` apenas.
//   5) Fazendo duas consultas separadas sempre.
export function questao10() {
  return 1;
}


// ============================================================================
// QUESTÕES ABERTAS (2,0 PONTOS CADA)
// ============================================================================

// (2,0 PONTOS) Questão 11 — configurarRotaPing
// Cenário: Você está configurando uma rota de verificação simples no Express.
// O objeto `app` é a aplicação Express (`app = express()`).
// Regras de negócio:
// - Crie uma rota GET no caminho `/ping`.
// - A rota deve responder enviando a string `pong` usando `res.send()`.
// Assinatura:
// function configurarRotaPing(app)
export function configurarRotaPing(app) {
  app.get('/ping', (req, res) => {
    res.send("pong");
  });
}

// (2,0 PONTOS) Questão 12 — buscarAlunoController
// Cenário: Implementar um controller para buscar um aluno por ID.
// Regras de negócio:
// - Leia `id` de `req.params`.
// - Busque o aluno com `await prisma.aluno.findUnique({ where: { id: Number(id) } })`.
// - Se o aluno não existir, retorne status 404 e JSON { erro: "Aluno não encontrado" }.
// - Se existir, retorne status 200 e JSON com o aluno.
// Assinatura:
// async function buscarAlunoController(req, res, prisma)
export async function buscarAlunoController(req, res, prisma) {
  const { id } = req.params;
  const aluno = await prisma.aluno.findUnique({ where: { id: Number(id) } });
  if (!aluno) {
    return res.status(404).json({ erro: "Aluno não encontrado" });
  }
  return res.status(200).json(aluno);
}

// (2,0 PONTOS) Questão 13 — criarAlunoControllerSimples
// Cenário: Implementar um controller para criar um novo aluno de forma simplificada.
// Regras de negócio:
// - Leia `nome` de `req.body`.
// - Se não houver `nome`, retorne status 400 e JSON { erro: "Falta nome" }.
// - Se houver, crie o aluno no banco com `await prisma.aluno.create({ data: { nome } })`.
// - Retorne status 201 e JSON com o aluno criado.
// Assinatura:
// async function criarAlunoControllerSimples(req, res, prisma)
export async function criarAlunoControllerSimples(req, res, prisma) {
  const { nome } = req.body;
  if (!nome) {
    return res.status(400).json({ erro: "Falta nome" });
  }
  const aluno = await prisma.aluno.create({ data: { nome } });
  return res.status(201).json(aluno);
}

// (2,0 PONTOS) Questão 14 — middlewareRegistroSimples
// Cenário: Implementar um middleware simples que registra o momento da requisição.
// Regras de negócio:
// - O middleware deve adicionar `req.horario = new Date()`.
// - Em seguida, chamar `next()` para continuar o fluxo.
// - Não modifique `res` nem gere erro.
// Assinatura:
// function middlewareRegistroSimples(req, res, next)
export function middlewareRegistroSimples(req, res, next) {
  req.horario = new Date();
  next();
}

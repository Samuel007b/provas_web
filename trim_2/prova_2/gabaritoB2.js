// PROVA 05 — Caderno B02 / Prova B — Arquivo do aluno
// Data: 10/09/2026 · 26 questões · 0,5 ponto cada · Nota máxima: 13
// Salve uma cópia com seu nome completo, responda nela e entregue o arquivo.
// Em cada questão, retorne o número inteiro (1 a 5) da alternativa escolhida.

// (0 PONTOS) Identificação — nomeCompleto
export function nomeCompleto() {
  return "Seu Nome Completo";
}

// (0,5 PONTO) Questão 1
// Na atualização do perfil, req.params.id é string e req.aluno.id é número. O que evita uma comparação incorreta?
//   1) Converter params.id com Number
//   2) Comparar com JWT_SECRET
//   3) Usar CORS
//   4) Transformar role em senha
//   5) Retornar 204
export function questao1() {
  return 1;
}

// (0,5 PONTO) Questão 2
// Depois de criar tratarErro, onde ele deve ser registrado em relação às rotas da aplicação?
//   1) Antes de express.json
//   2) Depois de todas as rotas
//   3) Dentro de cada controller
//   4) Antes do cors
//   5) No arquivo .env
export function questao2() {
  return 2;
}

// (0,5 PONTO) Questão 3
// Durante auditoria, qual situação indica vazamento de informação sensível?
//   1) senhaHash aparecer em res.json
//   2) Erro usar { erro: mensagem }
//   3) CORS vir antes das rotas
//   4) Token expirar
//   5) README ter stack
export function questao3() {
  return 1;
}

// (0,5 PONTO) Questão 4
// Duas pessoas usam a mesma senha e ainda assim os hashes podem ser diferentes. Qual mecanismo explica isso?
//   1) CORS
//   2) Salt aleatório
//   3) HTTP 204
//   4) Connection pooler
//   5) JSON
export function questao4() {
  return 2;
}

// (0,5 PONTO) Questão 5
// Depois de email e senha válidos, qual resposta o controller de login deve devolver sem expor dados internos do aluno?
//   1) Somente o token
//   2) senhaHash e token
//   3) DATABASE_URL
//   4) O objeto Prisma completo
//   5) O segredo do JWT
export function questao5() {
  return 1;
}

// (0,5 PONTO) Questão 6
// Uma API roda localmente e na Vercel com valores diferentes de porta e banco. Por que PORT e DATABASE_URL não devem ficar escritos diretamente no código?
//   1) Para esconder o JavaScript
//   2) Para separar configuração do código por ambiente
//   3) Para dispensar o Prisma
//   4) Para evitar rotas
//   5) Para substituir o Git
export function questao6() {
  return 2;
}

// (0,5 PONTO) Questão 7
// Ao escrever o README público da API, qual informação não pode ser incluída?
//   1) O JWT_SECRET real
//   2) A stack usada
//   3) Link para docs/API.md
//   4) Como criar .env
//   5) URL de produção
export function questao7() {
  return 1;
}

// (0,5 PONTO) Questão 8
// jwt.verify recebe um token adulterado ou expirado. Qual comportamento o código deve prever?
//   1) A função lança erro
//   2) A função cria outro token
//   3) O Prisma apaga a conta
//   4) O CORS libera a origem
//   5) O status vira 201 automaticamente
export function questao8() {
  return 1;
}

// (0,5 PONTO) Questão 9
// Qual combinação deve proteger DELETE /alunos/:id para que apenas ADMIN consiga executar a ação?
//   1) autenticar, autorizar('ADMIN'), deletarAluno
//   2) autorizar('ADMIN'), autenticar, deletarAluno
//   3) cors, deletarAluno
//   4) login, register
//   5) dotenv, Prisma
export function questao9() {
  return 1;
}

// (0,5 PONTO) Questão 10
// Durante um teste, uma requisição funciona no Bruno mas falha no navegador com mensagem de política de origem. Por que o resultado do Bruno não demonstra que CORS está configurado?
//   1) Bruno não é navegador e ignora CORS
//   2) Bruno remove o banco
//   3) Bruno sempre usa JWT
//   4) Bruno roda na Vercel
//   5) Bruno não envia HTTP
export function questao10() {
  return 1;
}

// (0,5 PONTO) Questão 11
// Em qual situação o material permite buscar senhaHash internamente?
//   1) Na consulta de login para comparar a senha
//   2) Em qualquer GET /alunos
//   3) Na resposta de erro
//   4) No README
//   5) No CORS
export function questao11() {
  return 1;
}

// (0,5 PONTO) Questão 12
// Um middleware Express deve ser reconhecido como middleware de erro global. Qual assinatura é a correta?
//   1) (req, res)
//   2) (req, res, next)
//   3) (err, req, res, next)
//   4) (erro, next)
//   5) (app, erro, res)
export function questao12() {
  return 3;
}

// (0,5 PONTO) Questão 13
// Qual ordem geral de middlewares corresponde à auditoria final do projeto?
//   1) cors → express.json → logger → rotas → tratarErro
//   2) rotas → tratarErro → cors → Prisma
//   3) tratarErro → rotas → dotenv
//   4) logger → README → cors
//   5) Prisma → cliente → CORS
export function questao13() {
  return 1;
}

// (0,5 PONTO) Questão 14
// Por que o fluxo com JWT é chamado de stateless?
//   1) O servidor guarda uma sessão por token
//   2) Cada token traz dados assinados e o servidor não guarda sessão
//   3) O token não possui assinatura
//   4) O banco não existe
//   5) O front-end não recebe resposta
export function questao14() {
  return 2;
}

// (0,5 PONTO) Questão 15
// No deploy, JWT_SECRET não pode vir do .env local porque ele não é commitado. Como a Vercel fornece esse valor ao código?
//   1) Copiando do README
//   2) Injetando variável de ambiente em process.env
//   3) Incluindo no JWT payload
//   4) Gerando no navegador
//   5) Salvando no Prisma schema
export function questao15() {
  return 2;
}

// (0,5 PONTO) Questão 16
// A função autorizar(...rolesPermitidos) é chamada factory porque:
//   1) Recebe papéis e devolve um middleware
//   2) Cria banco Neon
//   3) Assina JWTs
//   4) Carrega .env
//   5) Faz deploy
export function questao16() {
  return 1;
}

// (0,5 PONTO) Questão 17
// Qual arquivo local pode conter valores reais como DATABASE_URL e JWT_SECRET e não deve ser enviado ao Git?
//   1) README.md
//   2) .env
//   3) vercel.json
//   4) package.json
//   5) docs/API.md
export function questao17() {
  return 2;
}

// (0,5 PONTO) Questão 18
// Qual ação demonstra que o backend foi testado ponta a ponta antes da entrega?
//   1) Rodar a coleção Bruno completa em produção
//   2) Apenas abrir o README
//   3) Apagar .gitignore
//   4) Trocar todos os status por 200
//   5) Colar um token fixo no código
export function questao18() {
  return 1;
}

// (0,5 PONTO) Questão 19
// No middleware de autenticação, verificarToken pode falhar. Para transformar essa falha em resposta 401 em vez de 500, o que é necessário?
//   1) Envolver a verificação em try/catch
//   2) Aumentar salt rounds
//   3) Retornar 204
//   4) Mover para README
//   5) Remover o header
export function questao19() {
  return 1;
}

// (0,5 PONTO) Questão 20
// Em produção, a equipe quer permitir chamadas apenas do domínio oficial do front-end. Qual configuração expressa essa intenção?
//   1) cors({ origin: 'https://front.exemplo.com' })
//   2) cors({ senha: 'segredo' })
//   3) cors({ database: 'neon' })
//   4) cors({ role: 'ADMIN' })
//   5) cors({ token: 'jwt' })
export function questao20() {
  return 1;
}

// (0,5 PONTO) Questão 21
// Uma mensagem existe e quem pediu sua exclusão possui token válido. Qual condição permite a exclusão segundo a regra estudada?
//   1) Ser autor da mensagem ou ter role ADMIN
//   2) Ter qualquer token
//   3) Ter email diferente
//   4) Usar Bruno
//   5) Ter status 200
export function questao21() {
  return 1;
}

// (0,5 PONTO) Questão 22
// A coleção Bruno deve testar local e produção sem editar cada requisição. Qual recurso permite trocar a base URL?
//   1) Environments com {{baseUrl}}
//   2) Salt rounds
//   3) CORS origin
//   4) Prisma migrate
//   5) Git tags
export function questao22() {
  return 1;
}

// (0,5 PONTO) Questão 23
// Qual afirmação descreve corretamente a aplicação de autenticar no projeto?
//   1) Ele é aplicado rota a rota nas operações protegidas
//   2) Ele substitui o router
//   3) Ele vai no .env
//   4) Ele só roda no Bruno
//   5) Ele é igual ao cors
export function questao23() {
  return 1;
}

// (0,5 PONTO) Questão 24
// No bcrypt, aumentar salt rounds altera principalmente qual aspecto?
//   1) A força e o custo de gerar o hash
//   2) A porta da API
//   3) O método HTTP
//   4) A origem do navegador
//   5) O status do login
export function questao24() {
  return 1;
}

// (0,5 PONTO) Questão 25
// Qual verificação simples ajuda a confirmar que o .env não será enviado ao repositório?
//   1) Checar se .env está no .gitignore e não aparece no git status
//   2) Colar o segredo no README
//   3) Desligar a Vercel
//   4) Salvar no payload
//   5) Usar GET
export function questao25() {
  return 1;
}

// (0,5 PONTO) Questão 26
// Em POST /auth/register, qual dado chega em texto puro do cliente para que o servidor aplique hash antes de salvar?
//   1) senha
//   2) senhaHash já pronto
//   3) JWT_SECRET
//   4) DATABASE_URL
//   5) token expirado
export function questao26() {
  return 1;
}

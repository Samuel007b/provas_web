// Regras gerais:
//   - Cada questão é uma função exportada com `export function ...`
//     (ou `export async function ...` quando indicado).
//   - As funções devem RETORNAR o valor com `return` — não basta `console.log`.
//   - Não mude os nomes das funções nem a ordem dos parâmetros.

// (0 PONTOS) Questão 1 — nomeCompleto
// Retorna uma string com o NOME COMPLETO do aluno. Esse valor é usado no
// relatório final (relatorio.md) para identificar a quem pertence cada
// resultado. No gabarito, retornamos um rótulo fixo.
export function nomeCompleto() {
  return "Ryanderson Henzyo Souza e Moura\nSamuel Miranda de Carvalho\nSara Augusta de Carvalho Silva"
}

// (0,5 PONTOS) Questão 2 — classificarIdade
// Recebe um número (idade) e retorna uma string:
//   - "criança"      se idade < 12
//   - "adolescente"  se idade >= 12 e idade <= 17
//   - "adulto"       se idade >= 18
export function classificarIdade(idade) {
  if(idade>=18){
    return "adulto"
  }
  else if(idade>=12){
    return "adolescente"
  }
  else{
    return "criança"
  }
}

// (1 PONTO) Questão 3 — somarPares
// Recebe um array de números e retorna a soma apenas dos números pares.
// Exemplo: somarPares([1, 2, 3, 4, 5, 6]) → 12  (2 + 4 + 6)
export function somarPares(numeros) {
  let soma = 0
  for(numero of numeros){
    if(numero % 2 === 0){
      soma += numero
    }
  }
  return soma
}

// (1 PONTO) Questão 4 — maiorNumero
// Recebe um array de números e retorna o MAIOR deles.
// Se o array estiver vazio, retorna `null`.
// Restrição: NÃO use Math.max — resolva com laço e comparação.
// Exemplo: maiorNumero([3, 1, 7, 2, 5]) → 7
//          maiorNumero([-10, -3, -50]) → -3
//          maiorNumero([]) → null
export function maiorNumero(numeros) {
  if(numeros.lenght === 0){
    return null
  }
  else{
    let maior = numeros[0]
    for(numero of numeros){
      if(numero > maior){
        maior = numero
      }
    }
    return maior
  }
}

// (1 PONTO) Questão 5 — descreverTipos
// Recebe um array com valores de QUALQUER tipo e retorna um OBJETO contando
// quantos valores existem de cada tipo, usando `typeof`.
// As chaves do objeto são as strings retornadas por `typeof` (string, number,
// boolean, object, undefined). Tipos que NÃO aparecem no array NÃO devem
// estar no objeto retornado.
// Exemplo: descreverTipos(['oi', 1, true, 2, null, undefined])
//          → { string: 1, number: 2, boolean: 1, object: 1, undefined: 1 }
// (Lembre: `typeof null` é 'object' — isso é uma peculiaridade do JavaScript.)
export function descreverTipos(valores) {
  let strings = 0
  let numbers = 0
  let booleans = 0
  let objects = 0
  let undefineds = 0
  valores.forEach((valor) => {
    if((typeof valor) === string){
      strings++
    }
    else if((typeof valor) === number){
      numbers++
    }
    else if((typeof valor) === boolean){
      booleans++
    }
    else if((typeof valor) === object){
      objects++
    }
    else if(typeof valor === undefined){
      undefineds++
    }
  })
  let texto = "{"
  if(strings>0){
    texto += `string: ${strings},`
  }
  if(numbers>0){
    texto += `number: ${numbers},`
  }
  if(booleans>0){
    texto += `boolean: ${booleans},`
  }
  if(objects>0){
    texto += `object: ${objects},`
  }
  if(undefineds>0){
    texto += `undefined: ${undefineds},`
  }
  texto.slice()
  texto += "}"
  return JSON.parse(texto)
}

// (1 PONTO) Questão 6 — extrairNomes
// Recebe um array de objetos com { nome, nota } e retorna um array contendo
// apenas os nomes (strings).
export function extrairNomes(alunos) {
  return alunos.map((aluno) => aluno.nome)
}

// (1 PONTO)  Questão 7 — nomesDosAprovados
// Recebe um array de { nome, nota } e retorna um array com APENAS os nomes
// dos alunos aprovados (nota >= 60).
// Dica: você precisa combinar DOIS métodos de array — primeiro filtrar,
// depois transformar. Não use laço.
// Exemplo:
//   nomesDosAprovados([
//     { nome: 'Ana', nota: 85 },
//     { nome: 'Leo', nota: 30 },
//     { nome: 'Bia', nota: 70 }
//   ]) → ['Ana', 'Bia']
export function nomesDosAprovados(alunos) {
  const aprovados = alunos.filter((aluno) => aluno.nota>=60)
  return aprovados.map((aprovado) => aprovado.nome)
}

// (1 PONTO)  Questão 8 — mediaDosAprovados
// Recebe um array de { nome, nota } e retorna a média das notas APENAS dos
// alunos aprovados (nota >= 60). Se nenhum aluno foi aprovado, retorna 0.
// Dica: combine `filter` + `map` para isolar as notas dos aprovados, depois
// reaproveite a lógica de `calcularMedia` (ou chame a própria função).
// Exemplo:
//   mediaDosAprovados([
//     { nome: 'Ana', nota: 80 },
//     { nome: 'Leo', nota: 30 },
//     { nome: 'Bia', nota: 60 }
//   ]) → 70   (média de 80 e 60)
export function mediaDosAprovados(alunos) {
  const aprovados = alunos.filter((aluno) => aluno.nota>=60)
  if(aprovados.lenght === 0){
    return 0
  }
  else{
    let soma = 0
    aprovados.map((aprovado) => soma += aprovado.nota)
    return soma / aprovados.lenght
  }
}

// (0,5 PONTOS) Questão 9 — jsonParaObjeto
// Recebe um texto em formato JSON e retorna o objeto JavaScript correspondente.
// Exemplo: jsonParaObjeto('{"nome":"Maria"}') → { nome: 'Maria' }
export function jsonParaObjeto(texto) {
  return JSON.parse(texto)
}

// (1 PONTO)  Questão 10 — mesclarJSONs
// Recebe DOIS textos JSON (strings) e retorna o texto JSON (string) que
// representa o objeto resultante de mesclar os dois.
// Se houver chaves em comum, o segundo JSON sobrescreve o primeiro.
// Se algum dos dois textos for inválido, retorne o texto '{}' (JSON de
// objeto vazio).
// Exemplo:
//   mesclarJSONs('{"a":1,"b":2}', '{"b":99,"c":3}')
//     → '{"a":1,"b":99,"c":3}'
//   mesclarJSONs('quebrado', '{"a":1}') → '{}'
// Dica: use try/catch envolvendo dois JSON.parse, depois copie as chaves
// do segundo para o primeiro, e use JSON.stringify para devolver.
export function mesclarJSONs(textoA, textoB) {
  try{
    const objeto1 = JSON.parse(textoA)
    const objeto2 = JSON.parse(textoB)
    let texto3 = JSON.stringify(objeto1)
    let texto4 = JSON.stringify(objeto2)
    let item = ""
    for(letra of texto3){
      if(letra !== '{' && letra !== '}'){
        item += letra
      }
    }
    if(texto4 !== "{}"){
      item += ","
      for(letra of texto4){
        if(letra !== '{' && letra !== '}'){
          item += letra
        }
      }
    }
    return `{${item}}`
  }
  catch(error){
    return '{}'
  }
}

// (0,5 PONTOS) Questão 11 — multiplicar
// Recebe dois números (a, b) e retorna a multiplicado de b.
export function multiplicar(a, b) {
  return a * b
}

// (0,5 PONTOS) Questão 12 — dividir
// Recebe dois números (a, b) e retorna a / b.
// Se b for 0, retorna null.
export function dividir(a, b) {
  if(b === 0){
    return null
  }
  else{
    return a / b
  }
}

// (1 PONTO)  Questão 13 — inverterTexto
// Recebe um texto (string) e retorna o mesmo texto de trás para frente.
// Restrição: NÃO use o método `.reverse()`. Resolva percorrendo o texto.
// Exemplo: inverterTexto('Salinas') → 'sanilaS'
//          inverterTexto('abc') → 'cba'
//          inverterTexto('') → ''
export function inverterTexto(texto) {
  let inverso = ""
  for(let i=texto.lenght; i>0; i--){
    inverso += texto[i-1]
  }
  return inverso
}
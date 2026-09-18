// String (texto)
// Uma string é uma sequência de caracteres usada para representar texto. Strings podem ser definidas usando aspas simples (' '), aspas duplas (" ") ou crases (` `) para template literals.
const nome = "Jarvis"; // string usando aspas duplas
const mensagem = 'Olá, Jarvis!';
console.log(nome); // Jarvis
console.log(mensagem);

const saudacaoConcatenada = "Olá, " + nome + "!"; // string usando concatenação
console.log(saudacaoConcatenada); // Olá, Jarvis!

// typeof é um operador que retorna uma string indicando o tipo do operando. Ele pode ser usado para verificar o tipo de uma variável ou valor.
//  O typeof serve para identificar o tipo de dado de uma variável ou valor em JavaScript. Ele retorna uma string que representa o tipo do operando.

const nomeDois = "Jarvis";
console.log(typeof nomeDois); // string

const mensagemBryan = "BRYAN - Não pode usar fone de ouvido"; // string usando aspas duplas
console.log(mensagemBryan); // BRYAN - Não pode usar fone de ouvido
const mensagemJarvis = "Jarvis - Crie um código que funcione com o fone de ouvido"; // string usando aspas duplas
console.log(mensagemJarvis); // Jarvis - Crie um código que funcione com o fone de ouvido
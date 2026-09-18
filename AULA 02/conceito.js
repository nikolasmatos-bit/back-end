// Inicio Back-End - JavaScript
// Aula 02 - Node.js
// Aula 03 - Express

// Variáveis

// var permite redeclaração e alteração do valor.
{
  var nomeVar = "Nikolas";
  var idadeVar = 30;
  var idadeVar = 31;
  var cidadeVar = "São Paulo";
}

// const não permite redeclaração nem alteração do valor.
const nomeConst = "Nikolas";
const idadeConst = 30;
const cidadeConst = "São Paulo";

// let permite alteração do valor, mas não redeclaração.
let nome = "Nikolas";
let idade = 30;
let cidade = "São Paulo";
nome = "Nikolas Silva";

// Uma constante precisa receber um valor e não pode ser alterada depois.
const pi = 3.14;

// Exemplo de uso de variáveis
// Palavras começando com letra maiúscula são reservadas para classes, então não é uma boa prática usá-las para variáveis.
// camelCase é a convenção de nomenclatura para variáveis em JavaScript

// let nomeCompleto; let idadeUsuario; function calcularIdade(anoNascimento) { let idade = 2024 - anoNascimento; return idade; } let idadeUsuario = calcularIdade(1990); console.log("Idade do usuário:", idadeUsuario); // let nomeCompleto = "Nikolas Silva"; console.log("Nome completo:", nomeCompleto); // 

//__________________
// PASCAL CASE é a convenção de nomenclatura para classes em JavaScript
// - Todas as palavras começam com letra maiúscula 

 //class UsuarioSistema {
   // constructor(nome, idade) {
     //   this.nome = nome;
       // this.idade = idade;
    // }
// };

// SNAKE CASE é a convenção de nomenclatura para constantes em JavaScript
// - Palavras separadas por um underscore _

// let nome_completo = "Nikolas Silva"; // não é uma boa prática usar snake case para variáveis, mas é permitido
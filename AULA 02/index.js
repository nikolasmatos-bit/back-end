// Inicio Back-End-- JAVASCRIPT 
// Aula 02 - Node.js
// Aula 03 - Express

// Variaveis 

//ANTIGO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, pode ser redeclarado e mudar o valor
var nome = "Nikolas";
var idade = 30;
var idade = 31; // não gera erro, mas não é uma boa prática
var cidade = "São Paulo";
//NOVO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!, não pode ser redeclarado e nem mudar o valor
const nome = "Nikolas";
const idade = 30;
const cidade = "São Paulo";
 
// mais moderno, pode mudar de valor, mas não pode ser redeclarado
let nome = "Nikolas";
let idade = 30;
let cidade = "São Paulo";
nome = "Nikolas"; // pode mudar o valor
 //let nome = "Nikolas"; // não pode ser redeclarado ❌ ERROR 

 // const é fixo, não pode mudar de valor, nem ser redeclarado
 const pi = 3.14; // não pode mudar o valor ❌ ERROR
 // pi = 40; // não pode mudar o valor ❌ ERROR
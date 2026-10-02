console.log(document.getElementById("meu-titulo"));

console.log(document.getElementById("subtitulo"));

console.log(document.getElementById("paragrafo"));


let titulo = document.getElementById("meu-titulo");

titulo.style.color = "blue";

titulo.style.fontSize = "30px";


let subtitulo = document.getElementById("subtitulo");

subtitulo.style.color = "green";

subtitulo.style.fontSize = "20px";


let paragrafo = document.getElementById("paragrafo");

paragrafo.style.color = "black";

paragrafo.style.fontSize = "16px";


let caixa = document.getElementById("caixa");

caixa.style.backgroundColor = "lightgray";

caixa.style.padding = "20px";

caixa.style.borderRadius = "10px";


let boxes = document.querySelectorAll(".box");


let imagem = document.getElementById("imagem");


console.log(titulo);

console.log(subtitulo);

console.log(paragrafo);

console.log(caixa);


function mudarCorTitulo() {

    titulo.innerText = "Jarvis dominou tudo!";

    subtitulo.innerText = "Nikolas controla tudo!";

    paragrafo.innerText =
        "O mundo é dominado por inteligência artificial! E JARVIS é o mais poderoso de todos!";

    boxes[0].innerText =
        "O mundo é dominado por inteligência artificial!";

    boxes[1].innerText =
        "E JARVIS é o mais poderoso de todos!";

    imagem.src = "./img/images.jpg";
}
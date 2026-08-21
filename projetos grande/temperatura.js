const temperatura = 28;

const temperaturaElemento = document.getElementById("temperatura");
const mensagemElemento = document.getElementById("mensagem");

let mensagem = "";

if (temperatura < 15) {
    mensagem = "Está frio! ";
} else if (temperatura >= 15 && temperatura <= 25) {
    mensagem = "O clima está agradável! ";
} else if (temperatura > 25 && temperatura <= 35) {
    mensagem = " quente! ";
} else {
    mensagem = " muito quente!";
}

temperaturaElemento.textContent = `Temperatura agora: ${temperatura}°C`;
mensagemElemento.textContent = mensagem;

console.log(`Temperatura: ${temperatura}°C`);
console.log(`Classificação: ${mensagem}`);

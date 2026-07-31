// TAREFA 1
let nomeCompleto = prompt("digite seu nome completo:");
let cargo = prompt("digite seu cargo ou função:");
let empresa = prompt("digite sua empresa ou escola:");
let email = prompt("digite seu e-mail:");

let nomeMaiusculo = nomeCompleto.toUpperCase();

console.log(`nome do usuario:${nomeMaiusculo}`);
console.log(`o cargo:${cargo}`);
console.log(`a empresa:${empresa}`);
console.log(`o e-mail:${email}`);


alert("cartão de visita gerado!");



let nomeProduto = prompt("digite o nome do produto:");
let precoOriginal = Number(prompt("digite o preço original:"));
let percentualDesconto = Number(prompt("digite a porcentagem de desconto:"));

let valorDesconto = precoOriginal * (percentualDesconto / 100);
let precoFinal = precoOriginal - valorDesconto;

let precoOriginalFormatado = precoOriginal.toFixed(2).replace('.', ',');
let descontoFormatado = valorDesconto.toFixed(2).replace('.', ',');
let precoFinalFormatado = precoFinal.toFixed(2).replace('.', ',');

let resumo = `produto: ${nomeProduto}
preço original: R$ ${precoOriginalFormatado}
desconto (${percentualDesconto}%): R$ ${descontoFormatado}
preço final: R$ ${precoFinalFormatado}`;

console.log(resumo);
alert(resumo);


// TAREFA 3
let senha = prompt("digite uma senha:");

let tamanho = senha.length;
let temMaiuscula = senha !== senha.toLowerCase();
let temMinuscula = senha !== senha.toUpperCase();

let classificacao = "";

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "forte";
} else {
    classificacao = "fraca";
}

console.log(`tamanho da senha: ${tamanho}`);
console.log(`classificação: ${classificacao}`);

alert(`tamanho da senha: ${tamanho} caracteres\nClassificação: ${classificacao}`);
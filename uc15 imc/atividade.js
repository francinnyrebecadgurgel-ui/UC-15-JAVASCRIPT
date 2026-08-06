let nome = prompt('Qual é o seu nome?');

let nota1Str = prompt(`Olá, ${nome}! Digite a primeira nota:\n(ex: 6,5 ou 6.5)`);
let nota2Str = prompt('Digite a segunda nota:\n(ex: 8,0 ou 8.0)');

let nota1 = Number(nota1Str.replace(',', '.'));
let nota2 = Number(nota2Str.replace(',', '.'));

console.log('Nome:', nome);
console.log('Nota 1:', nota1, typeof nota1);
console.log('Nota 2:', nota2, typeof nota2);

let media = (nota1 + nota2) / 2;
let mediaFormatada = media.toFixed(1);

console.log('Média:', mediaFormatada);


if (media < 4) {
    console.log("Situação: REPROVADO");
} else if (media >= 5 && media <= 6) {
    console.log("Situação: RECUPERAÇÃO");
} else if (media >= 7) {
    console.log("Situação: APROVADO");
} else {
    console.log("Situação: EM ANÁLISE");
}

const primeiroNumero = Number(prompt('Questão 1 - Digite o primeiro número:'));
const segundoNumero = Number(prompt('Questão 1 - Digite o segundo número:'));

console.log('Soma:', primeiroNumero + segundoNumero);
console.log('Subtração:', primeiroNumero - segundoNumero);
console.log('Multiplicação:', primeiroNumero * segundoNumero);
console.log('Divisão:', segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Não é possível dividir por zero.');

const numero = Number(prompt('Questão 2 - Digite um número:'));

console.log('Dobro:', numero * 2);
console.log('Triplo:', numero * 3);


const nome = prompt('Questão 3 - Digite seu nome:');
const idade = prompt('Questão 3 - Digite sua idade:');

console.log(`Olá, ${nome}! Seja bem-vindo! Você tem ${idade} anos.`);

// Questão 4 - Média de três notas
const nota1 = Number(prompt('Questão 4 - Digite a primeira nota:'));
const nota2 = Number(prompt('Questão 4 - Digite a segunda nota:'));
const nota3 = Number(prompt('Questão 4 - Digite a terceira nota:'));
const media = (nota1 + nota2 + nota3) / 3;

console.log('Média:', media);

let usuarioCorreto = 'admin';
let senhaCorreta = '1234';
const usuario = prompt('Questão 5 - Digite o usuário:');
const senha = prompt('Questão 5 - Digite a senha:');

if (usuario !== usuarioCorreto) {
	console.log('Usuário incorreto.');
} else if (senha !== senhaCorreta) {
	console.log('Senha incorreta.');
} else {
	console.log('Login realizado com sucesso!');
}

const numeroA = Number(prompt('Número maior - Digite o primeiro número:'));
const numeroB = Number(prompt('Número maior - Digite o segundo número:'));

if (numeroA > numeroB) {
	console.log('O maior número é', numeroA);
} else if (numeroB > numeroA) {
	console.log('O maior número é', numeroB);
} else {
	console.log('Os dois números são iguais.');
}

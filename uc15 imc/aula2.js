// com if/else - 4 linhas
let mensagem; 
if (nota >= 6) { 
    mensagem = 'aprovado'; 
} else {
mensagem = 'reprovado'; 
}

// com tenário - 1 linha 
const mensagem = nota >= 6 ? 'aprovado' : 'reprovado' ;


// Converter cada if/else para ternário:


// 1.

let descricao;

if (temperatura > 30) {

  descricao = 'Quente';

} else {

  descricao = 'Agradável';

}

let descricao = temperatura > 30 ? 'Quente' : 'Agradável';



// 2.

let tipo;

if (numero % 2 === 0) {

  tipo = 'par';

} else {

  tipo = 'ímpar';

}


let tipo = numero % 2 === 0 ? 'par' : 'ímpar';

// 3.

let saudacao;

if (hora < 12) {

  saudacao = 'Bom dia';

} else {

  saudacao = 'Boa tarde/noite';

}


let saudacao = hora < 12 ? 'Bom dia' : 'Boa tarde/noite';



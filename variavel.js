console.log("Olá, Luiz! Seja bem-vindo!")
console.log("Olá, Gustavo! Seja bem-vindo!")
console.log("Olá, Cecília! Seja bem-vinda!")

function darBoasVindas (nome){
    console.log('Olá, ${nome}! Seja bem-vindo!');
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");

function apresentar (nome, idade){
    console.log('Meu nome é ${nome} e tenho &{idade} anos.');
}


apresentar("Gaby",24)

function voceEstudando (nome){
    console.log('Olá ${nome}! Você está estudando!')

}

voceEstudando("rebeca");

function somar (a,b){
    return a + b;
}

somar(5,3)

//outras formas--- 

let resultado = somar (5, 3)
console.log(resultado);



function verificarAprovacao(nota1, nota2) {
  const media = (nota1 + nota2) / 2;

  if (media > 6) {
    return `Media: ${media} - Aprovado`;
  } else {
    return `Media: ${media} - Reprovado`;
  }
}

console.log(verificarAprovacao(7, 8)); 
console.log(verificarAprovacao(5, 6));
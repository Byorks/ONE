// Desafios 04

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem-vindo(a)");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = prompt('Digite o seu nome:');
console.log('Olá, ' + nome +"!");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"
let nomeAlert = prompt('Digite o seu nome:');
alert('Olá, ' + nome +"!");

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemProg = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemProg);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = parseInt(prompt("Escolha um número"));
let valor2 = parseInt(prompt("Escolha mais um para somarmos com o primeiro"));
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valorSub1 = parseInt(prompt("Escolha um número"));
let valorSub2 = parseInt(prompt("Escolha mais um para somarmos com o primeiro"));
let resultadoSub = valorSub1 + valorSub2;

console.log(`A subtração de ${valorSub1} e ${valorSub2} é igual a ${resultado}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeUsuario = parseInt(prompt("Digite sua idade:"));
if (idadeUsuario >= 18) {
    console.log("Você é maior de idade");
} else {
    ("Você não é maior de idade")
}
// Desafios 2

// 1 
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?");

if ( diaSemana == "Sábado" || diaSemana == "Domingo") {
    alert("Bom fim de semana!");
}
else {
    alert("Boa semana!");
}

// 2 
// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let entradaUsuario = parseInt(prompt("Digite um número, direi ser é positivo ou negativo!"));

if ( entradaUsuario >= 0 ) {
    alert(entradaUsuario + " é positivo");
} else { 
    alert(entradaUsuario+ " é negativo");
}

// 3 
// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuação = parseInt(prompt("Digite o valor da pontuação"));

if ( pontuação >= 100 ) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar");
}

// 4 
// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 3000.52;

alert(`Saldo atual: ${saldoConta.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

// 5
//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Digite o seu nome");
alert("Boas-vindas " + nomeUsuario);
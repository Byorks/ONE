// ---- Desafio 2 Alura - Lógica de programação: mergulhe em programação com JavaScript ----

// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?");

let diaSemanaTratado = diaSemana.normalize('NFD').replace(/[\u0300-\u036f]g, '')

if ( diaSemana.toLocaleLowerCase() == "sabado" ||)

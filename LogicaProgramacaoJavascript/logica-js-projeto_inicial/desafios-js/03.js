//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let numContagemCrescente = 1;

while (numContagemCrescente <= 10) {
    console.log(numContagemCrescente);

    numContagemCrescente++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let numContagemDecres = 10;

while (numContagemDecres >= 0) {
    console.log(numContagemDecres);

    numContagemDecres--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let escolhaUsuario = parseInt(prompt("Escolha um número para iniciarmos uma contagem regressiva")); 
console.clear();

console.log("Bora contar :D");
while (escolhaUsuario >= 0) {
    
    console.log("número: " + escolhaUsuario);

    escolhaUsuario--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let escolhaUsuarioCrescente = parseInt(prompt("Escolha um número para iniciarmos uma contagem")); 
let contagem = 0;
console.clear();

console.log("Bora contar :D");
while (contagem <= escolhaUsuarioCrescente) {
    console.log("número: " + contagem);
    contagem++;  
}

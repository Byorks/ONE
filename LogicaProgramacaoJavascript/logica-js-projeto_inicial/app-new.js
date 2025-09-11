alert("Boas vindas ao jogo do número secreto");
let numeroMaximo =  5000;
// Importante simular erros para verificar possíveis tentativas do usuário

// Criando variável
let numeroSecreto = parseInt(Math.random( ) *  numeroMaximo + 1);

let chute;
let tentativas = 1;

// Enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
  tentativas++;
  console.log(tentativas);
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  // Condicional If(Se)
  if (chute == numeroSecreto) {
    // Concatenar em string
    // alert("Isso ai! Você acertou o número secreto " + numeroSecreto);
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

// Operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// atalhos
// Ctrl + Shift + X

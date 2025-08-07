// Minha tentativa de fazer o projeto da Alura sem consulta

let info = document.querySelector('.container__informacoes');

// Sorteia um número entre 0 e 30
const secretNumber = Math.floor(Math.random() * 30 ) + 1; 

alert("Tente descobrir o número secreto! Que fica entre 0 e 30");

let userInput = null;

while ( userInput != secretNumber) {
    while( typeof userInput != "number") {
        // entra aqui se não for um número
        userInput = parseInt(prompt("Digite qual pode ser o número secreto :D"));

        console.log(userInput);
    }

    console.log(userInput);
    if (userInput === secretNumber) {
        alert("Parabéns você é um mestre Jedi! :D");
    }
    else {
        alert("Você não acertou o número secreto D:")
        
        if ( userInput < secretNumber) {
        alert("O número secreto é maior \n Tente novamente!");
            
        }
        else {
            alert("O número secreto é menor \ Tente novamente!");
        }

        userInput = null;
    }


}

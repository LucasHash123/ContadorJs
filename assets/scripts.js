var currentNumberWrapper = document.getElementById("currentNumber");

// Vareável de Controle

let currentNumber = 0;



function Increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;

    // Mudança de Cor Positiva

    if(currentNumber > 0){
        document.getElementById('currentNumber').style.color = 'blue';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }

    // Limitando a 10

    if (currentNumber == 10 ) {
        document.getElementById('adicionar').disabled = true;
    } else if (currentNumber < 10) {
        document.getElementById('adicionar').disabled = false;
        document.getElementById('subtrair').disabled = false;
    }
}

function Decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;

    // Mudança de Cor Negativa

    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }

    // Limitando a -10

    if (currentNumber == -10) {
        document.getElementById('subtrair').disabled = true;
    } else if (currentNumber > -10) {
        document.getElementById('subtrair').disabled = false;
        document.getElementById('adicionar').disabled = false;
    }
    
}
// Botão de Reiniciar

function Reiniciar() {
    currentNumberWrapper.innerHTML = 0;
    currentNumber = 0;
    if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }
}
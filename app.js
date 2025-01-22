
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste El número secreto era ${numeroSecreto}`);
    }else if(numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p', 'el numero secreto es mayor');
    }else{
        asignarTextoElemento('p', 'el numero secreto es menor');
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}  

asignarTextoElemento('h1', 'Juego del numero secreto?');
asignarTextoElemento('p', 'Adivina el número entre 1 y 100');


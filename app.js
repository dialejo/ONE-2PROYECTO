
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste El número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acertó.
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'el numero secreto es mayor');
        }else {
            asignarTextoElemento('p', 'el numero secreto es menor');
        }
        intentos++;
        limpiarImput();
    }
    return;
}
function limpiarImput() {
    let valorImput = document.querySelector('#valorUsuario');
    valorImput.value = '';
}
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}  

function condicionInicial() {
    asignarTextoElemento('h1', 'Juego del numero secreto?');
    asignarTextoElemento('p', 'Adivina el número entre 1 y 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarImput();
    //indicar mensaje de intervalo de numeros
    //generar nuevo numero secreto
    //inicializer el numero de intentos
    condicionInicial();
    //deshabilitar el boton de nuevo

    
    

}

condicionInicial();


let numeroSecreto= 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximoJuego = 10;

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
    let valorImput = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximoJuego) + 1;
    //si el numero generado esta en la lista hacemos una operación
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length === numeroMaximoJuego) {
        asignarTextoElemento('p', 'Se acabaron los intentos');
    } else{ 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}  

function condicionInicial() {
    asignarTextoElemento('h1', 'Juego del numero secreto?');
    asignarTextoElemento('p', `Adivina el número entre 1 y ${numeroMaximoJuego}`);
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
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionInicial();
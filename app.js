
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('click desde el botón');
}

asignarTextoElemento('h1', 'Juego del numero secreto?');
asignarTextoElemento('p', 'Adivina el número entre 1 y 100');
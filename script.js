// Selecciona un numero al azar
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

//esta accion va a ejecutar cuando se toque el boton de quechear
function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, ingrese un numero del 1 al 100'
        return 
    }

    if(numeroIngresado ===  numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!' ;
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El numero es mayor al que ingresaste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Más bajo! El numero es mayor al que ingresaste';
        mensaje.style.color = 'red';
    }


}   
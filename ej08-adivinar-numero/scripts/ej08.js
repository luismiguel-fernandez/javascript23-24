/*
const a = document.getElementById("botonEmpezar") //devuelve 1 elem
const b = document.getElementsByTagName("H1") //devuelve 1 array de elementos
const c = document.getElementsByClassName("btn") //devuelve 1 array de elementos
const d = document.getElementsByName("") //devuelve 1 array de elementos

const e = document.querySelector("#unboton") //devuelve 1 elem
const f = document.querySelectorAll(".btn") //devuelve 1 array de elementos
const g = document.querySelectorAll("li") //devuelve 1 array de elementos
*/

const ENTRADA = document.getElementById("inputIntentos")
const SALIDA = document.getElementById("textareaSalida")
let secreto
let partidaEnMarcha = false
let numIntentos = 6

function comprobarNumero() {
    //solo debe hacer algo si hay partida en marcha
    if (!partidaEnMarcha) return
    //si hay partida en marcha, comparar el nº con el secreto
    let intento = parseInt(ENTRADA.value.trim())

    //comprobar si lo introducido por el usuario es un valor adecuado
    if (!intento || isNaN(intento)) {
        SALIDA.value += "Debes introducir valores numéricos enteros entre 1 y 100\n"
        ENTRADA.value = ""
        ENTRADA.focus()
        return
    }

    if (intento == secreto) {
        SALIDA.value += "¡ACIERTAS! El secreto era " + secreto
        partidaEnMarcha = false
        ENTRADA.disabled = true
        return
    }
    if ( intento > secreto ) {
        SALIDA.value += "Con el nº " + intento + " te has pasado.\n"
        ENTRADA.value = ""
        ENTRADA.focus()
    } else {
        SALIDA.value += "Con el nº " + intento + " te has quedado corto/a.\n"
        ENTRADA.value = ""
        ENTRADA.focus()
    }
    numIntentos--
    if (!numIntentos) {
        //se han agotado los intentos
        SALIDA.value += "Se han agotado los intentos y no has acertado. El secreto era: " + secreto
        partidaEnMarcha = false
        ENTRADA.disabled = true
    }
}

function empezarPartida() {
    partidaEnMarcha = true
    numIntentos = 6
    //habilitar el INPUT
    ENTRADA.disabled = false
    //vaciar el INPUT y el TEXTAREA
    ENTRADA.value = ""
    SALIDA.value = ""
    //generar un nº entero aleatorio entre 1 y 100
    secreto = Math.floor(Math.random()*100+1)
    console.log("Secreto: ",secreto)
}
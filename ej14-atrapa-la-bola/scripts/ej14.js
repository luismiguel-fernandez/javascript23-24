//0. Darle dimensiones al tablero y la bola
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")
const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 300
const DIAMETRO_BOLA = 30
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = DIAMETRO_BOLA + "px"
bola.style.height = DIAMETRO_BOLA + "px"

const tiempo = document.querySelector("#tiempo")
const puntos = document.querySelector("#puntos")
const btnEmpezar = document.querySelector("#btnEmpezar")

let cuentaAtras
let 
let partidaEnMarcha = false

//1. El botón EMPEZAR pone una partida en marcha
btnEmpezar.addEventListener("click",function(){
    //Acciones que ocurren cuando empieza una partida:
    // a) Inicializar una cuenta atrás de 10 segundos
    tiempo.textContent = 10
    puntos.textContent = 0
    clearInterval(cuentaAtras) //por si ya había una partida en marcha
    cuentaAtras = setInterval(decrementarSegundos,1000)
    moverBola()
    partidaEnMarcha = true
})

//2. Cada segundo que avanza la cuenta atrás, la bola cambia de sitio al azar.
//  Al llegar a 0, se detiene (pista: clearInterval)
function decrementarSegundos() {
    tiempo.textContent--
    moverBola()
    if (tiempo.textContent == "0") {
        clearInterval(cuentaAtras)
        partidaEnMarcha = false
    }
}

//3. Que la bola sea clicable para sumar puntos SOLO con la partida en marcha 
bola.addEventListener("click",function(){
    if (partidaEnMarcha) puntos.textContent++
})

function moverBola() {
    bola.style.top = Math.random() * (ALTURA_TABLERO - DIAMETRO_BOLA) + "px"
    bola.style.left = Math.random() * (ANCHURA_TABLERO - DIAMETRO_BOLA) + "px"
}
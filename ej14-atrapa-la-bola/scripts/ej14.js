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

//1. El botón EMPEZAR debe inicializar una cuenta atrás de 10 segundos
//  Al llegar a 0, se detiene (pista: clearInterval)

//2. Cada segundo que avanza la cuenta atrás, la bola cambia de sitio al azar

//3. Que la bola sea clicable para sumar puntos SOLO con la partida en marcha 


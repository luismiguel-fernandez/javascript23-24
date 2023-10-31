const ANCHO_TABLERO = 8
const ALTO_TABLERO = 8
const NUM_MINAS = 10
const ANCHO_CELDA = 30
const tablero = document.querySelector("#tablero")

generarTablero(ANCHO_TABLERO, ALTO_TABLERO)


function generarTablero(ancho,alto){
    tablero.style.width = ANCHO_CELDA * ancho + "px"
    for (let i = 0; i < ancho*alto; i++) {
        let newCelda = document.createElement("DIV")
        newCelda.classList.add("celda")
        newCelda.dataset.fila = Math.floor(i / ancho)
        newCelda.dataset.col = i % ancho
        tablero.append(newCelda)
    }
}
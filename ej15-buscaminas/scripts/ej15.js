const ANCHO_TABLERO = 8
const ALTO_TABLERO = 8
const NUM_MINAS = 10
const ANCHO_CELDA = 30

const tablero = document.querySelector("#tablero")

const labelFila = document.querySelector("#fila")
const labelCol = document.querySelector("#columna")


function generarTablero(ancho,alto){
    tablero.style.width = ANCHO_CELDA * ancho + "px"
    for (let i = 0; i < ancho*alto; i++) {
        let newCelda = document.createElement("DIV")
        newCelda.classList.add("celda")
        newCelda.dataset.fila = Math.floor(i / ancho)
        newCelda.dataset.col = i % ancho
        newCelda.dataset.mina = false
        newCelda.dataset.clicada = false
        tablero.append(newCelda)
    }
}

function colocarMinas(ancho,alto,numMinas) {
    let minasPorColocar = numMinas
    while (minasPorColocar) {
        let posicion = Math.floor( Math.random() * ancho * alto )
        if (todasLasCeldas[posicion].dataset.mina == "false") {
            todasLasCeldas[posicion].dataset.mina = true
            todasLasCeldas[posicion].classList.add("mina")
            minasPorColocar--
        }
    }
}

function calcularMinasAlrededor(f,c) {
    let contador = 0
    for (let i = f-1; i <= f+1; i++) {
        for (let j = c-1; j <= c+1; j++) {
            if (i>=0 && i<=ALTO_TABLERO-1 && j>=0 && j<=ANCHO_TABLERO-1) {
                let posicion = i*ANCHO_TABLERO + j
                if (todasLasCeldas[posicion].dataset.mina == "true") contador++
            }
        }
    }
    return contador
}

generarTablero(ANCHO_TABLERO, ALTO_TABLERO)
const todasLasCeldas = tablero.querySelectorAll("div.celda")
colocarMinas(ANCHO_TABLERO, ALTO_TABLERO, NUM_MINAS)

tablero.addEventListener("mouseover",function(ev){
    if (ev.target.classList.contains("celda")) {
        labelFila.textContent = ev.target.dataset.fila
        labelCol.textContent = ev.target.dataset.col
    }
})

tablero.addEventListener("click",function(ev){
    if (ev.target.classList.contains("celda")) {
        //comprobar si ya ha sido clicada la celda previamente
        if (ev.target.dataset.clicada == "false") {
            ev.target.dataset.clicada = true
            //comprobar si explota mina
            if (ev.target.dataset.mina == "true") {
                //fin de la partida
                //mostrar todas las minas
                //cambiar el aspecto de la mina clicada
                
                alert("mueres")
            } else {
                //si no has explotado mina
                let minasAlrededor = calcularMinasAlrededor(parseInt(ev.target.dataset.fila) , parseInt(ev.target.dataset.col))
                ev.target.classList.add("celda_clicada" + minasAlrededor)
            }
        }
    }
})






/* 
let contador = 0
if (f>0 && c>0) {
    //consulto si hay mina en la celda de arr-izq
    let posicion = (f-1) * 8 + (c-1)
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (f>0) {
    //consulto si hay mina en la celda de arr
    let posicion = (f-1) * 8 + c
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (f>0 && c < ANCHO_TABLERO-1) {
    //consulto si hay mina en la celda de arr-der
    let posicion = (f-1) * 8 + (c+1)
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (c>0) {
    //consulto si hay mina en la celda de izq
    let posicion = (f) * 8 + c-1
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (c < ANCHO_TABLERO-1) {
    //consulto si hay mina en la celda de izq
    let posicion = f * 8 + c+1
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (f>0 && c>0) {
    //consulto si hay mina en la celda de aba-izq
    let posicion = (f-1) * 8 + (c-1)
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (f>0) {
    //consulto si hay mina en la celda de aba
    let posicion = (f-1) * 8 + c
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
}
if (f>0 && c < ANCHO_TABLERO-1) {
    //consulto si hay mina en la celda de aba-der
    let posicion = (f-1) * 8 + (c+1)
    if (todasLasCeldas[posicion].dataset.mina == "true") contador++
} */
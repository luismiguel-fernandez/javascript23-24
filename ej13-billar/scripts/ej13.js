const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500
const DIAMETRO_BOLA = 30
const divTablero = document.querySelector("#tablero")
const addBallBtn = document.querySelector("#addBallBtn")

divTablero.style.width = ANCHURA_TABLERO + "px"
divTablero.style.height = ALTURA_TABLERO + "px"

addBallBtn.addEventListener("click",function(){
    //crear y unir un DIV para representar una bola
    let newBall = document.createElement("DIV")
    divTablero.append(newBall)
    newBall.classList.add("bola")
    newBall.style.top = Math.floor(Math.random()*(ALTURA_TABLERO-DIAMETRO_BOLA)) + "px"
    newBall.style.left = Math.floor(Math.random()*(ANCHURA_TABLERO-DIAMETRO_BOLA)) + "px"
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    newBall.style.backgroundColor = `rgb(${r},${g},${b})`
})


const buscadorR = document.querySelector("#buscadorR")

const las3listas = document.querySelectorAll("#divResultadosR>ul")
const listaPel = las3listas[0]
const listaAct = las3listas[1]
const listaDir = las3listas[2]

function imprimirResultadosR(listado) {
    listaPel.innerHTML = ""
    listaAct.innerHTML = ""
    listaDir.innerHTML = ""
    listado.forEach( e => {
        let nuevoLi = document.createElement("LI")
        nuevoLi.textContent = e.texto
        if (e.tipo == "tit") {
            listaPel.append(nuevoLi)
        } else if (e.tipo == "act") {
            listaAct.append(nuevoLi)
        } else if (e.tipo == "dir") {
            listaDir.append(nuevoLi)
        }
        nuevoLi.addEventListener("click",function(){
            
        })
    });
}

buscadorR.addEventListener("keyup", function() {
    console.log("entra")
    if (this.value.trim().length) {
        fetch("server/search.php?p=" + this.value.trim())
        .then( resp => resp.json() )
        .then( json => {
            imprimirResultadosR(json)
        })
    }
})


/* ************************************************************* */
/*                    SOLUCIÓN DE LA IZQUIERDA                   */
/* ************************************************************* */
const buscadorL = document.querySelector("#buscadorL")
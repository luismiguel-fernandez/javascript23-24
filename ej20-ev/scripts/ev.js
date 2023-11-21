let lis = document.querySelectorAll("#navbarSupportedContent>ul>li.nav-item")
const urlBase = "http://my-json-server.typicode.com/luismiguel-fernandez/javascript23-24/"
let consultas = ["tecnologias","fabricantes","coches"]
const divResults = document.querySelector("#results")

const modalDetalles = document.getElementById('carThumb')

lis.forEach( (li,index) => {
    li.addEventListener("click", function(){
        fetch(urlBase + consultas[index])
        .then( resp => resp.json() )
        .then( json => {
            divResults.innerHTML = "<ul class='list-group'></ul>"
            const lista = divResults.querySelector("ul")
            json.forEach( r => {
                //crear un LI dentro de ese nuevo UL para cada uno de los resultados del JSON
                let nuevoLi = document.createElement("LI")
                nuevoLi.classList.add("list-group-item")
                //distinguir si es un coche (r.nombre) u otra cosa (r.text)
                nuevoLi.textContent = r.text ? r.text : r.nombre + " (" + r.precio + ")"
                lista.append(nuevoLi)

                nuevoLi.addEventListener("click",()=>{
                    let imagen = modalDetalles.querySelector("img")
                    imagen.src = r.imagen
                    new bootstrap.Modal(modalDetalles).show();
                })

                nuevoLi.addEventListener("mouseover",ev=>{
                    //quitar la clase ACTIVE al item que la tenía puesta
                    if (lista.querySelector(".active"))
                        lista.querySelector(".active").classList.remove("active")
                    //asignar la clase ACTIVE al item que estoy sobrevolando con el puntero
                    nuevoLi.classList.add("active")
                })
            })
        })

    })
    
    
})
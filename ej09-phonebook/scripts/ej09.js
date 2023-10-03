let phonebook = [
    { name: 'Luismi', number: '666333999'},
    { name: 'Antonia', number: '555123456'},
    { name: 'Hulk Hogan', number: '987654321'},
    { name: 'Donald Trump', number: '666666666'}
]

const INPUTNAME = document.querySelector("#inputName")
const INPUTNUMBER = document.querySelector("#inputNumber")
const BTNADD = document.querySelector("#btnAdd")
const INPUTSEARCH = document.querySelector("#inputSearch")
const CUERPO = document.querySelector("#phonebooktable>tbody")

INPUTNAME.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        INPUTNUMBER.focus()
    }
})

INPUTNUMBER.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        insertContact()
        listarContactos(phonebook)
    }
})

BTNADD.addEventListener("click",function(){
    insertContact()
    listarContactos(phonebook)
})

function insertContact() {
    let newName = INPUTNAME.value.trim()
    let newNumber = INPUTNUMBER.value.trim()
    if (newName != "" && newNumber != "") {
        phonebook.push({ name: newName, number: newNumber})
        
        INPUTNAME.value = ""
        INPUTNUMBER.value = ""
        INPUTNAME.focus()
    }
}

INPUTSEARCH.addEventListener("keyup",function(){
    //se ha pulsado una tecla, voy a ver si hay algo escrito en el INPUT
    let termino = this.value.trim().toLowerCase() //aquí en esta función "this" apunta a INPUTSEARCH
    let filtrados = phonebook.filter( contacto => contacto.name.toLowerCase().includes(termino)
                                                    || contacto.number.includes(termino) )
    listarContactos(filtrados)
})

function listarContactos(listado) {
    //vaciar la tabla, por si tiene resultados anteriores
    CUERPO.innerHTML = ""
    //recorrer el listado para mostrar los elementos en la tabla
    listado.forEach( contacto => {
        //crear una fila y 2 celdas
        let nuevaFila = CUERPO.insertRow()
        let nuevaCelda1 = nuevaFila.insertCell()
        let nuevaCelda2 = nuevaFila.insertCell()
        //escribir dentro de las celdas la info del contacto
        nuevaCelda1.textContent = contacto.name
        nuevaCelda2.textContent = contacto.number
    })
}
listarContactos(phonebook)
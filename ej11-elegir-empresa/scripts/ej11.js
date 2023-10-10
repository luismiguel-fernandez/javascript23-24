//-------------------------------------
//Declaración de variables y constantes
//-------------------------------------

let empresas = ["Apple","Google","IBM","Microsoft","Nvidia","Intel","Embargos a lo bestia"]
const studentName = document.querySelector("#studentName")
const choice1 = document.querySelector("#choice1")
const choice2 = document.querySelector("#choice2")
const insertButton = document.querySelector("#insertButton")
let cleanStudentName = true

//----------------------------------------------------------------------------
//Estas líneas se ejecutan automáticamente al cargar la página en el navegador
//----------------------------------------------------------------------------
studentName.focus()
choice2.disabled = true
insertButton.disabled = true

//----------------------------------------------------------------------------
//Rellenar automáticamente el primer SELECT choice1
//----------------------------------------------------------------------------
empresas.forEach( (empresa,indice) => {
    let newOption = document.createElement("OPTION")
    newOption.textContent = empresa
    newOption.value = indice + 1
    choice1.append(newOption)
})

//----------------------------------------------------------------------------
//El INPUT debe escuchar el evento KEYUP
//----------------------------------------------------------------------------
studentName.addEventListener("keyup",keyPressed )
function keyPressed() {
    if (studentName.value.trim().length)
        cleanStudentName = false
    else
        cleanStudentName = true

    checkButtonDisable()
}

//----------------------------------------------------------------------------
//El SELECT choice1 debe escuchar el evento CHANGE
//----------------------------------------------------------------------------
choice1.addEventListener("change",fillChoice2 )
function fillChoice2() {
    checkButtonDisable()
    //vaciar las empresas de choice2, por si existiera alguna
    choice2.innerHTML = '<option value="0">(choose one)</option>'
    //si el usuario elige la opción nula (value = 0) en choice1...
    if (choice1.value == 0) {
        choice2.disabled = true
        return 
    }
    //añadir todas las empresas EXCEPTO la elegida en choice1
    empresas.forEach( (empresa,indice) => {
        if ( choice1.value != indice + 1 ) {
            let newOption = document.createElement("OPTION")
            newOption.textContent = empresa
            newOption.value = indice + 1
            choice2.append(newOption)
        }
    })
    //decidir si habilitar o deshabilitar choice2
    choice2.disabled = false
}

//----------------------------------------------------------------------------
//El SELECT choice2 también debe escuchar el evento CHANGE
//----------------------------------------------------------------------------
choice2.addEventListener("change",checkButtonDisable)
function checkButtonDisable() {
    if (cleanStudentName == false
            && choice1.value != 0
                    && choice2.value != 0)

        insertButton.disabled = false
    else
        insertButton.disabled = true
}
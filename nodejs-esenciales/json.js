class Persona {
    constructor(name,apellidoMaterno , apellidoPaterno, email)
    {
        this.name = name 
        this.apellidoMaterno = apellidoMaterno
        this.apellidoPaterno = apellidoPaterno
        this.email = email
    }

    imprimePersona = function(){
         console.log(this)
    }
}

let persona1 = new Persona("Manuel", "Hernandez", "Gomez", "manuel@gmail.com")
persona1.imprimePersona()

let persona2 = new Persona("Luis", "Ramirez", "Gutierrez", "Luis@gmail.com")
persona2.imprimePersona()

let persona3 = new Persona("Juan", "Santeliz", "Fernandez", "Juan@gmail.com")
persona3.imprimePersona()

var Personas = []
Personas.push(persona1)
Personas.push(persona2)
Personas.push(persona3)

console.log(JSON.stringify(Personas))
const usuarioId = document.getElementById("id")
const boton = document.getElementById("consulta")
var nombre = document.getElementById("name")
var correo = document.getElementById("email")


var UrlWithId = "https://jsonplaceholder.typicode.com/users/";

boton.addEventListener("click", () => {
    const idToSearch = usuarioId.value

    if (idToSearch !== null) {
        url = `https://jsonplaceholder.typicode.com/users/${idToSearch}`

        CallApiFetch(url)
    }
    else {
        alert("Campo vacio, ingresa un id")
    }
});


function CallApiFetch(url) {
    fetch(url)
        .then(response => {
            if(!response.ok) throw Error(response.status)
            return response.json()
        })
        .then(user => {
            nombre.value = user.name
            email.value = user.email
            // console.log(json)

        })
        .catch(error => console.log("no se pudo conectar"))


}

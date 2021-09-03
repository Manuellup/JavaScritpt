const usuarioId = document.getElementById("id")
const boton = document.getElementById("consulta")
var nombre = document.getElementById("name")
var correo = document.getElementById("email")


var UrlWithId = "https://jsonplaceholder.typicode.com/users/";

boton.addEventListener("click", () => {
    const idToSearch = usuarioId.value

    if (idToSearch !== null) {
        url = `https://jsonplaceholder.typicode.com/users/${idToSearch}`

        CallApi(url)
    }
    else {
        alert("Campo vacio, ingresa un id")
    }
});


function CallApi(url) {


    $(document).ready(function () {

        $.ajax({
            url: url,
            contentType: "application/json",
            dataType: 'json',
            success: function (result) {
             
                nombre.value = result.name
                email.value = result.email
                console.log(result.name);
                console.log(result.email);
            },
            error: function (result) {
                console.log("la llamada no se pudo completar");
            }
        });

    });
}

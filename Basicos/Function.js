let result = sumNumeros(20,30);
console.log(result);

let resutl2 = buscaCaracter("ajwiermadsfn", "r")
console.log("El caracter se encontro en la cadena: " + resutl2);

function sumNumeros(num1, num2)
{

    return num1 + num2;
}

function resNumeros(num1, num2)
{

    return num1 + num2;
}

function buscaCaracter(cadena , caracter){

    for(c of cadena ){

        var result = c === caracter  ?  true :  false;
        return true; 
    }
}
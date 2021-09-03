class Animal {

    constructor(categoria) {
        this.categoria = categoria;
    }

}

class CuentaBancaria {

    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(cantidad) {
        this.saldo += cantidad;
    }
    retiro(cantidad) {
        this.saldo -= cantidad;
    }

}
//"extends" palabra recervada para indicar la herencia de clases
class TarjateDeCredito extends CuentaBancaria{
    imprimeFechaDeCorte(){
        console.log("La fecha de corte es: ")
    }

    imprimePagoMinimo(){
        console.log("La pago minimo es: ")
    }


}

    let animal1 = new Animal('perro')
    let animal2 = new Animal('Gato')

    console.log(animal1.categoria)
    console.log(animal2.categoria)

    let cuenta1 = new CuentaBancaria(5000)
    cuenta1.deposito(2000)
    cuenta1.deposito(4000)
    cuenta1.retiro(2500)
    console.log(cuenta1.saldo)

    let cuenta2 = new TarjateDeCredito(5000);
    console.log(cuenta2.saldo)
    cuenta2.imprimeFechaDeCorte()
    

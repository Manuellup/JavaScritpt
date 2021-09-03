class FiguraGeometrica {

    constructor(base, altura)
    {
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        var area = this.base * this.altura
        return area 
    }
}

class Rectangulo extends FiguraGeometrica{
    calcularArea(){
        var area = this.base * this.altura
        return area 
    }

}

class Triangulo extends FiguraGeometrica{

    calcularArea(){
        var area = (this.base * this.altura)/2
        return area 
    }

}

class Cuadrado extends FiguraGeometrica{

    calcularArea(){
        var area = this.base * this.base
        return area 
    }


}

var triangulo = new Triangulo(3,7)
console.log(`Area triangulo: ${triangulo.calcularArea(this)}`)

var rectangulo = new Rectangulo(3,7)
console.log(`Area Rectangulo: ${rectangulo.calcularArea(this)}`)

var cuadrado = new Cuadrado(5,5)
console.log(`Area Cuadrado: ${cuadrado.calcularArea(this)}`)
let listaNumeros = [20,33,45,12,11,23]; 
listaNumeros.forEach(currentNumber=>{
    currentNumber % 2 === 0 ? currentNumber+=5 : currentNumber-=5;
    console.log(currentNumber);
});
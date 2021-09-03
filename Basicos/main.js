var array = [];
var button = document.getElementById("event");
var list = document.getElementById("list-elementos");

button.addEventListener("click", ()=>{
    var element = window.prompt("Nuevo elemento");
    if(element != null){
        array.push(element);
      
    }    

    while(list.firstChild)
        list.removeChild(list.firstChild);
        
    array.forEach((p)=>{
        
        let newElement = document.createElement('li')
        newElement.innerHTML = `${p} <button class="eliminar">Eliminar<button>`
        let idProducto = p.lenght;
        newElement.setAttribute('id',idProducto -1);
        list.appendChild(newElement);
        //cambiar color 
        
    });
    var buttons = document.getElementsByClassName("eliminar");

    for (const b of buttons) {
        b.addEventListener("click",()=>{
            

        })
    }
    

    console.log(array);
});


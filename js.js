//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un 
//console log con la información del evento del click

const boton = document.createElement('button');
boton.setAttribute('id','btnToClick');
boton.innerText='prueba';
boton.addEventListener('click',(event)=>{
    console.log(event)
})

document.body.append(boton);
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const x = document.querySelector('.focus')
x.addEventListener('focus',()=> {
    console.log('evento añadido '+x.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const añadir = document.querySelector('.value')
añadir.addEventListener('input',()=> {
    console.log(añadir.value)
})
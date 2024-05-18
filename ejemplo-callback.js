const miBoton = document.getElementById("miboton");
miBoton.addEventListener('click',
(evento)=>{
    console.log(evento);
    alert("click en el boton");
});
setTimeout(()=>{
    console.log('Ejecucion de timeout');
}, 3000);
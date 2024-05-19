const listaUsuarios = document.getElementById("lista-usuarios");
const boton = document.getElementById("boton");

function reqListener(){
    const usuarios = JSON.parse(this.responseText);
    console.log(usuarios);
    const usuariosRender = usuarios
    .map(usuario => `<li>${usuario.nombre}</li>`)
    .join("");
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender;
}

function enviarDatos(){
    const datos = {nombre: 'lunes 24'};
    fetch(
        'http://localhost/JavaScriptCourse/ajax/prueba.txt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(datos)
    })
    .then((response) => response.json())
    .then(respuestaJson => console.log('respuestaJson', respuestaJson))
}

boton.onclick = enviarDatos;
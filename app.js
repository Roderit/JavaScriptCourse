function obtenerNombre(){
    return "Camilo";
}

function obtenerApellido(){
    return "Rueda";
}

function obtenerNombreCompleto(){
    const nombre = obtenerNombre();
    const apellido = obtenerApellido();
    return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();

console.log("Nombre completo", nombreCompleto);
var opcionales = function (nombre, apellido, edad) {
    if (edad) {
        console.log('se llama ${nombre} su apellido es ${apellido} y su edad es ${edad}');
    }
    console.log('se llama ${nombre} su apellido es ${apellido}');
};
opcionales('Manuel', 'Muñoz', 37);

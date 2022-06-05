//Parametros pr defecto.

const mostrar = (nombre:string, apellido:string, edad:number) => {
    return 'Se llama ${nombre} se apellida ${apellido} y su edad es ${edad}'
}

console.log(mostrar('Manuel', 'munos', 37))
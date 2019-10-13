let numero = {
    alias: 'n',
    demand: true
}

let completado = {
    default: true,
    alias: 'c',
    dec: 'Marca como completado o pendiente la tarea'
}

let descripcion = {
    demand: true,
    alias: 'd',
    dec: 'Descripcion de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'crea tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza tarea', {
        completado,
        numero
    })
    .command('borrar', 'borra tarea', {
        numero
    })
    .help()
    .argv;

module.exports = {
    argv
}
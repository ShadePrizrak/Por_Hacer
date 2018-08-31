const Descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const Completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una actividad por hacer', {
        Descripcion
    })
    .command('actualizar', 'Actualiza el estado de una actividad', {
        Descripcion,
        Completado
    })
    .command('listar', 'Lista las actividades registradas')
    .command('borrar', 'Borrar una actividad registrada', {
        Descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
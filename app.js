//Requireds
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors')


// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let Actividad = porHacer.crear(argv.descripcion)
        console.log(Actividad);
        break;
    case 'listar':
        let Listado = porHacer.getListado();
        for (let tarea of Listado) {
            console.log('===================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        let Actualizado = porHacer.Actualizar(argv.descripcion, argv.completado);
        console.log(Actualizado);
        break;
    case 'borrar':
        let Borrado = porHacer.Borrar(argv.descripcion);
        console.log(Borrado);
        break;
    default:
        console.log('Comando no reconocido');

}
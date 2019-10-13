const argv = require('./config/yargs').argv;
const tarea = require('./tarea/tarea');
const colors = require('colors')

const comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = tarea.getListado();
        for (const [i, v] of listado.entries()) {
            console.log(`==========TAREA #${i+1}===========`.green);
            console.log(v.descripcion);
            console.log('Estado: ',v.completado);
            console.log('============================='.green);
        }
        break;
    case 'crear':
        let ta = tarea.crear(argv.descripcion);
        console.log(ta);
        break;
    case 'actualizar':
        tarea.actualizar(argv.numero, argv.completado);
        break;
    case 'borrar':
        tarea.borrar(argv.numero);
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}
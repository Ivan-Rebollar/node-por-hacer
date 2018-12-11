//////////cambios de optimizacion/////////////////
const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'Descripción de la tarea por hacer'
};

const completado = {
	default: true,
	alias: 'c',
	desc: 'Marca como completadoo pendiente la tarea'
};
///////////////////////////////////////////////////


const argv = require('yargs')
	.command('crear','Crear un elemento por hacer',{
		descripcion/*:{
			al agregar las constantes de optimizacion este codigo ya no es necesario
			demand: true,
			alias:'d',
			desc: 'Descripción de la tarea por hacer'
		}*/
	})
	.command('actualizar','Actualizar el estado completado de una tarea',{
		descripcion/*:{
			demand: true,
			alias: 'd',
			desc: 'Descripción de la tarea por hacer'
		}*/,
		completado/*:{
			default: true,
			alias: 'c',
			desc:'Marca como completado o pendiente la tarea'
		}*/
	})
	.command('borrar','Borra una tarea de la lista por hacer',{
		descripcion/*:{
			demand: true,
			alias:'b',
			desc:'Borra una tarea de la lista de las tareas por hacer'
		}*/
	})
	.help()
	.argv;

module.exports = {
	argv
}

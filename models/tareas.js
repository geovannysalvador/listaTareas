const Tarea = require("./tarea.js");


class Tareas {

    // Objeto no listado 
    _listado = {};

    // listarlo en un arreglo normal y no en un objeto 
    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        } );

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    // metodo
    crearTarea( desc =''){

        const tarea = new Tarea(desc);
        
        // Almacenar la tarea en el _Listado que es un objeto
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
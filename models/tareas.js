const Tarea = require("./tarea.js");


class Tareas {

    // Objeto no listado 
    _listado = {};


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
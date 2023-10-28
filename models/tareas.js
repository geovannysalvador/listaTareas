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

    // Cargar las tareas para que las lean en forma real 
    cargarTareasFromArray( tareas = [] ){
        tareas.forEach( tarea =>{
            this._listado[tarea.id] = tarea;
        });
    }
    // metodo
    crearTarea( desc =''){

        const tarea = new Tarea(desc);
        
        // Almacenar la tarea en el _Listado que es un objeto
        this._listado[tarea.id] = tarea;
    }

    ListadoCompleto(){
        console.log();
        // i es el undice
        this.listadoArr.forEach( (tarea, i) =>{

            const idx = `${i+1}`.green;
            const {desc, completadoEn } = tarea;

            // Condicion para ver si es null o no asi podemos moldear a las necesidades
            // ?=> si cumple : sino. Es una condicional
            const estadoActual = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            // Unirlo todo
            console.log(`${idx}  ${desc} => ${estadoActual}`);
           
        })
    }

    cambiarEstadoComplePend( completadas = true){
        
    }
}

module.exports = Tareas;
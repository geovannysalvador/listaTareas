require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const {inquirerMenu, pausa, leerInput, listaTareasBorrar, confirmar, mostrarListadoCheckList} = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');


const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDb = leerDB();

    if (tareasDb){ //cargar si hay informacion de tareas
        tareas.cargarTareasFromArray( tareasDb )

    }

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const descTarea = await leerInput('Descripcion:');
                // crear tarea. Ingresarlo al objeto de tareas
                tareas.crearTarea(descTarea);
                
            break;
 
            case '2':
                // console.log(tareas.listadoArr);
                tareas.ListadoCompleto();
            break;

            case '3':
                tareas.mostrarEstadoComplePend(true);
            break;

            case '4':
                tareas.mostrarEstadoComplePend(false);
            break;
            // Completado o pendiente
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            // Borrar
            case '6':
                const id = await listaTareasBorrar( tareas.listadoArr );
                if( id !== '0' ){
                    const ok = await confirmar("Esta seguro ?");
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea eliminada correctamente');
                    }
                }
                
            break;
    
        }


        guardarDB( tareas.listadoArr );


        // Pausar la consola
        await pausa()

    } while ( opt !== '0' );



} 

main();
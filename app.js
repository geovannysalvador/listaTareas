require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarArchivo.js');
const {inquirerMenu, pausa, leerInput, listaTareasBorrar, confirmar} = require('./helpers/inquirer.js');
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
            case '5':
                // tareas.mostrarEstadoComplePend(false);
            break;
            case '6':
                const id = await listaTareasBorrar( tareas.listadoArr );
                const ok = await confirmar("Esta seguro ?");
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea eliminada correctamente');
                }
                console.log("No se elimino la tarea");
            break;
            case '7':
                // tareas.mostrarEstadoComplePend(false);
            break;
    
        }


        guardarDB( tareas.listadoArr );


        // Pausar la consola
        await pausa()

    } while ( opt !== '0' );



} 

main();
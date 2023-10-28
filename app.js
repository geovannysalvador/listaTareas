require('colors')

const { guardarDB } = require('./helpers/guardarArchivo.js');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');


const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const descTarea = await leerInput('Descripcion:');
                // crear tarea. Ingresarlo al objeto de tareas
                tareas.crearTarea(descTarea);
                
            break;

            case '2':
                console.log(tareas.listadoArr);
            break;
    
        }


        guardarDB( tareas.listadoArr )


        // Pausar la consola
        await pausa()

    } while ( opt !== '0' );



} 

main();
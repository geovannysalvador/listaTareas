require('colors')

const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');


const main = async() =>{

    let option = '';
    const tareas = new Tareas();

    do {
        option = await inquirerMenu();
        
        switch (option) {
            case '1':
                const descTarea = await leerInput('Descripcion:');
                // crear tarea. Ingresarlo al objegto de tareas
                tareas.crearTarea(descTarea);
                
            break;

            case '2':
                console.log(tareas._listado);
            break;
    
        }


        // Pausar la consola
        await pausa()

    } while ( option !== '0' );



} 

main();
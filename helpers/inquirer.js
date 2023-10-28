const inquirer = require('inquirer');
const colors = require('colors')

const menuOptions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear Tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} Lista de tareas`,
            },
            {
                value: '3',
                name: `${'3.'.green} Lista de tareas completadas`,
            },
            {
                value: '4',
                name: `${'4.'.green} Lista de tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea`,
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`,
            },
            {
                value: '7',
                name: `${'7.'.green} salir`,
            },
        ]
    }
];


const inquirerMenu = async() => {

    // console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una Opcion ');
    console.log('===========================\n'.green);

    const {opcion} = await inquirer.prompt(menuOptions)
    return opcion;
 
}

const pausa = async() =>{

    const questions = [
        {
            type: 'input',
            name: 'Enter',
            message: `Presione ${ 'Enter'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(questions)
    console.clear();
}

// leee el input de la primera opcion
const leerInput  = async(message) => {

    const questionInitial = [
        {
            type: 'input',
            name: 'desc',
            message, 
            validate(value){
                if( value.length === 0 ){
                    return 'Ingrese una tarea';
                }
                return true;
            }
        }
    ];

    // Desestructurar para poder ver lla descr que es lo que necesitamos
    const {desc} = await inquirer.prompt(questionInitial);
    return desc;
}

// Para ver opciones de borrado
const listaTareasBorrar = async( tareas = [] ) =>{

    const choices = tareas.map( (tarea, i) => {

        const idx = `${ i+1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    } );

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',  
            choices
        }
    ]
    
    const {id} = await inquirer.prompt(preguntas);
    return id;


}

const confirmar = async(message) =>{

    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(pregunta);
    return ok;
}

module.exports = {inquirerMenu, pausa, leerInput, listaTareasBorrar, confirmar};
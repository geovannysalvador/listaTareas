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
                name: '1. Crear Tarea',
            },
            {
                value: '2',
                name: '2. Lista de tareas',
            },
            {
                value: '3',
                name: '3. Lista de tareas completadas',
            },
            {
                value: '4',
                name: '4. Lista de tareas pendientes',
            },
            {
                value: '5',
                name: '5. Completar tarea',
            },
            {
                value: '6',
                name: '6. Eliminar tarea',
            },
            {
                value: '0',
                name: '0. salir',
            },
        ]
    }
];


const inquirerMenu = async() => {

    // console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una Opcion '.green);
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

module.exports = {inquirerMenu, pausa, leerInput};
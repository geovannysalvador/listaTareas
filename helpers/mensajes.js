const { resolve } = require('path');

require('colors')


const mostrarMenu = () =>{
    
    return new Promise( resolve => {
        console.clear();
        console.log('==========================='.green);
        console.log('   Seleccione una Opcion '.green);
        console.log('===========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Lista de tareas`);
        console.log(`${'3.'.green} Lista de tareas completadas`);
        console.log(`${'4.'.green} Lista de tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea`);
        console.log(`${'6.'.green} Eliminar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        // Recibir informacion 
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question('Seleccione una opcion: ', (answ) =>{
            readline.close();
            resolve(answ);
        })
    })
}

const pause = () => {

    return new Promise(  resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question(`\nPresione ${ 'Enter'.green} para continuar\n`, (answ) =>{
            readline.close();
            resolve(answ)
        })
    } )
}

module.exports = {mostrarMenu, pause};
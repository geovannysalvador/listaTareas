require('colors')

const {inquirerMenu, pausa} = require('./helpers/inquirer.js')

console.clear();

const main = async() =>{

    console.log('Holaaa');

    let option = '';

    do {
        option = await inquirerMenu();
        console.log({option});    

        // Pausar la consola
        await pausa()

    } while ( option !== '0' );



} 

main();
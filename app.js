require('colors')

const {mostrarMenu, pause} = require('./helpers/mensajes.js')

console.clear();

const main = async() =>{

    console.log('Holaaa');

    let option = '';

    do {
        option = await mostrarMenu();
        if( option !== '0') await pause();       

    } while ( option !== '0' );

    


} 

main();
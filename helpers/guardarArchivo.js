

const fs = require('fs');

const path = './db/data.json';

const guardarDB = (data) =>{

    fs.writeFileSync( path, JSON.stringify(data) );
}

const leerDB = () => {

    if (!fs.existsSync(path)){
        return null;
    }
    // Lerr la data si existe
    const inf = fs.readFileSync(path, {encoding: 'utf-8'});
    // Volver a un objeto del string de la funcion guardar en DB
    const dataTransform = JSON.parse(inf);

    // console.log(dataTransform);
    return dataTransform;
}


module.exports= {guardarDB, leerDB}
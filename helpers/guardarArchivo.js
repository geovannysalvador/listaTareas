

const fs = require('fs');

const guardarDB = (data) =>{

    const path = './db/data.json';

    fs.writeFileSync( path, JSON.stringify(data) );
}


module.exports= {guardarDB}
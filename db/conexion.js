const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'mendozalz',
        password: '71365208',
        database: 'cursoexpressjs'
    }
);

db.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log("Base de dato CursoExpressJs conectada");
        
    }
});

module.exports = db;
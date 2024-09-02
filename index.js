const express = require('express');
const app = express();
const estudiantesRouter = require('./views/estudiantesRoutes');
const profesoresRouter = require('./views/profesoresRoutes');

app.get('/', (req, res)=>{
    res.send("Hola mundo Pepin")
})

app.use('/estudiantes', estudiantesRouter);
app.use('/profesores', profesoresRouter);

app.listen(6500, ()=>{
    console.log('Servidor activo');
    
})
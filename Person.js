//requiere conectarse a base de datos mongo.
const mongoose = require('mongoose');
//requiere conectarse a express.
const express = require('express');
const bodyParser = require('body-parser');
//requiere archivo Index.js donde se definio person y works.
const Person = require('./Index');
//ejecuta funcion express.
const app = express();
//ejecuta consulta en el puerto 3002.
const port = 3002;
//define base de datos de conexion 
mongoose.connect('mongodb://localhost:27017/Person');
app.use(bodyParser.json());//toma el json y lo transforma en un objeto javascript
//ruta del archivo
app.use('/api/persons',require('./PersonRoutes'));
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server Corriendo en http://localhost:${port}`);
});


//crear instancia de prueba 
//const newPerson = new Person({
//    name:'Rodrigo',
//    lastName:'Narvaez',
//    works:[
//        {
//            company:'Solucenter',
//            initContract:'01-01-2020',
//            finishContract:'01-01-2024',
//            position:'Ingeniero Informatico'
//    }
//    ],
//    nationality:'Chileno',
//    year:'32'
//});
//newPerson.save()
//.then(person => { //cuando se cumpla la condicion o promesa que se guarden los archivos va a indicar persona guardada
//    console.log('Persona Guardada',person) //muestra mensaje de persona guardada
//    mongoose.connection.close(); //cierra conexion
//})
//
//.catch(err => { //de lo contrarios va a indicar error al guardar
//    console.error('Error al guardar',err) //muestra error al guardar
//    mongoose.connection.close(); //cierra conexion
//});





const mongoose = require('mongoose'); //requiere instalacion mongo
const {Schema} = mongoose; // desestructura Schema del objeto mongoose


//Modelo Works
const WorkSchema = new Schema({
    company:{type:String,require:true},
    initContract:{type:Date,require:true},
    finishContract:{type:Date,require:true},
    position:{type:String,require:true}
    //definicion con sus atributos
})

//Modelo Person
const PersonSchema = new Schema({
    name:{type:String,require:true},
    lastName:{type:String,require:true},
    works:[WorkSchema],
    nationality:{type:String,require:true},
    year:{type:Number,require:true}
    //definicion con sus atributos
}, {collection:'people'});

const Person = mongoose.model('Person',PersonSchema); //Estoy guardando en una variable tipo const lo que voy obteniendo de mi modelo 'PersonSchema' es un constructor.
module.exports = Person; //permite crear o visualizar el tipo json de person.

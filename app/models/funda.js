const mongoose = require('mongoose');
const fundaSchema = new mongoose.Schema({
    categoria: String,
    nombre: String,
    descripcion: String,
    costo: Number,
    tipo: String,
    imagen: [String],
    modelos:[String]
  
  })
  module.exports = mongoose.model('Funda', fundaSchema);
  
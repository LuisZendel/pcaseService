const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categoria: String,
  nombre: String,
  descripcion: String,
  costo: Number,
  tipo: String,
  imagen: [String]
});

module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema({
  nome: String,
  descricao: String,
  emprestado: {
    type: Boolean,
    default: false
  },
  laboratorio: String
});

module.exports = mongoose.model('itens', ItemSchema);

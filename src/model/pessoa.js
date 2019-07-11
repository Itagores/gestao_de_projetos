const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PessoaSchema = Schema({
  nome: String,
  telefone: String,
  email: String,
  vinculo: String,
  matricula: Number,
  dataPenalidade: Date
});

module.exports = mongoose.model('pessoas', PessoaSchema);

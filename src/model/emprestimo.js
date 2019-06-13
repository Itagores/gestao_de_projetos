const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmprestimoSchema = Schema({
  pessoa: {},
  item: {},
  dataEmprestimo: Date,
  dataDevolucao: Date,
  aberto: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('emprestimos', EmprestimoSchema);

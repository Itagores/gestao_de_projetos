const express = require('express');
const router = express.Router();
const Emprestimo = require('../model/emprestimo');
const Item = require('../model/item');
const Pessoa = require('../model/pessoa');

// ------------- PESSOAS ------------------
router.get('/pessoa', async (req, res) => {
  const pessoas = await Pessoa.find();
  res.send(pessoas);
});

router.get('/pessoa/:id', async (req, res) => {
  const { id } = req.params;
  const pessoa = await Pessoa.find({_id: id});
  res.send(pessoa);
});

router.post('/pessoa', async (req, res, next) => {
  const pessoa = new Pessoa(req.body);
  await pessoa.save();
  res.send(pessoa);
});

router.put('/pessoa/:id', async (req, res, next) => {
  const { id } = req.params;
  await Pessoa.update({_id: id}, req.body);
  res.send({status:true});
});

router.delete('/pessoa/:id', async (req, res, next) => {
  let { id } = req.params;
  await Pessoa.remove({_id: id});
  res.send({status:true});
});

// ----------------- ITEM --------------------------------
router.get('/item', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.get('/item/:id', async (req, res) => {
  const { id } = req.params;
  const item = await Item.find({_id: id});
  res.send(item);
});


router.post('/item', async (req, res, next) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

router.put('/item/:id', async (req, res, next) => {
  const { id } = req.params;
  await Item.update({_id: id}, req.body);
  res.send({status:true});
});

router.delete('/item/:id', async (req, res, next) => {
  let { id } = req.params;
  await Item.remove({_id: id});
  res.send({status:true});
});

// ----------------- EMPRESTIMO -------------------
router.get('/emprestimo', async (req, res) => {
  const emprestimos = await Emprestimo.find();
  res.send(emprestimos);
});

router.get('/emprestimo/:id', async (req, res) => {
  const { id } = req.params;
  const emprestimo = await Emprestimo.find({_id: id});
  res.send(emprestimo);
});


router.post('/emprestimo', async (req, res, next) => {
  const emprestimo = new Emprestimo(req.body);
  await emprestimo.save();
  res.send(emprestimo);
});

router.put('/emprestimo/:id', async (req, res, next) => {
  const { id } = req.params;
  await Emprestimo.update({_id: id}, req.body);
  res.send({status:true});
});

router.delete('/emprestimo/:id', async (req, res, next) => {
  let { id } = req.params;
  await Emprestimo.remove({_id: id});
  res.send({status:true});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const produtoRepo = require('../repository/produtoRepository');
const seguranca = require('../util/seguranca')

router.get('/produtos' ,(req,res) => {res.json(produtoRepo.todos())});

router.get('/produto/:id' ,(req,res) => {res.json(produtoRepo.recuperar(parseInt(req.params.id))); res.sendStatus(200)});

router.post('/produto', seguranca.autorizaJWT , (req,res) => {res.json(produtoRepo.adicionar(req.body)); res.sendStatus(200)});

router.put('/produto/:id', seguranca.autorizaJWT ,(req,res) => {res.json(produtoRepo.alterar(parseInt(req.params.id) , req.body));res.sendStatus(200)});

router.delete('/produto/:id', seguranca.autorizaJWT ,(req,res) => {res.json(produtoRepo.remover(parseInt(req.params.id))); res.sendStatus(200)});

module.exports = router;

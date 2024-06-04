var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de deposito

const depositoService = require('../services/depositoService');//Classe
const DepositoService = new depositoService(db.Deposito);//Contrução do objeto
const depositoController = require('../controllers/depositoController');//Classe
const DepositoController = new depositoController(DepositoService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();



//Rota de Criar Deposito
router.post('/create', authService.verifyToken, function(req, res){
  DepositoController.Create(req, res);
});

router.post('/update', authService.verifyToken, function(req, res){
  DepositoController.update(req, res);
});

router.get('/findall', authService.verifyToken, function(req, res){
  DepositoController.findAll(req, res);
});

router.get('/findbyid', authService.verifyToken, function(req, res){
  DepositoController.findById(req, res);
});

module.exports = router;

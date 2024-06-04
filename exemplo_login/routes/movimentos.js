var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de movimento

const movimentoService = require('../services/movimentoService');//Classe
const MovimentoService = new movimentoService(db.Movimento);//Contrução do objeto
const movimentoController = require('../controllers/movimentoController');//Classe
const MovimentoController = new movimentoController(MovimentoService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();



//Rota de movimentos
router.post('/create', authService.verifyToken, function(req, res){
  MovimentoController.Create(req, res);
});

router.get('/findByProduct', authService.verifyToken, function(req, res){
  MovimentoController.findByProduct(req, res);
});

router.get('/findByDeposito', authService.verifyToken, function(req, res){
  MovimentoController.findByDeposito(req, res);
});

router.get('/findByDate', authService.verifyToken, function(req, res){
  MovimentoController.findByDate(req, res);
});

router.get('/teste', function(req, res){
  MovimentoController.findProductByDeposito(req, res);
});



module.exports = router;

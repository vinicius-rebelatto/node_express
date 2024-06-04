var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de produto

const coastCenterService = require('../services/coastCenterService');//Classe
const CoastCenterService = new coastCenterService(db.CoastCenter);//Contrução do objeto
const coastCenterController = require('../controllers/coastCenterController.js');//Classe
const CoastCenterController = new coastCenterController(CoastCenterService);//Contrução do objeto



const AuthService = require('../services/auth'); // 3Caminho para o arquivo auth.js
const authService = new AuthService();


//Rota Produtos
router.post('/create', authService.verifyToken, function(req, res){
  CoastCenterController.Create(req, res);
});

router.post('/deposit', authService.verifyToken, function(req, res){
  CoastCenterController.deposit(req, res);
});

router.post('/withdraw', authService.verifyToken, function(req, res){
  CoastCenterController.withdraw(req, res);
});


module.exports = router;

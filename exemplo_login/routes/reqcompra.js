var express = require('express');
var router = express.Router();

const db = require('../models');

const reqCompraService = require('../services/reqCompraService');//Classe
const ReqCompraService = new reqCompraService(db.ReqCompra);//Contrução do objeto
const reqCompraController = require('../controllers/reqCompraController');//Classe
const ReqCompraController = new reqCompraController(ReqCompraService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();


router.post('/create', authService.verifyToken, function(req, res){
  ReqCompraController.create(req, res);
});

router.post('/cancel', authService.verifyToken, function(req, res){
  ReqCompraController.cancel(req, res);
})

router.get('/findbyid', authService.verifyToken, function(req, res){
  ReqCompraController.findById(req, res);
})

router.get('/findall', authService.verifyToken, function(req, res){
  ReqCompraController.findAll(req, res);
})

module.exports = router;

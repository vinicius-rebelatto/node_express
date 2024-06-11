var express = require('express');
var router = express.Router();

const db = require('../models');

const quotationService = require('../services/quotationService');//Classe
const QuotationService = new quotationService(db.Quotation);//Contrução do objeto
const quotationController = require('../controllers/quotationController');//Classe
const QuotationController = new quotationController(QuotationService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();


router.post('/create', authService.verifyToken, function(req, res){
  QuotationController.create(req, res);
});

router.post('/cancel', authService.verifyToken, function(req, res){
  QuotationController.cancel(req, res);
})

router.get('/findallbyrequest', authService.verifyToken, function(req, res){
  QuotationController.findAllByRequest(req, res);
})

/*router.get('/findall', authService.verifyToken, function(req, res){
  ReqCompraController.findAll(req, res);
})*/

module.exports = router;

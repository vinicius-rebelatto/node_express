var express = require('express');
var router = express.Router();

const db = require('../models');

const endPurchaseService = require('../services/endPurchaseService');//Classe
const EndPurchaseService = new endPurchaseService(db.EndPurchase);//Contrução do objeto
const endPurchaseController = require('../controllers/endPurchaseController');//Classe
const EndPurchaseController = new endPurchaseController(EndPurchaseService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();


router.post('/create', authService.verifyToken, function(req, res){
  EndPurchaseController.create(req, res);
});



module.exports = router;

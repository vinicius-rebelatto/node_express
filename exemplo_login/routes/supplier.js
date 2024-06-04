var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de produto

const supplierService = require('../services/supplierService.js');//Classe
const SupplierService = new supplierService(db.Supplier);//Contrução do objeto
const supplierController = require('../controllers/supplierController.js');//Classe
const SupplierController = new supplierController(SupplierService);//Contrução do objeto



const AuthService = require('../services/auth'); // 3Caminho para o arquivo auth.js
const authService = new AuthService();


//Rota Produtos
router.post('/create', authService.verifyToken, function(req, res){
  SupplierController.Create(req, res);
});

router.post('/update', authService.verifyToken, function(req, res){
  SupplierController.update(req, res);
});

router.post('/withdraw', authService.verifyToken, function(req, res){
  SupplierController.withdraw(req, res);
});


module.exports = router;

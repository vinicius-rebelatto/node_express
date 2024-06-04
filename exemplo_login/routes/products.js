var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de produto

const productService = require('../services/productService');//Classe
const ProductService = new productService(db.Product);//Contrução do objeto
const productController = require('../controllers/productController');//Classe
const ProductController = new productController(ProductService);//Contrução do objeto



const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();


//Rota Produtos
router.post('/create', authService.verifyToken, function(req, res){
  ProductController.Create(req, res);
});

router.post('/update', authService.verifyToken, function(req, res){
  ProductController.update(req, res);
});

router.get('/findall', authService.verifyToken, function(req, res){
  ProductController.findAll(req, res);
});

router.get('/findbyid', authService.verifyToken, function(req, res){
  ProductController.findById(req, res);
});


module.exports = router;

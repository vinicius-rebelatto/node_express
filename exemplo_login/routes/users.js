var express = require('express');
var router = express.Router();

const db = require('../models');


//Chamada das classes de usuário

const userService = require('../services/userService');//Classe
const UserService = new userService(db.User);//Contrução do objeto
const userController = require('../controllers/userController');//Classe
const UserController = new userController(UserService);//Contrução do objeto

//Chamada das classes de deposito

const depositoService = require('../services/depositoService');//Classe
const DepositoService = new depositoService(db.Deposito);//Contrução do objeto
const depositoController = require('../controllers/depositoController');//Classe
const DepositoController = new depositoController(DepositoService);//Contrução do objeto

//Chamada das classes de produto

const productService = require('../services/productService');//Classe
const ProductService = new productService(db.Product);//Contrução do objeto
const productController = require('../controllers/productController');//Classe
const ProductController = new productController(ProductService);//Contrução do objeto

//Chamada das classes de movimento

const movimentoService = require('../services/movimentoService');//Classe
const MovimentoService = new movimentoService(db.Movimento);//Contrução do objeto
const movimentoController = require('../controllers/movimentoController');//Classe
const MovimentoController = new movimentoController(MovimentoService);//Contrução do objeto


const AuthService = require('../services/auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Modulo de usuários está rodando');
});

//Rota para criar um novo usuário
router.post('/novoUsuario', function(req, res){
  UserController.create(req,res);
});

//Rota para localizar um usuário
router.get('/localizaTodosUsuarios', authService.verifyToken, function(req,res,next){
  UserController.localizaTodosUsuarios(req, res)
})

//Rota para localizar um usuário
router.get('/localizaPeloID', function(req,res,next){
  UserController.localizaPeloID(req, res)
})

//Rota de login
router.post('/login', function(req, res){
  UserController.login(req, res);
});



//Rota de Criar Deposito
router.post('/deposito/create', function(req, res){
  DepositoController.Create(req, res);
});

router.post('/deposito/update', function(req, res){
  DepositoController.update(req, res);
});

router.get('/deposito/findall', function(req, res){
  DepositoController.findAll(req, res);
});

router.get('/deposito/findbyid', function(req, res){
  DepositoController.findById(req, res);
});



//Rota Produtos
router.post('/product/create', function(req, res){
  ProductController.Create(req, res);
});

router.post('/product/update', function(req, res){
  ProductController.update(req, res);
});

router.get('/product/findall', function(req, res){
  ProductController.findAll(req, res);
});

router.get('/product/findbyid', function(req, res){
  ProductController.findById(req, res);
});


//Rota de movimentos
router.post('/movimento/create', function(req, res){
  MovimentoController.Create(req, res);
});

module.exports = router;

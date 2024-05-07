var express = require('express');
var router = express.Router();

const db = require('../models');
const userService = require('../services/userService');//Classe
const UserService = new userService(db.User);//Contrução do objeto
const userController = require('../controllers/userController');//Classe
const UserController = new userController(UserService);//Contrução do objeto
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

//Roda de login
router.post('/login', function(req, res){
  UserController.login(req, res);
});


module.exports = router;

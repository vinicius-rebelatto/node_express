var express = require('express');
var router = express.Router();

const db = require('../models');
const userService = require('../services/userService');//Classe
const UserService = new userService(db.User);//Contrução do objeto

const userController = require('../controllers/userController');//Classe
const UserController = new userController(UserService);//Contrução do objeto


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Modulo de usuários está rodando');
});

//Rota para criar um novo usuário
router.post('/novoUsuario', function(req, res){
  UserController.create(req,res);
});

//Rota para localizar um usuário
router.get('/localizaTodosUsuarios', function(req,res,next){
  UserController.localizaTodosUsuarios(req, res)
})

//Rota para localizar um usuário
router.get('/localizaPeloID', function(req,res,next){
  UserController.localizaPeloID(req, res)
})


module.exports = router;

//Service/userService
const jwt = require('jsonwebtoken');
const secret = 'esegredoviu'; // Substitua por sua própria chave secreta
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthService = require('./auth'); // Caminho para o arquivo auth.js
const authService = new AuthService();

class userService{
    //Construtor da classe recebe a userModel
    constructor(userModel){
        this.User = userModel;
    }

    async create(nome, email, senha){
        try{
            const hashedPassword = await bcrypt.hash(senha, saltRounds);
            const novoUser = await this.User.create(
                {
                    nome:nome,
                    email:email,
                    senha:hashedPassword
                }
            );
            const token = authService.generateToken(novoUser.id);
                    return { token };
            //return novoUser ? novoUser : null

        }
        catch(error){
            throw error;
        }
    }

    //localizaUsuarioPeloLogin
    async localizaTodosUsuarios(login, senha){
        try{
            const AllUsers = await this.User.findAll();
            return AllUsers? AllUsers: null;

            const user = await this.User.findOne(
                { where: { email: login } }
            );
        }
        catch(error)
        {
            throw error;
        }
    }

    //localizaUsuarioPeloID
    async localizaPeloID(id){
        try{
            const OneUser = await this.User.findOne(
                { where: { id: id } }
            );
            return OneUser? OneUser: null;
        }
        catch(error)
        {
            throw error;
        }
    }

    async login(id, senha){
        try{
            const user = await this.User.findOne({ where: { id: id } });
            if(user){
                const match = await bcrypt.compare(senha, user.senha);
                if(match){
                    const token = authService.generateToken(user.id);
                    return { token };
                }
                else{
                    throw new Error('Senha incorreta');
                }
            }
            else{
                throw new Error('Usuário não encontrado');
            }
        }
        catch(error){
            throw error;
        }
    }
}
module.exports = userService;

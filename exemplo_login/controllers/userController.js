// ./controllers/userController.js

class userController{
    constructor(userService){
        this.userService = userService;
    }
    async create(req, res){
        const {nome, email, senha} = req.body;
        try{
            const novoUser = await this.userService.create(nome, email, senha);
            res.status(200).json(novoUser);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao inserir o novo usuário'})
        }
    }
}
module.exports = userController;
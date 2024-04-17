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

    async localizaTodosUsuarios(req,res){
        const {login, senha} = req.body;
        try
        {
            const allUsers = await this.userService.localizaTodosUsuarios(login, senha);
            res.status(200).json(allUsers);
        }
        catch (erro)
        {
            res.status(500).json({error: 'Login inválido'})
        }
        
    }

    async localizaPeloID(req,res){
        const {id} = req.body;
        try
        {
            const oneUser = await this.userService.localizaPeloID(id);
            res.status(200).json(oneUser);
        }
        catch (erro)
        {
            res.status(500).json({error: 'ID não encontrado'})
        }
        
    }
}
module.exports = userController;

//localizaPeloID
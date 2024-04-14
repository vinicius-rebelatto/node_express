
class userService{
    //Construtor da classe recebe a userModel
    constructor(userModel){
        this.User = userModel;
    }

    async create(nome, email, senha){
        try{
            const novoUser = await this.User.create(
                {
                    nome:nome,
                    email:email,
                    senha:senha
                }
            );
            return novoUser ? novoUser : null

        }
        catch(error){
            throw error;
        }
    }
}
module.exports = userService;
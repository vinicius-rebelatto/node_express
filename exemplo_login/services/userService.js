
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
}
module.exports = userService;
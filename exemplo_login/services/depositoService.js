// ./services/depositoService.js

class DepositoService {
    constructor(depositoModel) {
        this.depositoModel = depositoModel;
    }

    async create(nome) {
        // Criar novo estoque
        try{
            const novoEstoque = await this.depositoModel.create(
                {
                    nome:nome,
                    ativo:true
                }
            );
            return novoEstoque ? novoEstoque : null
        }
        catch(error){
            throw error;
        }
    }

    async update(DepositoId , nome, ativo) {
        try{
            const deposit = await this.depositoModel.findOne({ where: { id: DepositoId } });
            deposit.nome = nome;
            deposit.ativo = ativo;
            await deposit.save();
            return "Atualizado com sucesso";
        }
        catch(error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allDeposits = await this.depositoModel.findAll();
            return allDeposits? allDeposits: null;
        }
        catch(error)
        {
            throw error;
        }
    }

    async findById(DepositoId) {
        try{
            const deposit = await this.depositoModel.findByPk(DepositoId);
            return deposit? deposit: deposit;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = DepositoService;
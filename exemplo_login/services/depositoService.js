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

    async update(DepositoId, nome, ativo) {
        try{
            const deposit = await this.depositoModel.findOne({ where: { DepositoId } });
            deposit.nome = nome;
            deposit.ativo = ativo;
            await deposit.save();
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = DepositoService;
// ./controllers/depositoController.js

class depositoController {
    constructor(depositoService) {
        this.depositoService = depositoService;
    }


    async Create(req, res) {
        const {nome} = req.body;
        try{
            const novoDeposito = await this.depositoService.create(nome);
            res.status(200).json(novoDeposito);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao criar novo depósito'})
        }
    }

    async update(req, res) {
        const {DepositoId, nome, ativo} = req.body;
        try{
            const novoDeposito = await this.depositoService.update(DepositoId, nome, ativo);
            res.status(200).json(novoDeposito);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

    async findAll(req,res){
        //const {login, senha} = req.body;
        try
        {
            const allDeposits = await this.depositoService.findAll();
            res.status(200).json(allDeposits);
        }
        catch (erro)
        {
            res.status(500).json({error: erro.message})
        }
    }

    async findById(req, res) {
        const {DepositoId} = req.body;
        try{
            const novoDeposito = await this.depositoService.findById(DepositoId);
            res.status(200).json(novoDeposito);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

}
module.exports = depositoController;

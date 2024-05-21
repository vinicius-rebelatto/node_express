// ./controllers/movimentoController.js

class movimentoController {
    constructor(movimentoService) {
        this.movimentoService = movimentoService;
    }


    async Create(req, res) {
        const {depositoid, productid, tipo, qtd, precoUni} = req.body;
        try{
            const novoMovimento = await this.movimentoService.create(depositoid, productid, tipo, qtd, precoUni);
            res.status(200).json(novoMovimento);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao criar novo depósito'})
        }
    }

    async update(req, res) {
        const {DepositoId, nome, ativo} = req.body;
        try{
            const novoMovimento = await this.movimentoService.update(DepositoId, nome, ativo);
            res.status(200).json(novoMovimento);
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
            const allDeposits = await this.movimentoService.findAll();
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
            const novoMovimento = await this.movimentoService.findById(DepositoId);
            res.status(200).json(novoMovimento);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

}
module.exports = movimentoController;

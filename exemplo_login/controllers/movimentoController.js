// ./controllers/movimentoController.js

class movimentoController {
    constructor(movimentoService) {
        this.movimentoService = movimentoService;
    }


    async Create(req, res) {
        const {depositoid, productid, tipo, qtd, precoUni, data} = req.body;
        try{
            const novoMovimento = await this.movimentoService.create(depositoid, productid, tipo, qtd, precoUni, data);
            res.status(200).json(novoMovimento);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }

    async findByProduct(req, res) {
        const {productid} = req.body;
        try{
            const movimentos = await this.movimentoService.findByProduct(productid);
            res.status(200).json(movimentos);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao buscar movimentação'})
        }
    }

    async findByDeposito(req, res) {
        const {depositoid} = req.body;
        try{
            const movimentos = await this.movimentoService.findByDeposito(depositoid);
            res.status(200).json(movimentos);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao buscar movimentação'})
        }
    }

    async findByDate(req, res) {
        const {startDate, endDate} = req.body;
        try{
            const movimentos = await this.movimentoService.findByDate(startDate, endDate);
            res.status(200).json(movimentos);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao buscar movimentação'})
        }
    }

    // Apenas teste

    async findProductByDeposito(req, res) {
        const {productid, depositoid} = req.body;
        try{
            const movimentos = await this.movimentoService.findProductByDeposito(productid, depositoid);
            res.status(200).json(movimentos);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao buscar movimentação'})
        }
    }

    

}
module.exports = movimentoController;

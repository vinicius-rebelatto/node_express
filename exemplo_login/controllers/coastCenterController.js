// ./controllers/depositoController.js

class coastCenterController {
    constructor(coastCenterService) {
        this.coastCenterService = coastCenterService;
    }


    async Create(req, res) {
        const {nome} = req.body;
        try{
            const newCoastCenter = await this.coastCenterService.create(nome);
            res.status(200).json(newCoastCenter);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao criar novo centro de custo'})
        }
    }

    async deposit(req, res) {
        const {coastCenterId, value} = req.body;
        try{
            const coastCenter = await this.coastCenterService.deposit(coastCenterId, value);
            res.status(200).json(coastCenter);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

    async withdraw(req, res) {
        const {coastCenterId, value} = req.body;
        try{
            const coastCenter = await this.coastCenterService.withdraw(coastCenterId, value);
            res.status(200).json(coastCenter);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

}
module.exports = coastCenterController;

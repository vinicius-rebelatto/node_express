// ./controllers/ReqCompraController.js

class EndPurchaseController {
    constructor(EndPurchaseService) {
        this.EndPurchaseService = EndPurchaseService;
    }


    async create(req, res) {
        const {purchaseid, parcelas} = req.body;
        try{
            const newEndPurchase = await this.EndPurchaseService.create(purchaseid, parcelas);
            res.status(200).json(newEndPurchase);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }


}
module.exports = EndPurchaseController;

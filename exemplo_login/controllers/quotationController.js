// ./controllers/ReqCompraController.js

class QuotationController {
    constructor(QuotationService) {
        this.QuotationService = QuotationService;
    }


    async create(req, res) {
        const {reqid, productid, supplierid, unitPrice, validUntil} = req.body;
        try{
            const newQuotation = await this.QuotationService.create(reqid, productid, supplierid, unitPrice, validUntil);
            res.status(200).json(newQuotation);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }
    

    async cancel(req, res) {
        const {id} = req.body;
        try{
            const quotation = await this.QuotationService.cancel(id);
            res.status(200).json(quotation);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    } 

    async findAllByRequest(req, res) {
        const {id} = req.body;
        try{
            const allReq = await this.QuotationService.findAllByRequest(id);
            res.status(200).json(allReq);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }

    



}
module.exports = QuotationController;

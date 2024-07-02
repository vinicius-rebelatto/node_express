// ./services/SupplieroService.js
const purchaseService = require('../services/purchaseService');//Classe
const PurchaseService = new purchaseService(db.Quotation);//Contrução do objeto


class EndPurchaseService {
    constructor(Purchase) {
        this.Purchase = Purchase;
    }

    async create(purchaseid, parcelas) {
        try{
            const quote = await QuotationService.findById(purchaseid);
            const newPurchase = await this.Purchase.create(
                {
                    reqid: reqid,
                    productid: productid,
                    qtdReq: qtdReq,
                    status: 'pendente'
                }
            );
            return newPurchase ? newPurchase : null
        }
        catch(error){
            throw error;
        }
    }

    
}

module.exports = EndPurchaseService;
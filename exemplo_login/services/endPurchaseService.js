// ./services/SupplieroService.js
const db = require('../models');
const purchaseService = require('../services/purchaseService');//Classe
const PurchaseService = new purchaseService(db.Purchase);//Contrução do objeto


class EndPurchaseService {
    constructor(EndPurchase) {
        this.EndPurchase = EndPurchase;
    }

    async create(purchaseid, parcelas) {
        try{
            const purchase = await PurchaseService.findById(purchaseid);
            const newPurchase = await this.EndPurchase.create(
                {
                    purchaseId: purchaseid,
                    productid: purchase.productid,
                    qtdReq: purchase.qtdReq,
                    unitPrice: purchase.unitPrice,
                    parcelas: parcelas,
                    fiscalNote: purchaseid
                }
            );
            purchase.status = 'encerrado';
            await purchase.save();
            return newPurchase ? newPurchase : null
        }
        catch(error){
            throw error;
        }
    }

    
}

module.exports = EndPurchaseService;
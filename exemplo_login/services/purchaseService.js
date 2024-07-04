

class PurchaseService {
    constructor(Purchase) {
        this.Purchase = Purchase;
    }

    async create(reqid, productid, qtdReq) {
        try{
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

    async close(quote) {
        try{
            const purchase = await this.findByRequest(quote.reqid);
            purchase.supplierid = quote.supplierid;
            purchase.status = 'encerrado';
            purchase.unitPrice = quote.unitPrice;
            await purchase.save();
            return purchase;
        }
        catch(error){
            throw error;
        }
    }

    async findByRequest(reqid){
        try{
            const request = await this.Purchase.findOne({ where: { reqid: reqid } });
            return request;
        }
        catch(error)
        {
            throw error;
        }
    }

    async findById(id) {
        try {
            const purchase = await this.Purchase.findByPk(id);
            return purchase;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = PurchaseService;
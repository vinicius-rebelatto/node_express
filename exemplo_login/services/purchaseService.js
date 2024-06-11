// ./services/SupplieroService.js

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

    async update(supplierId , nome, telephone) {
        try{
            const supplier = await this.Supplier.findOne({ where: { id: supplierId } });
            supplier.name = nome;                
            if (telephone === null) {
                supplier.telephone;
            }else{
                supplier.telephone = telephone;
            }
            await supplier.save();
            return supplier;
        }
        catch(error){
            throw error;
        }
    }

    async findById(id) {
        try{
            const supplier = await this.Supplier.findByPk(id);
            return supplier ? supplier : null;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = PurchaseService;
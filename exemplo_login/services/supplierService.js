// ./services/SupplieroService.js

class SupplierService {
    constructor(Supplier) {
        this.Supplier = Supplier;
    }

    async create(nome, telephone) {
        try{
            const newSupplier = await this.Supplier.create(
                {
                    name: nome,
                    telephone: telephone
                }
            );
            return newSupplier ? newSupplier : null
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
}

module.exports = SupplierService;
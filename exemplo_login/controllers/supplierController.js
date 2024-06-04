// ./controllers/depositoController.js

class supplierController {
    constructor(SupplierService) {
        this.SupplierService = SupplierService;
    }


    async Create(req, res) {
        const {nome, telephone} = req.body;
        try{
            const newSupplier = await this.SupplierService.create(nome, telephone);
            res.status(200).json(newSupplier);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao criar novo Fornecedor'});
        }
    }

    async update(req, res) {
        const {supplierId , nome, telephone} = req.body;
        try{
            const supplier = await this.SupplierService.update(supplierId , nome, telephone);
            res.status(200).json(supplier);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

    /*async withdraw(req, res) {
        const {supplierId, value} = req.body;
        try{
            const supplier = await this.SupplierService.withdraw(supplierId, value);
            res.status(200).json(supplier);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }*/

}
module.exports = supplierController;

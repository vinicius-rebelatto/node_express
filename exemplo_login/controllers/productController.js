// ./controllers/depositoController.js

class ProductController {
    constructor(productService) {
        this.productService = productService;
    }


    async Create(req, res) {
        const {nome} = req.body;
        try{
            const newProduct = await this.productService.create(nome);
            res.status(200).json(newProduct);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }

    async update(req, res) {
        const {productId, nome, ativo} = req.body;
        try{
            const product = await this.productService.update(productId, nome, ativo);
            res.status(200).json(product);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

    async findAll(req,res){
        //const {login, senha} = req.body;
        try
        {
            const allProducts = await this.productService.findAll();
            res.status(200).json(allProducts);
        }
        catch (erro)
        {
            res.status(500).json({error: erro.message})
        }
    }

    async findById(req, res) {
        const {productId} = req.body;
        try{
            const product = await this.productService.findById(productId);
            res.status(200).json(product);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
            //res.status(500).json({error: 'Erro ao atualizar depósito'})
        }
    }

}
module.exports = ProductController;

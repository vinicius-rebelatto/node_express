// ./services/productoService.js

class ProductService {
    constructor(Product) {
        this.Product = Product;
    }

    async create(nome) {
        try{
            const newProduct = await this.Product.create(
                {
                    nome:nome,
                    ativo:true
                }
            );
            return newProduct ? newProduct : null
        }
        catch(error){
            throw error;
        }
    }

    async update(productId , nome, ativo) {
        try{
            const product = await this.Product.findOne({ where: { id: productId } });
            product.nome = nome;
            product.ativo = ativo;
            await product.save();
        }
        catch(error){
            throw error;
        }
    }

    async findAll(){
        try{
            const allProducts = await this.Product.findAll();
            return allProducts? allProducts: null;
        }
        catch(error)
        {
            throw error;
        }
    }

    async findById(productoId) {
        try{
            const product = await this.Product.findByPk(productoId);
            return product ? product : null;
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = ProductService;
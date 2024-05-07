// ./services/stockService.js

class StockService {
    constructor(stockModel, productModel) {
        this.stockModel = stockModel;
        this.productModel = productModel;
    }

    async addProductToStock(productId, quantity) {
        // Adiciona um produto ao estoque
        const product = await this.productModel.findByPk(productId);
        if (!product) {
            throw new Error('Produto não encontrado');
        }

        const stockItem = await this.stockModel.findOne({ where: { productId } });
        if (stockItem) {
            stockItem.quantidade += quantity;
            await stockItem.save();
        } else {
            await this.stockModel.create({ productId, quantidade: quantity });
        }
    }

    async removeProductFromStock(productId, quantity) {
        // Remove um produto do estoque
        const stockItem = await this.stockModel.findOne({ where: { productId } });
        if (!stockItem || stockItem.quantidade < quantity) {
            throw new Error('Estoque insuficiente');
        }

        stockItem.quantidade -= quantity;
        await stockItem.save();
    }
}

module.exports = StockService;
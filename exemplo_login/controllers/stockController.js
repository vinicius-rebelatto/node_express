// ./controllers/stockController.js

class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }

    async addProductToStock(req, res) {
        const { productId, quantity } = req.body;
        try {
            await this.stockService.addProductToStock(productId, quantity);
            res.status(200).send({ message: 'Produto adicionado ao estoque com sucesso.' });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }

    async removeProductFromStock(req, res) {
        const { productId, quantity } = req.body;
        try {
            await this.stockService.removeProductFromStock(productId, quantity);
            res.status(200).send({ message: 'Produto removido do estoque com sucesso.' });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
}

module.exports = StockController;

// ./services/ReqCompraoService.js
const db = require('../models');
const productService = require('./productService');//Classe
const ProductService = new productService(db.Product);//Contrução do objeto
const supplierService = require('./supplierService');//Classe
const SupplierService = new supplierService(db.Supplier);//Contrução do objeto


class QuotationService {
    constructor(Quotation) {
        this.Quotation = Quotation;
    }

    async create(reqid, productid, supplierid, unitPrice, validUntil) {
        try{
            const quote = await this.Quotation.create(
                {
                    reqid: reqid,
                    productid: productid,
                    supplierid: supplierid,
                    unitPrice: unitPrice,
                    validUntil: validUntil
                }
                
            );
            const product = await ProductService.findById(productid);
            const supplier = await SupplierService.findById(supplierid);
            quote.supplierid = supplier.name;
            quote.productid = product.nome;
            const allQuotes = this.findByRequest(reqid);
            if (this.validateQuotations(allQuotes)) {
                return allQuotes[0];
            }
            else {
                return quote ? quote : null
            }
        }
        catch(error){
            throw error;
        }
    }

    async cancel(id) {
        try {
            const deletedRows = await this.Quotation.destroy({
                where: {
                    id: id
                }
            });

            if (deletedRows > 0) {
                return { message: 'Registro excluído com sucesso!' };
            } else {
                return { message: 'Nenhum registro encontrado para o ID informado.' };
            }
        } catch (error) {
            throw error;
        }
    }

    async findByRequest(reqid){
        try{
            const allQuotes = await this.Quotation.findAll({
                where: {
                    reqid: reqid
                },
                order: [
                    ['unitPrice', 'ASC']
                ]
            });
            return allQuotes;
        }
        catch(error)
        {
            throw error;
        }
    }

    async validateQuotations(quotes) {//Precisa ser finalizado o módulo de compras antes
        try {    
            if (quotes && quotes.length >= 3) {
                return true; // Retorna a cotação com o menor valor unitário
            } else {
                return false;
            }
        } catch (error) {
            throw error;
        }
    }
    

    
    
}

module.exports = QuotationService;
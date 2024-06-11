// ./controllers/ReqCompraController.js
const db = require('../models');
const purchaseService = require('../services/purchaseService');//Classe
const PurchaseService = new purchaseService(db.Purchase);//Contrução do objeto

class ReqCompraController {
    constructor(ReqCompraService) {
        this.ReqCompraService = ReqCompraService;
    }


    async create(req, res) {
        const {userid, productid, qtd, coastcenterid} = req.body;
        try{
            const novoReqCompra = await this.ReqCompraService.create(userid, productid, qtd, coastcenterid);
            const purchase = await PurchaseService.create(novoReqCompra.id, productid, qtd)
            res.status(200).json({novoReqCompra, purchase});
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }
    

    async cancel(req, res) {
        const {reqid} = req.body;
        try{
            const ReqCompras = await this.ReqCompraService.cancel(reqid);
            res.status(200).json(ReqCompras);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    } 

    async findById(req, res) {
        const {reqid} = req.body;
        try{
            const ReqCompras = await this.ReqCompraService.findById(reqid);
            res.status(200).json(ReqCompras);
        }
        catch(erro){
            res.status(500).json({error: 'Erro ao buscar requisição'})
        }
    } 

    async findAll(req, res) {
        try{
            const { page = 1, limit = 10 } = req.query;
            const offset = (page - 1) * limit;
            const allReq = await this.ReqCompraService.findAll(limit, offset);
            res.status(200).json(allReq);
        }
        catch(erro){
            res.status(500).json({error: erro.message})
        }
    }

}
module.exports = ReqCompraController;

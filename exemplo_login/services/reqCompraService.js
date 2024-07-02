// ./services/ReqCompraoService.js
const db = require('../models');
const userService = require('../services/userService');//Classe
const UserService = new userService(db.User);//Contrução do objeto
const productService = require('../services/productService');//Classe
const ProductService = new productService(db.Product);//Contrução do objeto
const coastCenterService = require('../services/coastCenterService');//Classe
const CoastCenterService = new coastCenterService(db.CoastCenter);//Contrução do objeto



class ReqCompraService {
    constructor(ReqCompra, userService) {
        this.ReqCompra = ReqCompra;
        this.User = userService;
    }

    async create(userid, productid, qtd, coastcenterid) {
        try{
            const newReqCompra = await this.ReqCompra.create(
                {
                    userid: userid,
                    productid: productid,
                    qtdReq: qtd,
                    coastcenterid: coastcenterid
                }
                
            );
            const user = await UserService.localizaPeloID(userid);
            const product = await ProductService.findById(productid);
            const coastCenter = await CoastCenterService.findById(coastcenterid);
            newReqCompra.userid = user.nome;
            newReqCompra.productid = product.nome;
            newReqCompra.coastcenterid = coastCenter.name;
            
            return newReqCompra ? newReqCompra : null
        }
        catch(error){
            throw error;
        }
    }

    async cancel(reqid) {
        try {
            const deletedRows = await this.ReqCompra.destroy({
                where: {
                    id: reqid
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
    async findById(reqid) {
        try{
            const request = await this.ReqCompra.findByPk(reqid);
            return request ? request : null;
        }
        catch(error){
            throw error;
        }
    }

    async findAll(limit, offset){
        try{
            const allRequests = await this.ReqCompra.findAll({
                limit: Number(limit),
                offset: Number(offset)
            });
            return allRequests? allRequests: null;
        }
        catch(error)
        {
            throw error;
        }
    }
    

    //Pode ser interessante ser implementado
    /*async nominate(ReqCompra) {
        try {
            const deletedRows = await this.ReqCompra.destroy({
                where: {
                    id: reqid
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
    }*/

    
}

module.exports = ReqCompraService;
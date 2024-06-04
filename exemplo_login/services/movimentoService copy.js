// ./services/MovimentooService.js
const { Op } = require('sequelize');

class MovimentoService {
    constructor(Movimento) {
        this.Movimento = Movimento;
    }

    async validadeOutput(depositoid, productid, qtd) {
        try {
            const movimentos = await this.Movimento.findAll({
                where: {
                    depositoid: depositoid,
                    productid: productid
                }
            });

            let total = 0;
            for (let movimento of movimentos) {
                total += movimento.tipo === 'entrada' ? movimento.qtd : -movimento.qtd;
            }

            if (total - qtd < 0) {
                throw new Error('A quantidade de saída é maior do que a quantidade disponível no depósito.');
            }
        } catch (error) {
            throw error;
        }
    }

    async create(depositoid, productid, tipo, qtd, precoUni, data) {
        try{
            if (tipo === 'saida') {
                await this.validadeOutput(depositoid, productid, qtd);
            }

            const newMovimento = await this.Movimento.create(
                {
                    depositoid: depositoid,
                    productid: productid,
                    tipo: tipo,
                    qtd: qtd,
                    precounitario: precoUni,
                    data: data
                }
            );
            return newMovimento ? newMovimento : null
        }
        catch(error){
            throw error;
        }
    }

    async findByProduct(productid) {
        try {
            const movimentos = await this.Movimento.findAll({
                where: {
                    productid: productid
                }
            });
            return movimentos;
        } catch (error) {
            throw error;
        }
    }

    async findByDeposito(depositoid) {
        try {
            const movimentos = await this.Movimento.findAll({
                where: {
                    depositoid: depositoid
                }
            });
            return movimentos;
        } catch (error) {
            throw error;
        }
    }

    async findByDate(startDate, endDate) {
        try {
            const movimentos = await this.Movimento.findAll({
                where: {
                    data: {
                        [Op.between]: [startDate, endDate],
                    },
                },
            });
            return movimentos;
        } catch (error) {
            throw error;
        }
    }

    async findProductByDeposito(productid, depositoid) {//Falta terminar essa função, pois será utilizada em vendas.
        try {
            const movimentos = await this.Movimento.findAll({
                attributes: ['qtd', 'tipo'],
                where: {
                    productid,
                    depositoid,
                },
            });
            return movimentos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MovimentoService;
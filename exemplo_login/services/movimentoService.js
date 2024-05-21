// ./services/MovimentooService.js

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

    async create(depositoid, productid, tipo, qtd, precoUni) {
        try{
            if (tipo === 'saida') {
                await this.validadeOutput(depositoid, productid, tipo, qtd);
            }

            const newMovimento = await this.Movimento.create(
                {
                    depositoid: depositoid,
                    productid: productid,
                    tipo: tipo,
                    qtd: qtd,
                    precounitario: precoUni
                }
            );
            return newMovimento ? newMovimento : null
        }
        catch(error){
            throw error;
        }
    }
}

module.exports = MovimentoService;
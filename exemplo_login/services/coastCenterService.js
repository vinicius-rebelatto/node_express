// ./services/CoastCenteroService.js

class CoastCenterService {
    constructor(CoastCenter) {
        this.CoastCenter = CoastCenter;
    }

    async create(nome) {
        try{
            const newCoastCenter = await this.CoastCenter.create(
                {
                    name:nome,
                    balance: 0
                }
            );
            return newCoastCenter ? newCoastCenter : null
        }
        catch(error){
            throw error;
        }
    }

    async deposit(CoastCenterId , value) {
        try{
            const coastCenter = await this.CoastCenter.findOne({ where: { id: CoastCenterId } });
            if (value >= 0) {
                coastCenter.balance += value;
                await coastCenter.save();
                return coastCenter;
            }else{
                console.log("Não foi dessa vez amigo");
            }
        }
        catch(error){
            throw error;
        }
    }

    async withdraw(CoastCenterId , value) {
        try{
            const coastCenter = await this.CoastCenter.findOne({ where: { id: CoastCenterId } });
            if (value <= 0){
                throw console.log("Não é possível sacar valor negativo");
            }else if(value > coastCenter.balance){
                throw console.log("Não é possível sacar mais do que o saldo em conta");
            }
            coastCenter.balance -= value;
            await coastCenter.save();
            return coastCenter;
        }
        catch(error){
            throw error();
        }
    }
 
    /*async findAll(){
        try{
            const allCoastCenters = await this.CoastCenter.findAll();
            return allCoastCenters? allCoastCenters: null;
        }
        catch(error)
        {
            throw error;
        }
    }

    async findById(CoastCenteroId) {
        try{
            const CoastCenter = await this.CoastCenter.findByPk(CoastCenteroId);
            return CoastCenter ? CoastCenter : null;
        }
        catch(error){
            throw error;
        }
    }*/
}

module.exports = CoastCenterService;
class CrudRepository {

    constructor(model) {
        this.model = model
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong with repo layer")
            throw {error}
        }
    }

    async destroy(modelid) {
        try {
            const result = await this.model.destroy(modelid)
            return true;
        } catch (error) {
            console.log("Somethin went wrong with repo layer")
            throw {error}
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Somethin went wrong with repo layer")
            throw {error}
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("somethin went wrong with repo layer");
            throw {error}
        }
    }


    async update(data, modelId) {
        try {
            const result = await this.model.update(data,{
                where : {
                    id : modelId
                }
            })
        } catch (error) {
            console.log("somethin went wrong with repo layer")
            throw {error}
        }
    }

}

module.exports = CrudRepository;
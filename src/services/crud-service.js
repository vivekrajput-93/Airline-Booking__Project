class CrudService{

    constructor(repository) {
        this.repository = repository
    }

    async create(data) {
        try {
            const response  = await this.repository.create(data);
            return response
        } catch (error) {
            console.log("something went wrong with service layer");
            throw {error}
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return true
        } catch (error) {
            console.log("somethin went wrong with service layer")
            throw {error}
        }
    }


    async get(id) {
        try {
            const response = await this.repository.get(id)
            return response
        } catch (error) {
            console.log("somethin went wrong with service layer")
            throw {error}
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response
        } catch (error) {
            console.log("somethin went wrong with service layer");
            throw {error}
        }
    }


    async update(data, id) {
        try {
            const response = await this.repository.update(data, {
                where : {
                    id : id
                }
            })
        } catch (error) {
            console.log("somethin went wrong with service layer")
            throw {error}
        }
    }
}

module.exports = CrudService
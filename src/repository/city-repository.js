const {City} = require("../models/index")


class CityRepository {
    async createCity({name}) {
        try {
            
            const city = await City.create({name});


        } catch (error) {
            throw {error}
        }
    }

    async DeleteCity({cityId}) {
        try {
          await  City.destroy({
            where : {
                id : cityId
            }
          })

        } catch (error) {
            throw {error}
        }
    }
}

module.exports = CityRepository;
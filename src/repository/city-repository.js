const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
        console.log("Something went wrong in the repository level.")
      throw { error };
    }
  }

  async DeleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
        console.log("Something went wrong in the repository level.")
      throw { error };
    }
  }


  async UpdateCity(cityId, data) {
     try {
        
        const city = await City.update(data, {
            where : {
                id : cityId
            }
        })

        return city
     } catch (error) {
        console.log("Something went wrong in the repository level.")
        throw {error}
     }
  }

  async GetCity({cityId}) {
    try {
        const city = await City.findByPk({
            cityId
        });
        return city;
    } catch (error) {
        console.log("Something went wrong in the repository level.")
        throw {error}
    }
  }

}

module.exports = CityRepository;

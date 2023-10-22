// Service Perfomrs bussiness logic on the data on passed by the controllers


const { CityRepo } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepo = new CityRepo();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepo.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the service level.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await this.cityRepo.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepo.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepo.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }
}

module.exports = CityService;

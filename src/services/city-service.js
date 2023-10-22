const { CityRepo } = require("../repository/index");

class CityService {
  Constructor() {
    this.CityRepo = new CityRepo();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepo.createCity(data);

      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const city = await this.CityRepo.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepo.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepo.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository level.");
      throw { error };
    }
  }
}

module.exports = CityService;

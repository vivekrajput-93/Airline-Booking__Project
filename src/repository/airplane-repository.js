const {Airplane} = require("../models/index");


class AirplaneRepositpory {
    
    async getAirplane(id) {
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Somethin went wrong at repo layer")
            throw {error}
        }
    }
}

module.exports = AirplaneRepositpory;
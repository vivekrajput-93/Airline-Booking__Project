const { AirplaneRepository, FlightRepository } = require("../repository/index");
const { comapreTime } = require("../utils/helper");


class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!comapreTime(data.arrivalTime, data.departureTime ))  {
                throw {error : "Arrival time should not be less than departure time"}
            }
        
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

}

module.exports = FlightService;


/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 *  arrivalTime
 * departureTime
 * price
 * boardingGate
 * totalSeats
 */
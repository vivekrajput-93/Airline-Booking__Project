const {AirportService} = require("../services/index")

const airportSerive = new AirportService();

const create = async(req,res) => {
    try {
        const flightRequestData = {
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price 
        }
        const response = await airportSerive.create(flightRequestData);

        return res.status(201).json({
            data : response,
            success: true,
            message : "Successfully create a airport",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a airport",
            err : error
        })
        
    }
}




module.exports = {
    create
}
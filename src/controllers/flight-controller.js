const { FlightService } = require("../services/index");
const { SucccessCode } = require("../utils/error-code");


const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SucccessCode.CREATED).send({
            data : flight,
            success : true,
            message : "Successfully created a Flight",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            data : {},
            success :false,
            message : "Not able to create a flight",
            err : error
        })
    }
}


const getAll = async(req,res) =>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SucccessCode.OK).json({
            data : response,
            success:true,
            message : "Successfully the fetched the flights",
            err : {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            data : {},
            success:false,
            message : "Not able to fectch the flights",
            err : error
              
        })
    }
}

module.exports = {
    create,
    getAll
}
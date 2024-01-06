const { FlightService } = require("../services/index");
const { SuccessCode } = require("../utils/error-code");


const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCode.CREATED).send({
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
        return res.status(SuccessCode.OK).json({
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


const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCode.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}



module.exports = {
    create,
    getAll,
    get
}
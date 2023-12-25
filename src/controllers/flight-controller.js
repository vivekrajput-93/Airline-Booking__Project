const { FlightService } = require("../services/index");


const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).send({
            data : flight,
            success : true,
            message : "Successfully created a Fligt",
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

module.exports = {
    create
}
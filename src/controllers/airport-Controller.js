const {AirportService} = require("../services/index")

const airportSerive = new AirportService();

const create = async(req,res) => {
    try {
        const response = await airportSerive.create(req.body);

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
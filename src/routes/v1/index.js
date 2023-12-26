const express = require("express");
const CityController = require("../../controllers/city-Controllers")
const  FlightController  = require("../../controllers/flight-controller")
const AirportController = require("../../controllers/airport-Controller")

const {Flightmiddleware} = require("../../middlewares/index")


const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

// fligts api

router.post("/flights", Flightmiddleware.validateCreateFlight, FlightController.create)

router.get("/flights", FlightController.getAll)

// airport 
router.post("/airports", AirportController.create)



module.exports = router;

import { Router } from "express"
const router = Router()
import * as flightsCtrl from "../controllers/flights.js"

//GET /flights
router.get("/", flightsCtrl.index)

// GET request flights/new
router.get("/new", flightsCtrl.new)

router.get("/:id", flightsCtrl.show)

router.get("/:id/edit", flightsCtrl.edit)

//POST /flights
router.post("/", flightsCtrl.create)

router.put("/:id", flightsCtrl.update)

router.delete("/:id", flightsCtrl.delete)

router.post("/:id/tickets", flightsCtrl.createTicket)

router.post("/:id/meals", flightsCrtrl.createMeal)

export {
  router
}

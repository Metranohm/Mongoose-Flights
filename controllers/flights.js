import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Movie',
  })
  console.log('look at me')
}

export {
  newFlight as new
}
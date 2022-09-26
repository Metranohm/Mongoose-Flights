import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
  console.log('look at me')
}

function create(req, res) {
  Flight.create(req.body.airline)
    .then(flight => {
      res.redirect('/flights')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights/new')
    })
}

export {
  newFlight as new,
  create
}
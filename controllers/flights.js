import { Flight } from '../models/flight.js'

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight',
  })
}

function create(req, res) {
  console.log('UNIQUE INTRO****', req.body)
  Flight.create(req.body)
  
    .then(flight => {
      console.log('unique one #2', flight)
      res.redirect('/flights')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights/new')
    })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights'
    })
  }) 
}

export {
  newFlight as new,
  create, 
  index
}
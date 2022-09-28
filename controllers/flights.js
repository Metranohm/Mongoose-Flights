import { Flight } from "../models/flight.js"
import { Meal } from '../models/meal.js'

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

function create(req, res) {
  console.log(req.body)
  Flight.create(req.body)
  
    .then(flight => {
      res.redirect("/flights")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/flights/new")
    })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights"
    })
  }) 
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('food')
  .then(flight => {
    Meal.find({_id: {$nin: flight.food}})
    .then(meals => {
      res.render("flights/show", {
        title: "Flight Detail",
        flight: flight,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })  
})

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect("/flights")
  })
}

function edit(req, res) {
  console.log("***IS THIS WORKING???!!!******EDIT****")
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  console.log("***IS THIS WORKING???!!!******UPDATE****")
  Flight.findByIdAndUpdate(req.params.id, req.body,{ new: true })
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
}

function addToFood(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.food.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create, 
  index,
  show, 
  deleteFlight as delete,
  edit,
  update,
  createTicket, 
  addToFood
}
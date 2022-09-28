import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  console.log('******NEWMEAL NEWMEAL *******')
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
}

function create(req, res) {
  console.log('******CREATEMEAL *******')
  Meal.create(req.body)
  .then(meal => { 
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create
}
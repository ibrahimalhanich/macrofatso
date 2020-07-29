const Meal = require('../models/meal');

module.exports = {
  viewMeal,
};

function viewMeal(req, res, next) {
  // const  await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&maxFat=${maxFat}&maxCarbs=${maxCarbs}&maxProtein=${maxProtein}&number=10`)).json();
  console.log(req.query);
  // console.log(req.body);
  // console.log(req);
  res.json([]);
}
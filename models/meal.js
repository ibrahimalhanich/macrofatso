const mongoose = require('mongoose');



const mealSchema = new mongoose.Schema({
  name: String,
  id: Number,
  image: String,
})

module.exports = mongoose.model('Meal', mealSchema);
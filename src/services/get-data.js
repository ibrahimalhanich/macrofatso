import React from 'react';
import { Redirect } from 'react-router-dom';


export async function getData(key, query, maxCalories, maxFat, maxCarbs, maxProtein) {
  // return <Redirect to='/meals' />
  return await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&maxCalories=${maxCalories}&maxFat=${maxFat}&maxCarbs=${maxCarbs}&maxProtein=${maxProtein}&addRecipeInformation=true&number=10`)).json();
  // return await (await fetch(`/api/meals?query=${query}&maxCalories=${maxCalories}&maxFat=${maxFat}&maxCarbs=${maxCarbs}&maxProtein=${maxProtein}&number=10`)).json();



}

// wanna redirect them here and have the controller of recipes.js or whatever actually fetch the data
// from the api endpoint

//use this to route to our own route, in that route fetch the API endpoint
//in the controller function map over the results array and store each object
//in our own DB, so that when you click on one of these it takes you 
//to the right place

//...sounds easy right?
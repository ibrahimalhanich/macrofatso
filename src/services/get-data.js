export async function getData(key, query, maxFat, maxCarbs, maxProtein) {
  return await (await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&maxFat=${maxFat}&maxCarbs=${maxCarbs}&maxProtein=${maxProtein}&number=10`)).json();
}

// wanna redirect them here and have the controller of recipes.js or whatever actually fetch the data
// from the api endpoint
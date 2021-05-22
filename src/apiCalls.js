// Your fetch requests will live here!
// const apiCalls =

// console.log('I will be a fetch request!')

export function getUsers() {
fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(response => console.log("succcess"))
// .then(data => console.log(data))
.catch(err => console.log("Sorry, that user was not found"))
}


export function getRecipes() {
fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(response => console.log("succcess"))
.catch(err => console.log("Sorry, that recipe was not found"))
}

// getRecipes();

export function getIngredients() {
fetch('http://localhost:3001/api/v1/ingredients')
.then(response => response.json())
.then(response => console.log("succcess"))
.catch(err => console.log("Sorry, that ingredient was not found"))
}

// getIngredients()


// export default {getUsers, getRecipes, getIngredients}

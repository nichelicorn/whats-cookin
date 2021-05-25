// const apiCalls =


// export const checkError = () => {
//   if(!response.ok) {
//     return "Sorry, that was not found."
//   } else {
//     return (response.json())
//   }
// }

export const getUsers = () => {
return fetch('http://localhost:3001/api/v1/users')
.then(response => response.json())
.then(usersData => {return usersData})
.catch(err => console.log("Sorry, that user was not found"))
}


export const getRecipes = () => {
return fetch('http://localhost:3001/api/v1/recipes')
.then(response => response.json())
.then(recipeData => {
  return recipeData
})
.catch(err => "Sorry, that recipe was not found")
}

export const getIngredients = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
  .then(response => response.json())
  .then(ingredientsData => {return ingredientsData})
  .catch(err => "Sorry, that ingredient was not found")
}

// export function getAPIData() {
//   console.log(Promise.all([getUsers(), getRecipes(), getIngredients()]));
//   return Promise.all([getUsers(), getRecipes(), getIngredients()])
// }




export default {getUsers, getRecipes, getIngredients}

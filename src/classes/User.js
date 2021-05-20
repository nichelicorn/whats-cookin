class User {
  constructor(user) {
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []

  }

  addToFavorites(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeRecipeToCook(recipe) {
    if(this.recipesToCook.includes(recipe)) {
      this.recipesToCook.splice(recipe, 1)
    }
  }

  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }



}

export default User;


// Create classes and methods that can:
//
// Allow a user to favorite or unfavorite recipes (add to / remove from the user’s favoriteRecipes)
// Decide to cook a recipe that week (add to my recipesToCook)
// Filter my favoriteRecipes by one or more tags.
// Filter my favoriteRecipes by its name or ingredients.
//addToFavorites. push a whole recipe object
//push a recipe object into user.recipesToCook\
//filter favoriteRecipes by one or more tags
//filter favoriteRecipes by name or ingredients

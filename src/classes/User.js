class User {
  constructor(name, id, pantry) {
    this.name = name
    this.id = id
    this.pantry = pantry
    this.favoriteRecipes = []
    this.recipesToCook = []

  }

  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavorites(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.splice(recipe, 1)
    }
  }

  addRecipeToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }

  removeRecipeToCook(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      this.recipesToCook.splice(recipe, 1)
    }
  }

  filterFavoriteRecipes(entry) {
    let filteredEntry = this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(entry) || recipe.name.includes(entry)
    })
    return filteredEntry
  }

  filterFavoriteRecipesIng(ingredient) {
    let filterIngredient = this.favoriteRecipes.filter(recipe => {
      return recipe.ingredientNames.includes(ingredient)
    })
    return filterIngredient
  }







}

export default User;

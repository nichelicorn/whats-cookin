import {
  ingredientsData
} from '../data/ingredients';
import Ingredient from '../classes/Ingredient.js';

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id
    this.image = recipe.image
    this.recipeIngredients = recipe.ingredients
    this.instructions = recipe.instructions
    this.name = recipe.name
    this.tags = recipe.tags
    this.ingredientNames = []
    this.ingredientsData = ingredientsData

  }

  returnInstructions() {
    return this.instructions;
  }

  returnIngredients() {
    console.log(this.recipeIngredients)
    return this.recipeIngredients
  }

  returnIngredientNames() {
  let getIngredients = this.recipeIngredients.reduce((arr, ingredient) => {
      let foundIng = this.ingredientsData.find(ing => (ingredient.id === ing.id))
      arr.push(foundIng)
      return arr
    }, []).forEach(ingred => {
      return this.ingredientNames.push(ingred.name)
    });
    return this.ingredientNames

}

calculateCost() {
  console.log(this.ingredientNames)


}

// It should have methods to:
// Determine the names of ingredients needed
// Get the cost of its ingredients
// Return its directions / instructions

}







export default Recipe;

import {
  ingredientsData
} from '../data/ingredients';
import { recipeData } from '../data/recipes.js';
import Ingredient from '../classes/Ingredient.js';

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id
    this.image = recipe.image
    this.recipeIngredients = recipe.ingredients
    this.instructions = recipe.instructions
    this.name = recipe.name.toLowerCase();
    this.tags = recipe.tags
    this.ingredientNames = []
  }

  updateEachRecipeIngredients(ingredientsData) {
    let matchNames = this.recipeIngredients.reduce((arr, ingredient) => {
      let foundIng = ingredientsData.find(ing => (ingredient.id === ing.id))
      ingredient.name = foundIng.name
      ingredient.estimatedCostInCents = foundIng.estimatedCostInCents
      arr.push(ingredient)
      return arr
    }, [])
    this.recipeIngredients = matchNames
  }



  returnInstructions() {
    return this.instructions;
  }

  returnIngredients() {
    return this.recipeIngredients
  }

  returnIngredientNames() {
    let getNames = this.recipeIngredients.map(ingredient => {
      return ingredient.name

    })
    this.ingredientNames = getNames
    return this.ingredientNames
  }

  calculateCost(ingredientsData) {
    let costCount = 0;
    this.recipeIngredients.forEach(ingredient => {
      costCount += (ingredient.estimatedCostInCents *
       ingredient.quantity.amount)
    })

    let finalCost = costCount/100
    return `$${finalCost}`


  }


}




export default Recipe;

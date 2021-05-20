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
    // this.ingredientsData = ingredientsData

  }
//iterate through each ingredient in the this.recipeIngredients data set/array using forEach
// for each ingredient in the recipe array, i want to add new key/value pairs that will
// add names and cost to the ingredients in each recipe
// i need to go through each item in the ingredients list for each recipe, and modify
// each object.
//I expect to return/receive the same amount of object in the recipe ingredients list

  updateEachRecipeIngredients(ingredientsData) {
    let matchNames = this.recipeIngredients.reduce((arr, ingredient) => {
      let foundIng = ingredientsData.find(ing => (ingredient.id === ing.id))
              ingredient.name = foundIng.name
              ingredient.estimatedCostInCents = foundIng.estimatedCostInCents
              arr.push(ingredient)
              // console.log("foundIng", foundIng)
              // console.log("ingredeitn", ingredient)
            return arr
  }, [])
    this.recipeIngredients = matchNames
    // console.log('testMatchNames', matchNames)
}



  returnInstructions() {
    // console.log("allInstr", this.instructions)
    return this.instructions;
  }

  returnIngredients() {
    // console.log("allIngs", this.recipeIngredients)
    return this.recipeIngredients
  }

  returnIngredientNames(ingredientsData) {
    let getIngredients = this.recipeIngredients.reduce((arr, ingredient) => {
      let foundIng = ingredientsData.find(ing => (ingredient.id === ing.id))
      arr.push(foundIng)

      return arr
    }, []).forEach(ingred => {
       this.ingredientNames.push(ingred.name)

    });

    console.log("test1", this.ingredientNames)
    return this.ingredientNames
  }

  calculateCost(ingredientsData) {
    let costCount = 0;
    this.recipeIngredients.forEach(ingredient => {
      ingredientsData.find(specificIng => {
        if (specificIng.id === ingredient.id) {
          costCount += specificIng.estimatedCostInCents * ingredient.quantity.amount
        }
      })
    });
    // console.log('cost', costCount)
    return `$${costCount/100}`


  }


}




export default Recipe;

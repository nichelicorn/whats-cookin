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
    // console.log("allInstr", this.instructions)
    return this.instructions;
  }

  returnIngredients() {
    // console.log("allIngs", this.recipeIngredients)
    return this.recipeIngredients
  }

  returnIngredientNames() {
    let getIngredients = this.recipeIngredients.reduce((arr, ingredient) => {
      let foundIng = this.ingredientsData.find(ing => (ingredient.id === ing.id))
      arr.push(foundIng)
      return arr
    }, []);

    let allNames = getIngredients.forEach(ingred => {
      return this.ingredientNames.push(ingred.name)

    });
    // console.log("test1", this.ingredientNames)
    return this.ingredientNames

  }

  calculateCost() {
    let costCount = 0;
    this.recipeIngredients.forEach(ingredient => {
      this.ingredientsData.find(specificIng => {
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

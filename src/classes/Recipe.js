import { ingredientsData } from '../data/ingredients';
import Ingredient from '../classes/Ingredient.js';

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id
    this.image = image
    this.ingredients = [] // will bring in JSON data
    this.instructions = instructions
    this.name = name
    this.tags = tags
    this.cost = 0

  }
}


export default Recipe;

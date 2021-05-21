import {
  recipeData
} from '../data/recipes.js';

import Recipe from '../classes/Recipe.js';
import Ingredient from '../classes/Ingredient.js';


class Cookbook {
  constructor(recipes) {
    this.recipes = recipes
  }

  filterByTag(tagsSearched) {
    let findTag = this.recipes.filter(recipe => recipe.tags.some(tag => tagsSearched.includes(tag.toLowerCase())))
    return findTag

  }


  filterByName(filtName) {
    const filterNameResults = this.recipes.filter(recipe => {
      return recipe.name.includes(filtName);
    })
    return filterNameResults;
  }


  filterByIngredient(findIngredient) {
    let filterIngredient = this.recipes.filter(recipe => {
      return recipe.ingredientNames.some(name => name.includes(findIngredient.toLowerCase()))
    })
    return filterIngredient
  }

}

export default Cookbook;

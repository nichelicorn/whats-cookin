class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(filtTags) {
    const tagFilterResults = this.recipeData.filter(recipe => {
      return filtTags.some(tag => {
        return recipe.tags.includes(tag);
      })
    })
    return tagFilterResults;
  }

  filterByName(filtName) {
    const nameFilterResults = this.recipeData.filter(recipe => {
      return recipe.name.includes(filtName);
    })
    return nameFilterResults;
  }

  filterByIngredient(filtIngred) {
    // what am i trying to do?
    // filter through recipes
    // look at the recipe ingredients
    // compare the recipe ingredients to the filtIngred
    // if there is a match to any word, return the recipe object

    const ingrFilterResults = this.recipeData.filter(recipe => {
      console.log('filtIngred <>>>', filtIngred);
      // console.log('recipe <>>>', recipe);
      return filtIngred.some(ingred => {
        return recipe.ingredients.includes(ingred.toLowerCase());
      })
      // console.log('test result <>>>', recipe.ingredients.some(ingr => ingr.name.toLowerCase().includes(filtIngred)));
    })
    return ingrFilterResults;
  }
}

export default Cookbook;

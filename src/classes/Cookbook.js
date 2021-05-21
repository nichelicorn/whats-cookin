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

  filterByIngredient(filtIngr) {
    // filter through recipes
    // filter through the ingredient search params
    // filter through recipe.ingredients [{ name : }] to find out if there is a match in the two strings
    const ingrFilterResults = this.recipeData.filter(recipe => {
      return filtIngr.some(ingr => {
        console.log('recipe <>>>', recipe);
        // return recipe.ingredients
      })
    })
  }
}

export default Cookbook;

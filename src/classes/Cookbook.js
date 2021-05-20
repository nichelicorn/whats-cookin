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
      return recipe.ingredients.some(ingr => {
        console.log(ingr.name)
      })
        // if the ingr.name matches the filter, return the recipe
    })
    return ingrFilterResults;
  }
}


// console.log('filtIngred <>>>', filtIngred);
// console.log('recipe.ingredients<>>>', recipe.ingredients); // array of objects
// return filtIngred.some(ingred => {
  // return recipe.ingredients.filter(recipe => {
    // console.log('internal recipe <>>>', recipe);
    // })
    // let ingr = ingred.toLowerCase();
    // console.log('ingr <>>>', ingr); 
    // now i have
    // console.log('recipe.ingred.includes(ingr) <>>>', recipe.ingredients.includes(ingr)); // logs false
    // })

export default Cookbook;

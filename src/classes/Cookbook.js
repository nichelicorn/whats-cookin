class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tagArr) {
    const tagFilterResults = this.recipeData.filter(recipe => {
      return tagArr.some(tag => {
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
    const ingredFilterResults = this.recipeData.filter(recipe => {
      return filtIngred.some(ingr => {
        console.log('recipe.ingredients <>>>', recipe.ingredients);
        console.log('ingr lowerCase <>>>', ingr.toLowerCase());
        return recipe.ingredients.includes(ingr.toLowerCase());
      })
    })
    return ingredFilterResults;
  }
}

export default Cookbook;

class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tags) {
    const tagFilterResults = this.recipeData.filter((recipe) => {
      if (recipe.tags.includes(tags)) {
        // console.log('recipe <>>>', recipe);
        return recipe;
      }
    })
    return tagFilterResults;
  }
}

export default Cookbook;

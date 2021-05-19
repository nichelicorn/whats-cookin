class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tags) {
    // console.log('this.recipeData', this.recipeData);
    const tagFilterResults = this.recipeData.filter((recipe, i, arr) => {
      // what do i want to do here?
      // return an array of Recipe objects containing desired tags
      if (recipe.tags.includes(tags)) {
        console.log('recipe <>>>', recipe);
        return recipe;
      }
    })
    return tagFilterResults;
  }
}

export default Cookbook;

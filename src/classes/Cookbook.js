class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tagArr) {
    const tagFilterResults = this.recipeData.filter(recipe => { // filter through the recipe data, and for each recipe
      return tagArr.some(tag => {
        // if (!recipe.tags.includes(tag)) {
          // return [];
        // }
        // return a bool for the result of a comparison with the tagArr
        return recipe.tags.includes(tag); // return the recipe if the tag is found in the recipe.tags
      })
      // need to add a conditional to return an empty array if a matching tag is not found in the array
    })
    return tagFilterResults;
  }
}

export default Cookbook;

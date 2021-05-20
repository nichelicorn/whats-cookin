class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tagArr) { // tags are an array
    // can iterate through the recipeData and then iterate through the tags and return recipes that match the tags array
    console.log('recipes <>>>', this.recipeData);
    console.log('tagArr <>>>', tagArr); // only accepting 'breakfast'
    const tagFilterResults = this.recipeData.filter(recipe => {
      return tagArr.every(tag => {
        return recipe.tags.includes(tag);
      })

      // return recipe.tags.includes(tagArr);
      // if (recipe.tags.includes(tags)) {
      //   console.log('recipe <>>>', recipe);
      //   return recipe;
      // }
    })
    console.log('tagFilterResults <>>>', tagFilterResults);
    return tagFilterResults;
  }
}

export default Cookbook;

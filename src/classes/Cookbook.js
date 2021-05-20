class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tagArr) {
    // console.log('recipes <>>>', this.recipeData);
    console.log('tagArr <>>>', tagArr); // only accepting 'breakfast'
    const tagFilterResults = this.recipeData.filter(recipe => {
      return tagArr.some(tag => {
        return recipe.tags.includes(tag);
      })

      // return recipe.tags.includes(tagArr);
      // if (recipe.tags.includes(tagArr)) {
      //   console.log('recipe <>>>', recipe);
      //   return recipe;
      // }
    })
    console.log('tagFilterResults <>>>', tagFilterResults);
    return tagFilterResults;
  }
}

export default Cookbook;

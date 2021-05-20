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
    // console.log('filtName <>>>', filtName); // this is an array with a single string
    const nameFilterResults = this.recipeData.filter(recipe => {
      console.log('recipe.name <>>>', recipe.name); // this is a string
      if (recipe.name.includes(filtName)) {
        console.log('💩');
        return recipe;
      }
      // return recipe.name.toLowerCase().includes(filtName);
    })
    return nameFilterResults;
  }
}

export default Cookbook;

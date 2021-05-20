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

  filterByName(nameArr) {
    console.log('hi')
  }
}

export default Cookbook;

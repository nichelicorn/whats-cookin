class Cookbook {
  constructor(recipeData) {
    this.recipeData = recipeData;
  }

  filterByTag(tagArr) {
console.log('tagArr <>>>', tagArr);
    // console.log('this conditional does NOT work 🌚');
    const tagFilterResults = this.recipeData.filter(recipe => {
      return tagArr.some(tag => {
        return recipe.tags.includes(tag);
      })
    })
    return tagFilterResults;
  }
}

export default Cookbook;

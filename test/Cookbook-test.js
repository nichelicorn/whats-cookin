import {
  expect
} from 'chai';
import {
  testRecipes,
  testRecipeData,
  testIngredients
} from '../test/test-data';
import Cookbook from '../src/classes/Cookbook';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient.js';


describe('Cookbook', () => {
  let recipe1, recipe2, recipe3, testCookbook, allRecipes;

  beforeEach(() => {
    recipe1 = new Recipe(testRecipes[0], testIngredients);
    recipe2 = new Recipe(testRecipes[1], testIngredients);
    recipe3 = new Recipe(testRecipes[2], testIngredients);
    recipe1.updateEachRecipeIngredients(testIngredients);
    recipe2.updateEachRecipeIngredients(testIngredients);
    recipe3.updateEachRecipeIngredients(testIngredients);
    recipe1.returnIngredientNames(testIngredients);
    recipe2.returnIngredientNames(testIngredients);
    recipe3.returnIngredientNames(testIngredients);
    allRecipes = [recipe1, recipe2, recipe3]
    testCookbook = new Cookbook(allRecipes);
  })

  it('Should be a function', () => {
    expect(Cookbook).to.be.a('function');
  })

  it('should be an instance of Cookbook', () => {
    expect(testCookbook).to.be.an.instanceof(Cookbook);
  })

  describe('Cookbook properties', () => {

    it('Should be have a new recipe', () => {
      expect(testCookbook.recipes[0]).to.be.an.instanceof(Recipe);
    });
  })

  describe('Cookbook filter methods', () => {
    it('should filter by tags and return an array of recipes', () => {
      // console.log("CONSOLEMEEE", recipe1)
      expect(testCookbook.filterByTag('breakfast')).to.deep.equal([recipe1, recipe3]);
    })

    it('should be able to filter by more than one tag', () => {
      testCookbook.filterByTag('breakfast', 'appetizer');
      expect(testCookbook.filterByTag('breakfast', 'appetizer')).to.deep.equal([recipe1, recipe3]);
    })

    it('should return an empty array if no tags are found', () => {
      let tagSearch = testCookbook.filterByTag('dinner');
      expect(tagSearch).to.deep.equal([]);
    })

    it('should be able to search recipes by name', () => {
      let nameSearch = testCookbook.filterByName(['Avocado and Tomatillo Salsa']);
      expect(nameSearch).to.deep.equal([recipe2]);
    })

    it('should be able to search a part of a name', () => {
      let nameSearch = testCookbook.filterByName(['Fried']);
      console.log(nameSearch)
      expect(nameSearch).to.deep.equal([recipe1]);
    })

    it('should return an empty array if a name is not found', () => {
      let nameSearch = testCookbook.filterByName(['saffron']);
      expect(nameSearch).to.deep.equal([]);
    })

    it('should be able to search recipes by ingredient', () => {
      let ingrSearch = testCookbook.filterByIngredient('TOMATILLO');
      expect(ingrSearch).to.deep.equal([recipe2]);

    })

    it('should return all recipes containing a particular ingredient', () => {
      let ingrSearch = testCookbook.filterByIngredient('avocado');
      expect(ingrSearch).to.deep.equal([recipe1, recipe2])
    })

    it('should return an empty array if an ingredient is not found', () => {
      let ingrSearch = testCookbook.filterByIngredient('saffron');
      expect(ingrSearch).to.deep.equal([]);
    })
  })
})

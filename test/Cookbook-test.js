import { expect } from 'chai';
import Cookbook from '../src/classes/Cookbook';
import { testIngredients, testRecipes, testRecipeData } from '../test/test-data';

describe('Recipe Repository', () => {
  let recipe1, recipe2, recipe3, testData, testCookbook;

  beforeEach(() => {
    recipe1 = testRecipes[0];
    recipe2 = testRecipes[1];
    recipe3 = testRecipes[2];
    testData = testRecipeData;
    testCookbook = new Cookbook(testData);
  })

  it.skip('Should be a function', () => {
    expect(Cookbook).to.be.a('function');
  })

  it.skip('should be an instance of Cookbook', () => {
    expect(testCookbook).to.be.an.instanceof(Cookbook);
  })

  // 📔 Cookbook.constructor
  describe('Cookbook properties', () => {
    // it should take in recipe objects and add them to an array
    it.skip('should take in recipe data', () => {
      expect(testCookbook.recipeData).to.deep.equal(testData);
    })

    it.skip('should store recipe data in an array', () => {
      expect(testCookbook.recipeData).to.be.an('array');
    })
  })
  // 📔 Cookbook.filter
  describe('Cookbook filter methods', () => {
    // it should have a method to filter through tags and return recipe objects containing requested tags
    it.skip('should filter by tags and return an array of recipes', () => {
      let tagSearch = testCookbook.filterByTag('breakfast');
      expect(tagSearch[0].name).to.equal('Rice bowl with Fried Egg');
    })

    it.skip('should be able to filter by more than one tag', () => {
      let tagSearch = testCookbook.filterByTag('breakfast', 'appetizer');
      expect(tagSearch[0].name).to.equal('Rice bowl with Fried Egg');
      expect(tagSearch[1].name).to.equal('Avocado and Tomatillo Salsa');
    })

    it.skip('should return an empty array if no tags are found', () => {
      let tagSearch = testCookbook.filterByTag('saffron');
      expect(tagSearch).to.deep.equal([]);
    })
    // it should have a method to filter through recipe names and return matching results
    it.skip('should be able to search recipes by name', () => {
      let nameSearch = testCookbook.filterByName('Avocado and Tomatillo Salsa');
      expect(nameSearch).to.deep.equal([recipe2]);
    })

    it.skip('should be able to search a part of a name', () => {
      let nameSearch = testCookbook.filterByName('Fried');
      expect(nameSearch).to.deep.equal([recipe1]);
    })

    it.skip('should return an empty array if a name is not found', () => {
      let nameSearch = testCookbook.filterByName('saffron');
      expect(nameSearch).to.deep.equal([]);
    })

    // it should have a method to filter through ingredients and return recipes containing those ingredients
    it.skip('should be able to search recipes by ingredient', () => {
      let ingrSearch = testCookbook.filterByIngredient('TOMATILLO');
      expect(nameSearch).to.deep.equal(recipe2);
    })

    it.skip('should return all recipes containing a particular ingredient', () => {
      let ingrSearch = testCookbook.filterByIngredient('avocado');
      expect(nameSearch).to.deep.equal([recipe1, recipe2])
    })
  })
})

// 📔 Cookbook
// it should store all recipe objects



// this might be an additional method
// it should be able to take in a single recipe object and add it to the existing recipes

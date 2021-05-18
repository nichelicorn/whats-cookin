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
  // it should have a method to filter through recipe names and return matching results
  // it should have a method to filter through ingredients and return recipes containing those ingredients
  describe('Cookbook filter methods', () => {
    // it should have a method to filter through tags and return recipe objects containing requested tags
    it.skip('should filter by tags and return an array of recipes', () => {
      let tagSearch = testCookbook.filterByTag('breakfast');
      expect(tagSearch[0].name).to.equal('Rice bowl with Fried Egg');
    })

  })
})

// 📔 Cookbook
// it should store all recipe objects



// this might be an additional method
// it should be able to take in a single recipe object and add it to the existing recipes

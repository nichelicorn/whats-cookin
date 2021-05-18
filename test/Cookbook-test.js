import { expect } from 'chai';
import Cookbook from '../src/classes/Cookbook';

describe('Recipe Repository', () => {
  let testCookbook, recipe1, recipe2, recipe3, testData;

  beforeEach(() => {
    testCookbook = new Cookbook();
    // recipe1 =
    // testData =
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
})

// 📔 Cookbook
// it should store all recipe objects

// it should be able to take in a single recipe object and add it to the existing recipes
// ex. this.cookbook = [{recipeData}] || {recipe}

// 📔 Cookbook.filter
// it should have a method to filter through tags and return recipe objects containing requested tags
// it should have a method to filter through recipe names and return matching results
// it should have a method to filter through ingredients and return recipes containing those ingredients

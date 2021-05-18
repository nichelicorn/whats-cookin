import { expect } from 'chai';
import Cookbook from '../src/classes/Cookbook';

describe('Recipe Repository', () => {
  it('Should be a function', () => {
    expect(Cookbook).to.be.a('function');
  });
})

// 📔 Cookbook
// it should store all recipe objects

// 📔 Cookbook.constructor
// it should take in recipe objects and add them to an array
// it should be able to take in a single recipe object and add it to the existing recipes
// ex. this.cookbook = [{recipeData}] || {recipe}

// 📔 Cookbook.filter
// it should have a method to filter through tags and return recipe objects containing requested tags
// it should have a method to filter through recipe names and return matching results
// it should have a method to filter through ingredients and return recipes containing those ingredients

import { expect } from 'chai';
import { testRecipes, testRecipeData } from '../test/test-data';
import Cookbook from '../src/classes/Cookbook';
import Recipe from '../src/classes/Recipe';

describe('Cookbook', () => {
  let recipe1, recipe2, recipe3, testData, testCookbook;

  beforeEach(() => {
    // recipe1 = testRecipes[0]; // this isn't working (wrong setup)
    // recipe1 = new Recipe(testRecipes[0]); // this isn't working because there isn't a Recipe class yet to construct the new Recipe object
    recipe1 = {
      "id": 1,
      "image": "https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg",
      "ingredients": [
        {
          "id": 0,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 2,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cook rice.",
          "number": 1
        },
        {
          "instruction": "Fry egg.",
          "number": 2
        },
        {
          "instruction": "Slice avocado.",
          "number": 3
        },
        {
          "instruction": "Once rice is cooked, scoop out desired portion into a bowl and top with egg and avocado slices. Garnish with chives and lime wedge.",
          "number": 4
        }
      ],
      "name": "Rice bowl with Fried Egg",
      "tags": [
        "breakfast",
        "morning meal",
        "snack",
        "appetizer"
      ]
    };
    recipe2 = testRecipes[1];
    recipe3 = testRecipes[2];
    testData = testRecipeData;
    testCookbook = new Cookbook(testData);
  })

  it('Should be a function', () => {
    expect(Cookbook).to.be.a('function');
  })

  it('should be an instance of Cookbook', () => {
    expect(testCookbook).to.be.an.instanceof(Cookbook);
  })

  // 📔 Cookbook.constructor
  describe('Cookbook properties', () => {
    // it should take in recipe objects and add them to an array
    it('should take in recipe data', () => {
      expect(testCookbook.recipeData).to.deep.equal(testData);
    })

    it('should store recipe data in an array', () => {
      expect(testCookbook.recipeData).to.be.an('array');
    })
  })
  // 📔 Cookbook.filter
  describe('Cookbook filter methods', () => {
    // it should have a method to filter through tags and return recipe objects containing requested tags
    it.only('should filter by tags and return an array of recipes', () => {
      let tagSearch = testCookbook.filterByTag('breakfast');
      console.log(tagSearch())
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
      expect(ingrSearch).to.deep.equal(recipe2);
    })

    it.skip('should return all recipes containing a particular ingredient', () => {
      let ingrSearch = testCookbook.filterByIngredient('avocado');
      expect(ingrSearch).to.deep.equal([recipe1, recipe2])
    })

    it.skip('should return an empty array if an ingredient is not found', () => {
      let ingrSearch = testCookbook.filterByIngredient('saffron');
      expect(ingrSearch).to.deep.equal([]);
    })
  })
})

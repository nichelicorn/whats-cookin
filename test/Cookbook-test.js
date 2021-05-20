import { expect } from 'chai';
import { testRecipes, testRecipeData } from '../test/test-data';
import Cookbook from '../src/classes/Cookbook';
import Recipe from '../src/classes/Recipe';

describe('Cookbook', () => {
  let recipe1, recipe2, recipe3, testData, testCookbook;

  beforeEach(() => {
    // recipe1 = testRecipes[0]; // this isn't working (wrong setup)
    // recipe1 = new Recipe(testRecipes[0]); // this isn't working because there isn't a Recipe class yet to construct the new Recipe object
    // recipe2 = testRecipes[1];
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
    recipe2 = {
      "id": 2,
      "image": "https://i1.wp.com/www.wyldflour.com/wp-content/uploads/2017/05/Tomatillo-Avocado-Salsa-4.jpg",
      "ingredients": [
        {
          "id": 2,
          "name": "avocado",
          "estimatedCostInCents": 250
        },
        {
          "id": 3,
          "name": "tomatillo",
          "estimatedCostInCents": 50
        },
        {
          "id": 4,
          "name": "garlic",
          "estimatedCostInCents": 25
        },
        {
          "id": 5,
          "name": "jalapeno",
          "estimatedCostInCents": 10
        },
        {
          "id": 6,
          "name": "cilantro",
          "estimatedCostInCents": 50
        }
      ],
      "instructions": [
        {
          "instruction": "Char tomatillos under a broiler or over an open flame. When toasted, place in a sealed bag or container to steam.",
          "number": 1
        },
        {
          "instruction": "Peel the tomatillos.",
          "number": 2
        },
        {
          "instruction": "In a blender or food processor, combine tomatillos, garlic, jalapeno, and cilantro and pulse into a coarse puree. Add avocado and pulse until smooth. Add small amounts of water as needed if the mixture thickens too much.",
          "number": 3
        },
        {
          "instruction": "Season with salt and pepper, and serve with lime wedges and tortilla chips.",
          "number": 4
        }
      ],
      "name": "Avocado and Tomatillo Salsa",
      "tags": [
        "snack",
        "appetizer"
      ]
    };
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
    it('should take in recipe data', () => {
      expect(testCookbook.recipeData).to.deep.equal(testData);
    })

    it('should store recipe data in an array', () => {
      expect(testCookbook.recipeData).to.be.an('array');
    })
  })

  describe('Cookbook filter methods', () => {
    // 📔 Cookbook.filterByTag
    it('should filter by tags and return an array of recipes', () => {
      expect(testCookbook.filterByTag(['breakfast'])).to.deep.equal([recipe1]);
    })

    it('should be able to filter by more than one tag', () => {
      let tagSearch = testCookbook.filterByTag(['breakfast', 'appetizer']);
      expect(tagSearch[1].name).to.equal('Avocado and Tomatillo Salsa');
    })

    it.only('should return an empty array if no tags are found', () => {
      let tagSearch = testCookbook.filterByTag('dinner');
      expect(tagSearch).to.deep.equal([]);
    })
    // it should have a method to filter through recipe names and return matching results
    it.skip('should be able to search recipes by name', () => {
      let nameSearch = testCookbook.filterByName('Avocado and Tomatillo Salsa');
      expect(nameSearch).to.deep.equal([recipe1]);
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

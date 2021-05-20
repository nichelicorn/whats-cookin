import { expect } from 'chai';
import { testRecipes } from '../test/test-data';
import { testIngredients } from '../test/test-data';

import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient.js';

describe('Recipe', () => {
  let recipe1;
  let ingr1, ingr2, ingr3;


  beforeEach(() => {
    recipe1 = new Recipe (testRecipes[0], testIngredients);
    ingr1 = new Ingredient(testIngredients[0]);
    ingr2 = new Ingredient(testIngredients[1]);
    ingr3 = new Ingredient(testIngredients[2]);
    // ingredientsTestData = new Ingredient(testIngredients)
  })

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  describe('Recipe properties', () => {

    it('should store an id', () => {
      expect(recipe1.id).to.be.a('number');
    })

    it('should store a number as the id', () => {
      expect(recipe1.id).to.equal(1);
    })

    it('should store an image source', () => {
      expect(recipe1.image).to.equal("https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg");
    })
    it('should store a string as the image source', () => {
      expect(recipe1.image).to.be.a('string');
    })
    // it should store a property `ingredients` whose value is an array of objects
    // refactor to instantiate each ingredient in this array as a `new Ingredient()` instantiation
    it('should store recipe ingredients', () => {
      expect(recipe1.recipeIngredients).to.deep.equal([
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
      ]);
    })

    it('should store the ingredients in array', () => {
      expect(recipe1.recipeIngredients).to.be.an('array');
    })

    it('should store recipe instructions', () => {
      expect(recipe1.instructions).to.deep.equal([
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
      ]);
    })

    it('should store instructions in an array', () => {
      expect(recipe1.instructions).to.be.an('array');
    })

    it('should store a name', () => {
      expect(recipe1.name).to.equal("Rice bowl with Fried Egg");
    })

    it('should store the name as a string', () => {
      expect(recipe1.name).to.be.a('string');
    })

    it('should store recipe tags', () => {
      expect(recipe1.tags).to.deep.equal([
        "breakfast",
        "morning meal",
        "snack",
        "appetizer"
      ]);
    })

    it('should store tags in an array', () => {
      expect(recipe1.tags).to.be.an('array');
    })

    it('should store ingredient names in an array', () => {
      expect(recipe1.ingredientNames).to.be.an('array');
    })

    it('should start with no ingredient names in an array', () => {
      expect(recipe1.ingredientNames).to.deep.equal([]);
    })

    // it('should have access to ingredients data', () => {
    //   expect(recipe1.ingredientsData).to.equal(ingredientsData);
    // })

    // it should store a property `cost` whose value is a number; should have a default value of 0
    // it('should have a default cost of zero', () => {
    //   expect(recipe1.cost).to.equal(0);
    // })

    // it('should store a cost to make the recipe', () => {
    //   console.log(recipe1)
    //   expect(recipe1.cost).to.be.a('number');
    // })

  })

  // 📝 Recipe.return(Property)
  describe('Methods to return the recipe details', () => {
    it('should return the recipe instructions', () => {
      expect(recipe1.returnInstructions()).to.deep.equal([
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
      ]);
    })

    it('should return the recipe ingredient details', () => {
      expect(recipe1.returnIngredients()).to.deep.equal([
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
      ]);
    })

    // it should determine the names of ingredients needed for a recipe
    it('should return the names of ingredients for a recipe', () => {
      expect(recipe1.returnIngredientNames()).to.deep.equal(['rice', 'egg', 'avocado']);
    })

  })

  describe('A method to determind the total cost of making a recipe', () => {
    // it should determine the total cost of making a recipe
    // will need to factor in the amount listed in the recipe
    // the price per unit is listed in pennies
    it('should update the recipe cost', () => {
      recipe1.calculateCost();
      expect(recipe1.calculateCost()).to.equal(410);
    })

    it.skip('should return the cost of making a recipe', () => {
      expect(recipe1.calculateCost()).to.equal(4.10);
    })
  })
});

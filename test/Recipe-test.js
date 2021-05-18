import { expect } from 'chai';
import { testRecipes } from '../test/test-data';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe1;

  beforeEach(() => {
    recipe1 = testRecipes[0];
  })

  it.skip('should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  // 📝 Recipe.constructor
  describe('Recipe properties', () => {
    // it should store a property `id` whose value is a number
    it.skip('should store an id', () => {
      expect(recipe1.id).to.be.a('number');
    })

    it.skip('should store a number as the id', () => {
      expect(recipe1.id).to.equal(1);
    })
    // it should store a property `image` whose value is a string representing a url/image source path
    it.skip('should store an image source', () => {
      expect(recipe1.image).to.equal("https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg");
    })
    it.skip('should store a string as the image source', () => {
      expect(recipe1.image).to.be.a('string');
    })
    // it should store a property `ingredients` whose value is an array of objects
    // refactor to instantiate each ingredient in this array as a `new Ingredient()` instantiation
    it.skip('should store recipe ingredients', () => {
      expect(recipe1.ingredients).to.deep.equal([
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

    it.skip('should store the ingredients in array', () => {
      expect(recipe1.ingredients).to.be.an('array');
    })
    // it should store a property `instructions` whose value is an array of objects
    it.skip('should store recipe instructions', () => {
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

    it.skip('should store instructions in an array', () => {
      expect(recipe1.instructions).to.be.an('array');
    })
    // it should a property `name` whose value is a string
    it.skip('should store a name', () => {
      expect(recipe1.name).to.equal("Rice bowl with Fried Egg");
    })

    it.skip('should store the name as a string', () => {
      expect(recipe1.name).to.be.a('string');
    })
    // it should store a property `tags` whose value is an array of strings
    it.skip('should store recipe tags', () => {
      expect(recipe1.tags).to.deep.equal([
        "breakfast",
        "morning meal",
        "snack",
        "appetizer"
      ]);
    })

    it.skip('should store tags in an array', () => {
      expect(recipe1.tags).to.be.an('array');
    })
    // it should store a property `cost` whose value is a number; should have a default value of 0
    it.skip('should store a cost to make the recipe', () => {
      expect(recipe1.cost).to.be.a('number');
    })

    it.skip('should have a default cost of zero', () => {
      expect(recipe1.cost).to.equal(0);
    })
  })
  // 📝 Recipe.calculateCost
  describe('A method to determind the total cost of making a recipe', () => {
    // it should determine the total cost of making a recipe
    // will need to factor in the amount listed in the recipe
    // the price per unit is listed in pennies
    it.skip('should return the cost of making a recipe', () => {
      expect(recipe1.calculateCost()).to.equal(4.10);
    })

    it.skip('should update the recipe cost', () => {
      recipe1.calculateCost();
      expect(recipe1.cost).to.equal(410);
    })
  })
  // 📝 Recipe.return(Property)
  describe('Methods to return the recipe details', () => {
    // it should determine the names or ingredients needed for a recipe
    it.skip('should return the names of ingredients for a recipe', () => {
      expect(recipe1.returnIngrNames()).to.deep.equal(['rice', 'egg', 'avocado']);
    })
    // it should return a recipe's ingredients ♻️
    it.skip('should return the recipe ingredient details', () => {
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
    // it should return a recipe's instructions ♻️
    it.skip('should return the recipe instructions', () => {
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

    // ♻️ refactor into one method with a parameter when this logic is working
    // expect(recipe1.returnIn(property))
  })
});

import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe1, recipe2;

  beforeEach(() => {
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
    }
  })

  it.skip('should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  // 📝 Recipe.constructor
  describe('Recipe properties', () => {
    // it should store a property `id` whose value is a number
    it.skip('should store an id', () => {
      expect(recipe1.id).to.be.a('number');
      expect(recipe1.id).to.equal(1);
    })
    // it should store a property `image` whose value is a string representing a url/image source path
    it.skip('should store an image source', () => {
      expect(recipe1.image).to.be.a('string');
      expect(recipe1.image).to.equal("https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg");
    })
  })
})

// 📝 Recipe class
// a new `Recipe` represents one recipe object
// it should store all the details provided in the data file
// it should have a method to determine the names of ingredients needed to make a Recipe
// it should have a method to determine the cost of ingredients for a Recipe
// it should have a method to return ingredients / instructions for a Recipe

// 📝 Recipe.constructor
// it should store a property `ingredients` whose value is an array of objects
// refactor to instantiate each ingredient in this array as a `new Ingredient()` instantiation

// 📝 Recipe.constructor
// it should store a property `instructions` whose value is an array of objects

// 📝 Recipe.constructor
// it should a property `name` whose value is a string

// 📝 Recipe.constructor
// it should store a property `tags` whose value is an array of strings

// 📝 Recipe.listIngredients
// it should determine the names or ingredients needed for a recipe

// 📝 Recipe.calcCost
// it should determine the total cost of making a recipe
// will need to factor in the amount listed in the recipe
// the price per unit is listed in pennies

// 📝 Recipe.returnRecipe
// it should return a recipe's ingredients and instructions

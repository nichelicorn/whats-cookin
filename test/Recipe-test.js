import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe1, ingr1, ingr2, ingr3;

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
    };
    ingr1 = new Ingredient ( 0, 'rice', 150 );
    ingr2 = new Ingredient ( 1, 'egg',  10 );
    ingr3 = new Ingredient ( 2, 'avocado', 250 );
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
    // it should store a property `ingredients` whose value is an array of objects
    // refactor to instantiate each ingredient in this array as a `new Ingredient()` instantiation
    it.skip('should store an ingredients array', () => {
      expect(recipe1.ingredients).to.be.an('array');
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
    // it should store a property `instructions` whose value is an array of objects
    it.skip('should store an array of instructions', () => {
      expect(recipe1.instructions).to.be.an('array');
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
    // it should a property `name` whose value is a string
    it.skip('should store a name', () => {
      expect(recipe1.name).to.be.a('string');
      expect(recipe1.name).to.equal("Rice bowl with Fried Egg");
    })
    // it should store a property `tags` whose value is an array of strings
    it.skip('should store an array of tags', () => {
      expect(recipe1.tags).to.be.an('array');
      expect(recipe1.tags).to.deep.equal([
        "breakfast",
        "morning meal",
        "snack",
        "appetizer"
      ]);
    })
    // it should store a property `cost` whose value is a number; should have a default value of 0
    it.skip('should store a cost to make the recipe', () => {
      expect(recipe1.cost).to.be.a('number');

    it.skip('should have a default cost of zero', () => {
      expect(recipe1.cost).to.equal(0);
    });

    })
  })
  // 📝 Recipe.listIngredients
  describe('A method to return ingredient names', () => {
    // it should determine the names or ingredients needed for a recipe
    it.skip('should return the names of ingredients for a recipe', () => {
      expect(recipe1.listIngredients()).to.be.an('array');
      expect(recipe1.listIngredients()).to.deep.equal(['rice', 'egg', 'avocado']);
    })
  })
  // 📝 Recipe.calculateCost
  describe('A method to determind the total cost of making a recipe', () => {
    // it should determine the total cost of making a recipe
    // will need to factor in the amount listed in the recipe
    // the price per unit is listed in pennies
    it.skip('should return the cost of making a recipe', () => {
      expect(recipe1.calculateCost()).to.equal(410);
    })

    it.skip('should update the recipe cost', () => {
      recipe1.calculateCost();
      expect(recipe1.cost).to.equal(410);
    })
  })
  // 📝 Recipe.return(Property)
  describe('Methods to return the recipe details', () => {
    // it should return a recipe's ingredients and instructions
    it.skip('should return the recipe ingredients', () => {
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
    }')
  })
})

// 📝 Recipe class
// a new `Recipe` represents one recipe object
// it should store all the details provided in the data file
// it should have a method to determine the names of ingredients needed to make a Recipe
// it should have a method to determine the cost of ingredients for a Recipe
// it should have a method to return ingredients / instructions for a Recipe

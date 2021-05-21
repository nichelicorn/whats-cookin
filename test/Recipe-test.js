import { expect } from 'chai';
import { testRecipes } from '../test/test-data';
import { testIngredients } from '../test/test-data';

import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient.js';

describe.only('Recipe', () => {
  let recipe1;
  let recipe2;
  let ingr1, ingr2, ingr3;


  beforeEach(() => {
    recipe1 = new Recipe (testRecipes[0], testIngredients);
    recipe2 = new Recipe (testRecipes[1], testIngredients)
    recipe1.updateEachRecipeIngredients(testIngredients);
    recipe2.updateEachRecipeIngredients(testIngredients);
    ingr1 = new Ingredient(testIngredients[0]);
    ingr2 = new Ingredient(testIngredients[1]);
    ingr3 = new Ingredient(testIngredients[2]);
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

    it('should store recipe ingredients', () => {
      expect(recipe1.recipeIngredients).to.deep.equal([
        {
          "id": 0,
          "quantity": {
            "amount": 2,
            "unit": "c"
          },
          "name": "rice",
          "estimatedCostInCents": 150
        },
        {
          "id": 1,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "egg",
          "estimatedCostInCents": 10
        },
        {
          "id": 2,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "avocado",
          "estimatedCostInCents": 250
        }
      ]);
    })

    it('should store the ingredients in array', () => {
      expect(recipe1.recipeIngredients).to.be.an('array');
    })

    it('should update recipe ingredients to have name and cost', function() {
      recipe1.updateEachRecipeIngredients(testIngredients);
      expect(recipe1.recipeIngredients).to.deep.equal([
        {
          "id": 0,
          "quantity": {
            "amount": 2,
            "unit": "c"
          },
          "name": "rice",
          "estimatedCostInCents": 150
        },
        {
          "id": 1,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "egg",
          "estimatedCostInCents": 10
        },
        {
          "id": 2,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "avocado",
          "estimatedCostInCents": 250
        }
      ])
  recipe2.updateEachRecipeIngredients(testIngredients);

    });

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
          },
          "name": "rice",
          "estimatedCostInCents": 150
        },
        {
          "id": 1,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "egg",
          "estimatedCostInCents": 10
        },
        {
          "id": 2,
          "quantity": {
            "amount": 1,
            "unit": "large"
          },
          "name": "avocado",
          "estimatedCostInCents": 250
        }
      ]);
    })

    it('should return the names of ingredients for a recipe', () => {
      expect(recipe1.returnIngredientNames(testIngredients)).to.deep.equal(['rice', 'egg', 'avocado']);
    })


    it('should return the cost of making a recipe', () => {
      recipe1.calculateCost(testIngredients);
      expect(recipe1.calculateCost(testIngredients)).to.equal('$5.6');
      recipe2.updateEachRecipeIngredients(testIngredients)
      recipe2.calculateCost(testIngredients);
      expect(recipe2.calculateCost(testIngredients)).to.equal('$7.75');
    })
  })

});

import {
  expect
} from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { testRecipes } from '../test/test-data';

describe('User', function() {
  let user1;
  let recipe1;
  let userData;

  beforeEach(() => {
    userData = [
      {
        "id": 1,
        "name": "Saige O'Kon",
        "pantry": [
          {
            "ingredient": 0,
            "amount": 4
          },
          {
            "ingredient": 1,
            "amount": 10
          },
          {
            "ingredient": 2,
            "amount": 5
          }
        ]
      },
      {
        "name": "Ephraim Goyette",
        "id": 2,
        "pantry": [
          {
            "ingredient": 3,
            "amount": 3
          },
          {
            "ingredient": 4,
            "amount": 7
          },
          {
            "ingredient": 5,
            "amount": 8
          }
        ]
      }
    ];

    user1 = new User(userData[0])
    recipe1 = new Recipe (testRecipes[0]);
    // recipe1 = new Recipe()
  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should instantiate a User', function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should be able to store favorite recipes', function() {
    expect(user1.favoriteRecipes).to.be.an('array')
    expect(user1.favoriteRecipes).to.deep.equal([])
  })

  it('should be able to store recipes to cook', function() {
    expect(user1.recipesToCook).to.be.an('array')
    expect(user1.recipesToCook).to.deep.equal([])
  })

  it.skip('should instantiate a Recipe', function() {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });

  it.skip('should add favorited recipes in an array', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1])
  });


  it.skip('should add recipes to cook in an array', function() {
    expect(user1.recipesToCook).to.deep.equal([])
    user1.addRecipeToCook(recipe);
    expect(user1.recipesToCook).to.deep.equal([recipe1])
  });

  it.skip('should filter through recipes by tag or name', function() {
    user1.filterRecipes("avocado");
    expect(user.filterRecipes("avocado")).to.equal(recipe1);
    user1.filterRecipes("Rice bowl with Fried Egg");
    expect(user.filterRecipes("Rice bowl with Fried Egg")).to.equal(recipe1);
  });

  it.skip('should instantiate an Ingredient', function() {
    expect(ingr1).to.be.an.instanceof(Ingredient);
  });

  it.skip('should filter through recipes by ingredient', function() {
    user1.filterRecipes("rice");
    expect(user.filterRecipes("rice")).to.equal(ingr1)
  });


});

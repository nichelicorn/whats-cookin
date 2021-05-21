import {
  expect
} from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import {
  testRecipes
} from '../test/test-data';
import {
  testIngredients
} from '../test/test-data';

describe.only('User', function() {
  let user1;
  let recipe1;
  let userData;
  let recipe2;

  beforeEach(() => {
    userData = [{
      "id": 1,
      "name": "Saige O'Kon",
      "pantry": [{
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
    }];

    user1 = new User(userData[0])
    recipe1 = new Recipe (testRecipes[0], testIngredients);
    recipe2 = new Recipe(testRecipes[1], testIngredients);
    recipe1.updateEachRecipeIngredients(testIngredients);
    recipe2.updateEachRecipeIngredients(testIngredients);
    recipe1.returnIngredientNames(testIngredients)
    recipe2.returnIngredientNames(testIngredients)
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

  it('should add favorited recipes in an array', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1])
  });

  it('should remove recipes from favorites', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1])
    user1.removeFromFavorites(recipe1);
    expect(user1.favoriteRecipes).to.deep.equal([])

  });

  it('should add recipes to cook in an array', function() {
    expect(user1.recipesToCook).to.deep.equal([])
    user1.addRecipeToCook(recipe1);
    expect(user1.recipesToCook).to.deep.equal([recipe1])
  });

  it.only('should remove recipes to cook', function() {
    expect(user1.recipesToCook).to.deep.equal([])
    user1.addRecipeToCook(recipe1);
    user1.addRecipeToCook(recipe2)
    expect(user1.recipesToCook).to.deep.equal([recipe1, recipe2])
    user1.removeRecipeToCook(recipe1);
    expect(user1.recipesToCook).to.deep.equal([recipe2])
  });

  it('should filter through favorite recipes by tag or name', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1])
    user1.filterFavoriteRecipes("breakfast");
    expect(user1.filterFavoriteRecipes("breakfast")).to.deep.equal([recipe1]);
  });

  it('should filter through favorite recipes by multiple tags', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    user1.addToFavorites(recipe2);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1, recipe2]);
    user1.filterFavoriteRecipes("breakfast", "lunch");
    expect(user1.filterFavoriteRecipes("breakfast", "lunch")).to.deep.equal([recipe1]);
  });

  it('should filter through favorite recipes by name', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1])
    user1.filterFavoriteRecipes("Rice bowl with Fried Egg");
    expect(user1.filterFavoriteRecipes("Rice bowl with Fried Egg")).to.deep.equal([recipe1]);
  });

  it('should filter through recipes by ingredient', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
    user1.addToFavorites(recipe1);
    user1.addToFavorites(recipe2);
    expect(user1.favoriteRecipes).to.deep.equal([recipe1, recipe2]);
    user1.filterFavoriteRecipesIng("rice");
    // console.log("HELPppppppppp", recipe1);
    expect(user1.filterFavoriteRecipesIng("rice")).to.deep.equal([recipe1])
  });


});

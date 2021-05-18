import {
  expect
} from 'chai';
import User from '../src/classes/User';

describe('User', function() {
  let user1;
  let recipe1;

  beforeEach(() => {
    user1 = new User()
    user1.favoriteRecipes = []
    user1.recipesToCook = []
    recipe1 = new Recipe(1, "https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg", [{
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
      ], [{
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
      ], "name": "Rice bowl with Fried Egg",
      "tags": [
        "rice",
        "egg",
        "avocado",
        "bowl",
        "breakfast",
        "morning meal",
        "snack",
        "appetizer"
      ]);
  })

  it.skip('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it.skip('should instantiate a User', function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it.skip('should be able to store favorite recipes', function() {
    expect(user1.favoriteRecipes).to.be.an('array')
    expect(user1.favoriteRecipes).to.deep.equal([])
  })

  it.skip('should be able to store recipes to cook', function() {
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

  it.skip('should filter through recipes by name, tag, or ingredients', function() {
    user1.filterRecipes(tag);
    expect(user.filterRecipes(tag)).to.equal(-- -- --)
  });
});

import { expect } from 'chai';
import User from '../src/classes/User';

describe('User', function() {
  let user1;

  beforeEach(() => {
    user1 = new User()
    user1.favoriteRecipes = []
    user1.recipesToCook = []
  });

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
      user1.addToFavorites();
      expect(user1.favoriteRecipes).to.deep.equal([])
    });

    it('should add recipes to cook in an array', function() {
      expect(user1.recipesToCook).to.deep.equal([])
      user1.addRecipeToCook();
      expect(user1.recipesToCook).to.deep.equal([])
    });

    it('should filter through recipes by name, tag, or ingredients', function() {
      user1.filterRecipes();
      expect(user1.recipesToCook).to.equal([])
    });

  });

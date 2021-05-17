import { expect } from 'chai';
import User from '../src/classes/User';

describe('User', function() {
  let user;

  beforeEach(() => {
    user = new User()
    user.favoriteRecipes = []
    user.recipesToCook = []
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
    });

    it('should instantiate a User', function() {
      expect(user).to.be.an.instanceof(User);
    });

    it('should be able to store favorite recipes', function() {
      expect(user.favoriteRecipes).to.be.an('array')
      expect(user.favoriteRecipes).to.deep.equal([])
    })

    it('should be able to store recipes to cook', function() {
      expect(user.recipesToCook).to.be.an('array')
      expect(user.recipesToCook).to.deep.equal([])
    })
  });

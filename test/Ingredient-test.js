import {
  expect
} from 'chai';
import {
  testIngredients
} from '../test/test-data';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingr1, ingr2, ingr3;

  beforeEach(() => {
    ingr1 = testIngredients[0];
    ingr2 = testIngredients[1];
    ingr3 = testIngredients[2];
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })
  describe('Ingredient properties', () => {

    it('should store an id', () => {
      expect(ingr1.id).to.equal(0);
    })

    it('should store a name', () => {
      expect(ingr2.name).to.equal('egg');
    })

    it('should store the estimated cost in cents', () => {

      expect(ingr3.estimatedCostInCents).to.equal(250);
    })
  })
})

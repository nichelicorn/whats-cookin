import { expect } from 'chai';
import { testIngredients } from '../test/test-data';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingr1, ingr2, ingr3;

  beforeEach(() => {
    ingr1 = testIngredients[0];
    ingr2 = testIngredients[1];
    ingr3 = testIngredients[2];
  });

  // 🧂 Ingredient class
  it.skip('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })
  // a new `Ingredient` represents one ingredient object
  it.skip('should instantiate a new Ingredient', ( ) => {
    expect(ingr1).to.be.an.instanceof(Ingredient);
  })

  // 🧂 Ingredient.constructor tests
  describe('Ingredient properties', () => {
    // should store a property `id` whose value is a `number`
    it.skip('should store an id', () => {
      expect(ingr1.id).to.equal(0);
    })
    // should store a property `name` whose value is a `string`
    it.skip('should store a name', () => {
      expect(ingr2.name).to.equal('egg');
    })
    // should store a property `estimatedCostInCents` whose value is a `number`
    it.skip('should store an estimaged cost per unit', () => {
      expect(ingr3.estimatedCostInCents).to.equal(250);
    })
  })
})

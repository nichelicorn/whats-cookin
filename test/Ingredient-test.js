import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingr1, ingr2, ingr3;

  beforeEach(() => {
    ingr1 = new Ingredient ( 0, 'rice', 150 );
    ingr2 = new Ingredient ( 1, 'egg',  10 );
    ingr3 = new Ingredient ( 2, 'avocado', 250 );
  });

  it.skip('should be a function', () => {
    expect(Ingredient).to.be.a('function');
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
    it.skip('should store a name', () => {
      expect(ingr3.estimatedCostInCents).to.equal(250);
    })
  })
})

// 🧂 Ingredient class
// a new `Ingredient` represents one ingredint object

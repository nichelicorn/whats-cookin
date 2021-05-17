import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {
  let ingr1, ingr2, ingr3;

  beforeEach(() => {
    ingr1 = {
      "id": 1,
      "name": "rice",
      "estimatedCostInCents": 150
    },
    ingr2 = {
      "id": 2,
      "name": "egg",
      "estimatedCostInCents": 10
    },
    ingr3 = {
      "id": 3,
      "name": "avocado",
      "estimatedCostInCents": 250
    }
  });

  it.skip('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  })
})

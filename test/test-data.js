const testIngredients = [
  {
    "id": 0,
    "name": "rice",
    "estimatedCostInCents": 150
  },
  {
    "id": 1,
    "name": "egg",
    "estimatedCostInCents": 10
  },
  {
    "id": 2,
    "name": "avocado",
    "estimatedCostInCents": 250
  },
  {
    "id": 3,
    "name": "tomatillo",
    "estimatedCostInCents": 50
  },
  {
    "id": 4,
    "name": "garlic",
    "estimatedCostInCents": 25
  },
  {
    "id": 5,
    "name": "jalapeno",
    "estimatedCostInCents": 10
  },
  {
    "id": 6,
    "name": "cilantro",
    "estimatedCostInCents": 50
  },
  {
    "id": 7,
    "name": "soy sauce",
    "estimatedCostInCents": 5
  },
  {
    "id": 8,
    "name": "brown sugar",
    "estimatedCostInCents": 10
  }
]

const testRecipes = [
  {
    "id": 1,
    "image": "https://soufflebombay.com/wp-content/uploads/2017/01/Fried-Egg-Avocado-Rice-Bowl.jpg",
    "ingredients": [
      {
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
    ],
    "instructions": [
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
    ],
    "name": "Rice bowl with Fried Egg",
    "tags": [
      "breakfast",
      "morning meal",
      "snack",
      "appetizer"
    ]
  },
]

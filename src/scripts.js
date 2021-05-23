import './styles.css';
import {
  getUsers,
  getRecipes,
  getIngredients
} from './apiCalls';
import Cookbook from "./classes/Cookbook";
import Recipe from "./classes/Recipe";
import Ingredient from "./classes/Ingredient";
import User from "./classes/User";
import {
  recipeData
} from "./data/recipes";

import {
  usersData
} from "./data/users"
import {
  ingredientsData
} from "./data/ingredients";

//---------------------Query Selectors---------------------//
let myFavoritesBtn = document.getElementById('myFavoritesBtn');
let recipesToCookBtn = document.getElementById('recipesCookLtrBtn');
let mainPageContainer = document.getElementById('mainPageContainer');
let mainTitle = document.getElementById('mainTitle');
let category1 = document.getElementById('categoryTitle1');
let category2 = document.getElementById('categoryTitle2');
let category3 = document.getElementById('categoryTitle3');
let addToFavoritesBtn = document.getElementById('addFavoritesBtn');
let saveForLaterBtn = document.getElementById('cookLaterBtn');
let addToGroceryBtn = document.getElementById('groceryListBtn');
let featuredRecipe = document.getElementById('featuredRecipe');
let welcomeMessage = document.getElementById('welcomeMessage');
let recipeCardContainer = document.getElementById('recipeContainer');
let viewRecipeBtn = document.getElementById('viewRecipeButton');
let featuredRecipeContainer = document.getElementById('featuredRecipeContainer');

//----------------Global Variables -------------------------//
let ingredient;
let usersArray;
let recipesArray;
let ingredientsArray;
let getRandomIndex = Math.floor(Math.random() * recipeData.length)
let recipe = makeRecipes();
let user = makeUser();
let cookbook = makeBook();
let id;



//----------------Event Listeners -------------------------//
myFavoritesBtn.addEventListener('click', function() {
  location.reload()
});

window.onclick = function testID(id) {
  id = event.target.id
  console.log("testtttttt", id)
};

window.addEventListener('load', onPageLoad);

featuredRecipeContainer.addEventListener('click', identifyRecipe);

// allRecipesView.addEventListener()


// -------------------Event Handlers -----------------------//

// function testID(id) {
//   id = event.target.id
//   console.log(id)
// }




function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}


function onPageLoad() {
  makeRecipes();
  makeBook();
  makeUser();
  makeIngredients();
  greetUser();
  featureRecipe();
}


function makeRecipes() {
  let allRecipes = [];
  recipeData.forEach((recipe, index) => {
    let aRecipe = new Recipe(recipeData[index], ingredientsData)
    allRecipes.push(aRecipe)
  })
  // console.log('allRecipes', allRecipes)
  return allRecipes
}



function makeBook() {
  let aCookbook = new Cookbook(makeRecipes())
  // console.log("theBook", cookbook)
  return aCookbook
}
// console.log("tesssst", makeBook())


function makeUser() {

  let userIndex = Math.floor(Math.random(42) * usersData.length + 1);
  // console.log(userIndex)
  let randomUser = usersData.find(user => user.id === userIndex)
  let aUser = new User(randomUser.name, randomUser.id, randomUser.pantry)
  // console.log("user", user)
  return aUser
}

function makeIngredients() {

  let allIngredients = []
  ingredientsData.forEach((ing) => {
    let anIngredient = new Ingredient(ing.id, ing.name, ing.estimatedCostInCents)
    allIngredients.push(anIngredient)
  })
  // console.log("test", allIngredients[1])
  return allIngredients
}

function greetUser() {
  welcomeMessage.innerHTML = '';
  welcomeMessage.innerHTML += `
  What's Cookin', ${user.name}?`
}

function featureRecipe() {
  featuredRecipe.innerHTML = '';
  featuredRecipe.innerHTML += `
<section class="a-featured-recipe ${recipe[getRandomIndex].name}" id="${recipe[getRandomIndex].id}">
        <section class="${recipe[getRandomIndex].name} recipe title" id="${recipe[getRandomIndex].id}">  ${recipe[getRandomIndex].name}
            <img class="${recipe[getRandomIndex].name} recipe" src="${recipe[getRandomIndex].image}" id="${recipe[getRandomIndex].id}" alt="featured-recipe-image ${recipe[getRandomIndex].name}"/>
        </section>
      </section>

`
}


 function identifyRecipe (id) {
    id = parseInt(event.target.id)
  const findRecipe = cookbook.recipes.find(recipe => {return id === recipe.id})

  }

// function seeRecipeCard(recipeID) {
//   show()
//
// }


//FUNCTION FOR API DATA
// function startUpPage() {
//   getUsers()
//   .then(response => usersArray = response)
//     .then(() => {
//       let userIndex = Math.floor(Math.random(42) * usersArray.usersData.length);
//       console.log(usersArray.usersData)
//       let randomUser = usersArray.usersData.find(user => user.id === userIndex)
//       user = new User(randomUser.name, randomUser.id, randomUser.pantry)
//       console.log(user)
//     })
//
//   getRecipes()
//     .then(response => recipesArray = response)
//     .then(() => {
//       cookbook = new Cookbook(recipesArray.recipeData)
//       console.log(cookbook)
//     })
//
//   getIngredients()
//     .then(ingredients => ingredientsArray = ingredients.ingredientsData)
//     .then(() => {
//       let ingIndex = Math.floor(Math.random(247) * ingredientsArray.length);
//       ingredient = new Ingredient(ingredientsArray[ingIndex])
//       console.log(ingredient)
//     })
//
//   }


//THIS IS TO SEARCH FOR ENTRIES
// function searchForItem(entry) {
//    entry = input.value
//
//   cookbook.filterByTag(entry);
//   cookbook.filterByName(entry);
//   cookbook.filterByIngredient(entry);
//
// }

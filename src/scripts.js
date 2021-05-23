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

//----------------Global Variables -------------------------//
let recipe, user, cookbook, ingredient;
let usersArray;
let recipesArray;
let ingredientsArray;


//----------------Event Listeners -------------------------//
myFavoritesBtn.addEventListener('click', function() {
  location.reload()
});

window.onclick = function() {
  console.log("test", event.target.id)
}

window.addEventListener('load', onPageLoad);
// window.addEventListener('load', greetUser);

// -------------------Event Handlers -----------------------//



function onPageLoad() {
  makeRecipes();
  makeBook();
  makeUser();
  makeIngredients();
  greetUser();
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
  cookbook = new Cookbook(makeRecipes())
  // console.log("theBook", cookbook)
  return cookbook
}
// console.log("tesssst", makeBook())


function makeUser() {

  let userIndex = Math.floor(Math.random(42) * usersData.length + 1);
  // console.log(userIndex)
  let randomUser = usersData.find(user => user.id === userIndex)
  user = new User(randomUser.name, randomUser.id, randomUser.pantry)
  // console.log("user", user)
  return user
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

// function makeRecipes() {
//   let allRecipes = [];
//   recipeData.forEach((recipe, index) => {
//     let aRecipe = new Recipe(recipeData[index], ingredientsData)
//     allRecipes.push(aRecipe)
//   })
//   // console.log('allRecipes', allRecipes)
//   return allRecipes
// }






function greetUser() {
  mainTitle.innerHTML = '';
  mainTitle.innerHTML += `
  What's Cookin', ${makeUser().name}?`
}


// console.log("test", user)

// function greetUser(){
//   mainTitle.innerHTML +=
//         'Whats cooking, Luly?';
// }


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





function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}




// function customizeForUser() {
// mainTitle.innerHTML = ''
// mainTitle.innerHTML += `Welcome to What's Cookin, ${user.name} `
// console.log(mainTitle.innerHTML)
// }

// function searchForItem(entry) {
//    entry = input.value
//
//   cookbook.filterByTag(entry);
//   cookbook.filterByName(entry);
//   cookbook.filterByIngredient(entry);
//
// }

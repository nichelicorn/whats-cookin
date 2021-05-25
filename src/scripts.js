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
let mainPageView = document.getElementById('mainPage');
let recipePageView = document.getElementById('recipePage');
let myFavoritesPageView = document.getElementById('myFavoritesPage');
let mainPageContainer = document.getElementById('mainPageContainer');
let mainTitle = document.getElementById('mainTitle');
let addToFavoritesBtn = document.getElementById('addFavoritesBtn');
let saveForLaterBtn = document.getElementById('cookLaterBtn');
let featuredRecipe = document.getElementById('featuredRecipe');
let welcomeMessage = document.getElementById('welcomeMessage');
let featuredRecipeContainer = document.getElementById('featuredRecipeContainer');
let recipeDisplayHeader = document.getElementById('recipeDisplayHeader');
let ingredientsCostHeader = document.getElementById('ingredientsCost');
let ingredientsContainer = document.getElementById('ingredientsContainer');
let instructionsContainer = document.getElementById('instructionsContainer');
let viewHomePageBtn = document.getElementById('homeViewBtn');
let viewAllRecipesBtn = document.getElementById('viewAllButton');
let allRecipesView = document.getElementById('allRecipesView');
let allRecipesContainer = document.getElementById('allRecipesList');
let searchBar = document.getElementById('searchBar');
let searchPageView = document.getElementById('searchContainer');
let searchSubmitBtn = document.getElementById('searchSubmit');
// let category1 = document.getElementById('categoryTitle1');
// let category2 = document.getElementById('categoryTitle2');
// let category3 = document.getElementById('categoryTitle3');
// let recipeCardContainer = document.getElementById('recipeContainer');

//----------------Global Variables -------------------------//
let ingredient;
let getRandomIndex = Math.floor(Math.random() * recipeData.length)
let recipe = makeRecipes();
let user = makeUser();
let cookbook = makeBook();
let id;
// let usersArray;
// let recipesArray;
// let ingredientsArray;


//----------------Event Listeners -------------------------//
window.addEventListener('load', onPageLoad);
featuredRecipeContainer.addEventListener('click', identifyRecipe);
viewHomePageBtn.addEventListener('click', goHome);
myFavoritesBtn.addEventListener('click', seeFavorites);
viewAllRecipesBtn.addEventListener('click', viewAllRecipes);
allRecipesContainer.addEventListener('click', identifyRecipe);
searchSubmitBtn.addEventListener('click', function preventEvent(e) {
  e.preventDefault();
})
searchBar.addEventListener('keydown', function preventEvent(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});
searchSubmitBtn.addEventListener('click', searchCookbook);
searchPageView.addEventListener('click', identifyRecipe);
// recipesToCookBtn.addEventListener('click', viewCookLater);
// window.onclick = function testID(id) {
//   id = event.target
//   console.log("testtttttt", id)
// };

// -------------------Event Handlers -----------------------//

function goHome() {
  show(mainPageView);
  hide(recipePageView);
  hide(myFavoritesPageView);
  hide(allRecipesView);
}

function seeFavorites() {
  show(myFavoritesPageView);
  hide(recipePageView);
  hide(mainPageView);
  hide(allRecipesView);
}

function viewAllRecipes() {
  show(allRecipesView);
  hide(myFavoritesPageView);
  hide(recipePageView);
  hide(mainPageView);

  viewAllRecipesPage()
}

// function viewCookLater() {
// // show()still need html for this
// hide(recipePageView);
// hide(mainPageView);
// hide(myFavoritesPageView);
//
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
    aRecipe.updateEachRecipeIngredients(ingredientsData);
    aRecipe.returnIngredientNames();
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

function makeUser() {

  let userIndex = Math.floor(Math.random(42) * usersData.length + 1);
  // console.log(userIndex)
  let randomUser = usersData.find(user => user.id === userIndex)
  let aUser = new User(randomUser.name, randomUser.id, randomUser.pantry)
  // console.log("user", aUser)
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
        <p class="${recipe[getRandomIndex].name} recipe title" id="${recipe[getRandomIndex].id}">  ${recipe[getRandomIndex].name}
            <img class="${recipe[getRandomIndex].name} recipe" src="${recipe[getRandomIndex].image}" id="${recipe[getRandomIndex].id}" alt="featured-recipe-image ${recipe[getRandomIndex].name}"/>
        </p>
      </section>
`
}

function searchCookbook(entry) {
  show(searchPageView);
  hide(mainPageView);
  hide(myFavoritesPageView)
  hide(allRecipesView);
  hide(recipePageView);

  entry = searchBar.value

  let result1 = cookbook.filterByTag(entry);
  let result2 = cookbook.filterByName(entry);
  let result3 = cookbook.filterByIngredient(entry);

  let allSearches = [result1, result2, result3]

  searchContainer.innerHTML = ''


  let tagSearch = result1.forEach(result => {
    // console.log("test1", result.name)

    return searchContainer.innerHTML += `
      <p class=" search-Container" id="${result.id}"> •${result.name}</p> `
  })

  let nameSearch = result2.forEach(result => {
    // console.log("test2", result.name)
    return searchContainer.innerHTML += `
      <p class=" search-Container" id="${result.id}"> •${result.name}</p> `
  })

  let ingredientSearch = result3.forEach(result => {
    // console.log("test3", result.name)
    return searchContainer.innerHTML += `
      <p class=" search-Container" id="${result.id}"> •${result.name}</p> `
  })

}



function identifyRecipe(id) {
  id = parseInt(event.target.id)
  const findRecipe = cookbook.recipes.find(recipe => {
    return id === recipe.id
  })
  // console.log(findRecipe)
  displayRecipeCard(findRecipe)
  return findRecipe
}


function displayRecipeCard(recipe) {
  // console.log("lets see", recipe)
  show(recipePageView);
  hide(mainPageView);
  hide(myFavoritesPageView)
  hide(allRecipesView);

  let recipeCost = recipe.calculateCost(recipe.recipeIngredients)
  let allIngredients = recipe.returnIngredients();
  let allInstructions = recipe.returnInstructions();

  // console.log("allIng", allIngredients)
  // console.log(allInstructions)
  recipeDisplayHeader.innerText = `${recipe.name}`
  ingredientsCostHeader.innerText = recipeCost

  ingredientsContainer.innerHTML = '';
  instructionsContainer.innerHTML = '';

  allIngredients.forEach((ing, index) => {
    return ingredientsContainer.innerHTML +=

      `

<h3 class="ingredients-title" id="ingredientsTitle">Ingredient ${[index + 1]}:</h3>
<p class="ingredient" id="ingredientOne">Name: ${allIngredients[index].name}</p>
    <p class"ingredient-amount" id="ingredientAmount">Amount: ${allIngredients[index].quantity.amount}</p>
    <p class"ingredient-unit" id="ingredientUnit">Unit: ${allIngredients[index].quantity.unit}</p>
    <p class"ingredient-cent-cost" id="ingredientInCents">Cost: $${allIngredients[index].estimatedCostInCents / 100}</p>

  `
  })

  allInstructions.forEach((ins, index) => {
    return instructionsContainer.innerHTML += `

  <h3 class="instructions-title" id="instructionsTitle">Instruction ${allInstructions[index].number}:</h3>
  <p class="instruction" id="instructionOne"> ${allInstructions[index].instruction}</p>

  `
  })

}


function viewAllRecipesPage() {
  // console.log("viewAll", cookbook.recipes)
  allRecipesContainer.innerHTML = '';

  cookbook.recipes.forEach((recipe, index) => {
    // console.log("index", index)
    return allRecipesContainer.innerHTML += `
      <p class="recipe-name recipeContainer" id="${cookbook.recipes[index].id}">${index + 1}. ${cookbook.recipes[index].name}</p>
    `
    //This could be added to get the images on the view, but there is currently not a container to hold the images well.
    // <img class="${cookbook.recipes[index].name} recipe" src="${cookbook.recipes[index].image}" id="${cookbook.recipes[index].id}" alt="featured-recipe-image ${cookbook.recipes[index].name}"/>

  })

}




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

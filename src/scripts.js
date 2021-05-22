import './styles.css';
import apiCalls from './apiCalls';
import Cookbook from "./classes/Cookbook";
import Recipe from "./classes/Recipe";
import Ingredient from "./classes/Ingredient";
import User from "./classes/User";
import { recipeData } from "./data/recipes";
import { usersData } from "./data/users"
import { ingredientsData } from "./data/ingredients";


// console.log('Hello world');
//---------------------Query Selectors---------------------//
let myFavoritesBtn = document.getElementById('myFavoritesBtn');
let recipesToCookBtn = document.getElementById('recipesCookLtrBtn');
let mainPageContainer = document.getElementById('mainPageContainer');
let category1 = document.getElementById('categoryTitle1');
let category2 = document.getElementById('categoryTitle2');
let category3 = document.getElementById('categoryTitle3');
let addToFavoritesBtn = document.getElementById('addFavoritesBtn');
let saveForLaterBtn = document.getElementById('cookLaterBtn');
let addToGroceryBtn = document.getElementById('groceryListBtn');

//----------------Global Variables -------------------------//
let recipe;
let user;
let cookbook;
let ingredient;


//----------------Event Listeners -------------------------//
myFavoritesBtn.addEventListener('click', function() {
  location.reload()
});

window.onclick = function() {
  console.log("test", event.target.id)
}

window.addEventListener('load', startUpPage);

// -------------------Event Handlers -----------------------//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}


function startUpPage() {

}

function customizeForUser() {

}

function searchForItem(entry) {
   entry = input.value

  cookbook.filterByTag(entry);
  cookbook.filterByName(entry);
  cookbook.filterByIngredient(entry);

}




//need a button on HTML to show all recipes listed

//click on a recipe and be taken to a card page that shows all relevant data like ingredients, total coast, and instructions

//need to filter recipes by multiple tags

//need to filter recipes by their name

//need to filter recipes by ingredients

//on Load, a user chosen at random

//as a user, favorite a recipe (button that on click adds to faves)

//as a user, unfavorite a recipe (another button that helps prompts removal from favs)

//search faves by tags

//search faves by name/ingredients

//add a recipe to list of recipes to cook



// As a user, I should be able to view a list of all recipes. - need a button that allows you to view all recipes
// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
// As a user, I should be able to filter recipes by multiple tags.
// As a user, I should be able to search recipes by their name or ingredients.

// On load, a user should be chosen at random.
//
// As a user, I should be able to favorite / unfavorite recipes that I like and can easily find again.
// As a user, I should be able to filter my favorited recipes by one or more tags.
// As a user, I should be able to search my favorited recipes by its name or ingredients.
// As a user, I should be able to add a recipe to a list of recipes to cook.

import './styles.css';
import apiCalls from './apiCalls';
// console.log('Hello world');
//---------------------Query Selectors---------------------//
let myFavoritesBtn = document.getElementById('myFavoritesBtn');
let recipesToCookBtn = document.getElementById('recipesCookLtrBtn');
let mainPageContainer = document.getElementById('mainPageContainer');
let category1 = document.getElementById('categoryTitle1');
let category2 = document.getElementById('categoryTitle2');
let category3 = document.getElementById('categoryTitle3');


//----------------Global Variables -------------------------//
// let recipe = new Recipe ();
// let

//----------------Event Listeners -------------------------//
myFavoritesBtn.addEventListener('click', function() {
  location.reload()
});

window.onclick = function() {
  console.log("test", event.target.id)
}



// -------------------Event Handlers -----------------------//

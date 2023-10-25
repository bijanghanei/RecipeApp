import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';

import * as model from './model.js';
import paginationView from './views/paginationView.js';
import { async } from 'regenerator-runtime';
import bookmaksView from './views/bookmaksView.js';
import addRecipeView from './views/addRecipeView.js';

// import 'regenerator-runtime/runtime';
// import searchView from './views/searchView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // loading recipe
    recipeView.renderSpinner();
    resultView.update(model.getSearchResultPage());
    bookmaksView.update(model.state.bookmarks);
    await model.loadRecipe(id);

    // rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearch = async function () {
  try {
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    // resultView.render(model.state.search.result);

    resultView.render(model.getSearchResultPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (goToPage) {
  try {
    resultView.render(model.getSearchResultPage(goToPage));
    paginationView.render(model.state.search);
  } catch (err) {
    paginationView.renderError();
  }
};
const controlServings = function (updateTo) {
  // update servings in state
  model.updateServings(updateTo);
  //
  recipeView.update(model.state.recipe);
  // render recipe
  // recipeView.render(model.state.recipe);
};
const controlAddRemoveBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.removeBookmark(model.state.recipe.id);
  }
  recipeView.update(model.state.recipe);
  bookmaksView.render(model.state.bookmarks);
};
const controlBookmarks = function () {
  bookmaksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    recipeView.render(model.state.recipe);
    addRecipeView.renderMessage();
    bookmaksView.render(model.state.recipe)
    window.history.pushState("null","",`#${model.state.recipe.id}`)
  } catch (err) {
    addRecipeView.renderError(err.message);
    console.log(err);
  }
};

const init = function () {
  model.initBookmarks();
  bookmaksView.addHandlerBookmarks(controlBookmarks);
  bookmaksView.addHandlerBookmarks();
  searchView.addHandlerSearch(controlSearch);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlAddRemoveBookmark);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();

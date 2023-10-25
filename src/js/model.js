import { API_URL, RES_PER_PAGE, KEY } from './config.js';
import { getJSON, setJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};
const createRecipeObject = function (recipeData) {
  return {
    id: recipeData.id,
    title: recipeData.title,
    publisher: recipeData.publisher,
    sourceUrl: recipeData.source_url,
    image: recipeData.image_url,
    servings: recipeData.servings,
    cookingTime: recipeData.cooking_time,
    ingredients: recipeData.ingredients,
    ...(recipeData.key && { key: recipeData.key }),
  };
};
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}?key=${KEY}`);
    const recipe = data.data.recipe;
    state.recipe = createRecipeObject(recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    const oldServings = state.recipe.servings;
    ing.quantity = ing.quantity * (newServings / oldServings);
  });
  state.recipe.servings = newServings;
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    const results = data.data.recipes;
    state.search.result = results.map(function (res) {
      const result = {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image: res.image_url,
        ...(res.key && { key: res.key }),
      };
      return result;
    });
    state.search.page = 1;
    // console.log(state.search.result);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const getSearchResultPage = function (page = 1) {
  try {
    state.search.page = page;
    const startIndex = (page - 1) * state.search.resultsPerPage;
    const endIndex = page * state.search.resultsPerPage;
    return state.search.result.slice(startIndex, endIndex);
  } catch (err) {
    throw err;
  }
};
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};
export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(recipe => recipe.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};
export const initBookmarks = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) {
    state.bookmarks = JSON.parse(storage);
  }
};
const clearbookmarks = function () {
  localStorage.clear('bookmarks');
};
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length !== 3) {
          throw new Error(
            'Wrong ingredient format! Please type as the place holder.'
          );
        }
        const [quantity, unit, description] = ingArr;
        return {
          quantity: quantity ? Number(quantity) : null,
          unit,
          description,
        };
      });

    const recipe = {
      // id: KEY,
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      servings: Number(newRecipe.servings),
      cooking_time: Number(newRecipe.cookingTime),
      ingredients,
    };
    const data = await setJSON(`${API_URL}?key=${KEY}`, recipe);
    console.log(data, '❌');
    console.log(data.data.recipe);
    state.recipe = createRecipeObject(data.data.recipe);
    console.log(state.recipe);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

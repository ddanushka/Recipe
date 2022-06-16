import axios from 'axios';

const getData = async (url) => {
    const { data } = await axios.get(url);
    return data;
};

// get all categories
export function Categories() {
    return getData(`https://www.themealdb.com/api/json/v1/1/categories.php?apiKey=${process.env.REACT_APP_API_KEY}`);
}

// get specific category
export function getCategory(category) {
    return getData(`https://www.themealdb.com/api/json/v1/1/filter.php?apiKey=${process.env.REACT_APP_API_KEY}&c=${category}`);
}

// get single recipe
export function getRecipe(recipeId) {
    return getData(`https://www.themealdb.com/api/json/v1/1/lookup.php?apiKey=${process.env.REACT_APP_API_KEY}&i=${recipeId}`);
}

// search for recipes
export function getSearchResult(keyword) {
    return getData(`https://www.themealdb.com/api/json/v1/1/search.php?apiKey=${process.env.REACT_APP_API_KEY}&s=${keyword}`);
}
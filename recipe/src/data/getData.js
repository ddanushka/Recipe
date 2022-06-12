import axios from 'axios';

const getData = async (url) => {
    const { data } = await axios.get(url);
    return data.categories;
};

export function Categories() {
    return getData(`https://www.themealdb.com/api/json/v1/1/categories.php?apiKey=${process.env.REACT_APP_API_KEY}`);
}

export function getCategory(category) {
    return getData(`https://www.themealdb.com/api/json/v1/1/filter.php?apiKey=${process.env.REACT_APP_API_KEY}&c=${category}`);
}

export function getRecipe(recipeId) {
    return getData(`https://www.themealdb.com/api/json/v1/1/lookup.php?apiKey=${process.env.REACT_APP_API_KEY}&i=${recipeId}`);
}
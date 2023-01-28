import { apiKey } from "./apiKey";
import { keyAPI, languageAPI } from "./apiSet";

const searchMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`;


export const searchPeople = async (query) => {
    if (!query) {
        return;
    };

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/person?${keyAPI}${languageAPI}&query=${query}&page=1`);

        if (!response.ok) {
            throw new Error(response.statusText);
        };

        return response.json();

    } catch (error) {
        console.log(error);
    };
};

console.log(searchPeople());
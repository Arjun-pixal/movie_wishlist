import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  return data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  return data;
};

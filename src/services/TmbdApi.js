import axios from 'axios';
const API_KEY = '39e7da294e936c33fd9232ae467a3749';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  page: 1,
  include_adult: false,
};

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(`search/movie?query=${keyword}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const fetchActors = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data.results;
};

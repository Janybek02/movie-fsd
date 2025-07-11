import type { Movie } from "./types";
import axios from "axios";

const VITE_API_KEY = "api_key=81cd179ad56aeece49d8340b7c075f89"
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?`
const TENDING_URL = "https://api.themoviedb.org/3/trending/all/day"
const SERIES_URL = "https://api.themoviedb.org/3/tv/popular?"

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await axios.get<{ results: Movie[] }>(
    `${POPULAR_URL}${VITE_API_KEY}`
  );
  return res.data.results; 
};

export const fetchSeriesMovies = async (): Promise<Movie[]> => {
  const res = await axios.get<{ results: Movie[] }>(
    `${SERIES_URL}${VITE_API_KEY}`
  );
  return res.data.results; 
};

export const fetchTrendsMovies = async (): Promise<Movie[]> => {
  const res = await axios.get<{ results: Movie[] }>(
    `${TENDING_URL}?${VITE_API_KEY}`
  );
  return res.data.results; 
};
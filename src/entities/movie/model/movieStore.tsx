import {create} from 'zustand';
import type {MovieStore} from '../types/types';
import axios from "axios";

const VITE_API_KEY = "api_key=81cd179ad56aeece49d8340b7c075f89"
const VITE_API_URL = `https://api.themoviedb.org/3/movie/popular?${VITE_API_KEY}`

export const usemoviestore = create<MovieStore>((set) => ({
    movies: [],
    isLoading: false,
    error: null,
    fetchMovies: async() =>  {
        set({isLoading: true, error: null});
        try {
            const res = await axios.get(VITE_API_URL);
            set({ movies: res.data.results, isLoading: false });
            console.log('movies', res.data.results);
        } catch (error: any) {
            set({error : error.message || "Error", isLoading: false});
        } 
    },
}))


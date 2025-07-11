import {create} from 'zustand';
import type {MovieStore} from './types';
import { fetchPopularMovies, fetchSeriesMovies, fetchTrendsMovies } from './api';


export const usemoviestore = create<MovieStore>((set) => ({
  popular: [],
  trending: [],
  series: [],
  isLoading: false,
  error: null,
  fetchAll: async () => {
    set({isLoading: true, error: null})
    try{
        const [popular, trending, series] = await Promise.all([
            fetchPopularMovies(),
            fetchTrendsMovies(),
            fetchSeriesMovies()
        ]);
         set({ popular, trending, series, isLoading: false });
    } catch (e) {
      set({ error: (e as Error).message, isLoading: false });
    }
  },
}));

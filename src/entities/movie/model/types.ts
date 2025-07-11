export type Movie =  {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
};


// import { Movie } from './types';

export interface MovieStore {
  popular: Movie[];
  trending: Movie[];
  series: Movie[];
  isLoading: boolean;
  error: string | null;
  fetchAll: () => Promise<void>;
}
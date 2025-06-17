export type Movie=  {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
};


export interface MovieStore {
    movies: Movie[];
    isLoading: boolean;
    error: string |null;
    fetchMovies: () => Promise<void>    
}
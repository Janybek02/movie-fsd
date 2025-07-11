import type { FC,  } from "react";
import { useEffect } from "react";
import styles from "./TrendingList.module.scss"
import { MovieCards } from "../../../entities/movie/ui/MovieCards";
import style from "./TrendingList.module.scss"
import { usemoviestore } from "../../../entities/movie/model/MovieStore";
export const TrendingList: FC = () => {
  const { trending, isLoading, error, fetchAll } = usemoviestore();
    useEffect(() => {
        fetchAll();
    }, []);
    if (isLoading) return <p>Loading movies...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <>
      <div className={style.main}>
        <div className={style.div} id="#style-1">
          {
            trending.map((movie) => 
              <MovieCards movie={movie} />
            )
          }
        </div>
      </div>
    </>
  );
};
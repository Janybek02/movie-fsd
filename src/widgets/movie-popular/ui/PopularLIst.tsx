import type { FC,  } from "react";
import { useEffect } from "react";
import style from "./PopularList.module.scss"
import { MovieCards } from "../../../entities/movie/ui/MovieCards";
import { usemoviestore } from "../../../entities/movie/model/MovieStore";
export const PopularList: FC = () => {
  const { popular, isLoading, error, fetchAll } = usemoviestore();
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
            popular.map((movie) => 
              <MovieCards movie={movie} />
            )
          }
        </div>
      </div>
    </>
  );
};
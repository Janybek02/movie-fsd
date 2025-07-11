import type { FC } from "react";
import { useEffect, useState } from "react";
import { usemoviestore } from "../../../entities/movie/model/MovieStore";
import styles from "./MovieSlider.module.scss";
import { Typography } from "../../../shared/ui/typography/Typography";
import { FaPlay } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";

export const MovieSlider: FC = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { popular, isLoading, fetchAll } = usemoviestore();

  useEffect(() => {
    fetchAll();
  }, []);

  const imagePrev = () => {
    setImageIndex((prev) =>
      prev === 0 ? popular.length - 1 : prev - 1
    );
  };

  const imageNext = () => {
    setImageIndex((prev) =>
      prev === popular.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.slider}>
      <button onClick={imagePrev} className={styles.arrow}>❮</button>

      <div className={styles.trackWrapper}>
        <div
          className={styles.track}
          style={{ transform: `translateX(calc(32.6% - ${imageIndex * 80}vw - ${imageIndex * 20}px))` }}>
          {popular.map((movie) => (
            <div
              key={movie.id}
              className={styles.slide}
              style={{
                backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}")`,
              }}
            >
              <div className={styles.page}>
                <div className={styles.flex}>
                    <div>
                  <Typography color="white" variant="h4" wieght="bold">{movie.title}</Typography>
                  <Typography color="white" variant="smallBodyText" wieght="regular">{movie.release_date}</Typography>
                </div>
                <div className={styles.div}>
                  <div className={styles.border}>
                    <div className={styles.sicle}>
                      <div className={styles.inSicle}>
                        <Typography color="white" variant="h6" wieght="semiBold">{movie.vote_average}</Typography>
                      </div>
                    </div>
                  </div>
                  <div className={styles.border}>
                    <Typography variant="h4" color="white" wieght="medium"><MdBookmarkAdded className={styles.addIcon} /></Typography>
                  </div>
                  <div className={styles.border}>
                    <Typography variant="h4" color="white" wieght="medium"><MdOutlineFavorite className={styles.favoriteIcon} /></Typography>
                  </div>
                  <div className={styles.border}>
                    <Typography variant="h5" color="white" wieght="medium"><FaPlay className={styles.watchIcon} /></Typography>
                  </div>
                  <Typography variant="h6" color="white" wieght="medium" >Watch trailer</Typography>
                </div>
                <div>
                  <Typography variant="bodyText" wieght="regular" color="white">{movie.overview}</Typography>
                </div>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={imageNext} className={styles.arrow}>❯</button>
    </div>
  );
};
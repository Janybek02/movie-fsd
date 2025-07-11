import type { FC } from "react";
import style from "./HomePage.module.scss"
import { TrendingList } from "../../widgets/movie-trending/ui/TrendingList";
import { PopularList } from "../../widgets/movie-popular/ui/PopularLIst";
import { MovieSlider } from "../../features/movie-slider/model/MovieSlider";
import { Typography } from "../../shared/ui/typography/Typography";

export const HomePage: FC = () => {
    return (
        <div className={style.main}>  

            <MovieSlider/>
            <Typography color="white" wieght="medium" variant="h3" >Новые фильмы</Typography>
            <TrendingList/>
            <PopularList/>
        </div>
    )
}


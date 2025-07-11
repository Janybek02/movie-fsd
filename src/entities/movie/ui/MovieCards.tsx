import type { FC, } from "react";
import style from "./MovieCards.module.scss"
import type { Movie } from "../model/types";
import { Typography } from "../../../shared/ui/typography/Typography";
interface Props {
    movie: Movie;
}
export const MovieCards: FC<Props> = ({ movie }) => {

    return (
        <div className={style.subject}>
            <div>
                <img className={style.img} width="100%" src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt="" />
                <div className={style.hidden}>
                    <div className={style.flex}>
                        <Typography color="white" wieght="medium" variant="h6">{movie.vote_average}</Typography>
                        <div className={style.font}>
                            <Typography color="white" wieght="medium" variant="h6">{movie.title}</Typography>
                            <Typography color="white" wieght="medium" variant="h6">{movie.release_date}</Typography>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
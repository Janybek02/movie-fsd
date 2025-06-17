import type { FC } from 'react';
import { useEffect } from "react";
import { usemoviestore } from "../../entities/movie/model/movieStore";
import { Buttons } from "../../shared/ui/button/Buttons";
import { Typography } from '../../shared/ui/typography/Typography';


export const MoviePage: FC = () => {
    const { movies, isLoading, error, fetchMovies } = usemoviestore();
    console.log('movies', movies);
    useEffect(() => {
        const fetchData = async () => {
            await fetchMovies();
        };
        fetchData();
    }, [])
    return (
        <>
            <Typography variant='bodyText' color='black' wieght='medium'>sadfasd</Typography>
             <Buttons variant='primary' size='medium' color='default'>Button</Buttons>
        </>
    );

}
import React from 'react'
import styles from './resultPage.module.css';
import BaseLayout from '../../components/coreLayout/BaseLayout';
import Button from '../../components/button/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ResultPage = () => {
    const navigate = useNavigate();
    function sendTo(pageName) {
        const path = pageName;
        navigate(path);
    }
    const {state} = useLocation();
    const {allMovies} = state;
    console.log(allMovies);
    const mostRatedMovie = allMovies.reduce((max, min) => max.vote_average > min.vote_average ? max : min);
    // useEffect(
    //     () => {

    //         console.log(mostRatedMovie);
    //     }, [allMovies]
    //);

    return (
        <BaseLayout>
            <main>
                <h1>{mostRatedMovie.title}</h1>
                <section className={styles.resultContainer}>
                    <aside className={styles.containerRating}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${mostRatedMovie.poster_path}`} alt="movie-banner" />
                        <p>Movie Rating<br></br><span className={styles.movieRating}>{mostRatedMovie.vote_average}</span></p>

                    </aside>
                    <p>
                        {mostRatedMovie.overview}
                    </p>
                </section>
                <Button
                    fontSize="1.8rem"
                    padding="1% 4%"
                    borderColor="#373F47"
                    marginBottom="1rem"
                    onClick={() => sendTo('/')}
                >
                    NOVA BUSCA
                </Button>
            </main>
        </BaseLayout>
    )
}

export default ResultPage
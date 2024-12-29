import { API_OPTIONS } from '../Utils/constants'
import { addNowPlayingMovies } from '../Utils/MovieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = () => {

        // Fetching data from TMDB API and updating the Redux store

        const dispatch = useDispatch();


        const getNowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
            const json = await data.json();
            // console.log(json);
            dispatch(addNowPlayingMovies(json.results));
        }

        useEffect(() => {
            getNowPlayingMovies();
        }, [])

    }

    export default useMovieTrailer;

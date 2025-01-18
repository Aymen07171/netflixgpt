import { useEffect } from "react";
import { addTrendingMovies } from "../Utils/MovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";

    const useTrendMovie = () => {
        const dispatch = useDispatch();

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
        const json = await data.json();
        console.log(json);

        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])
    }

    export default useTrendMovie;
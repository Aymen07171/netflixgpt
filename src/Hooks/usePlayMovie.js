import { useEffect } from "react";
import { addTrailerVideo } from "../Utils/MovieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";

    const usePlayMovie = (movieId) => {
        const dispatch = useDispatch();

    const getMoviesVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        // console.log(json);

        const trailer = json.results.filter(video => video.type === "Trailer");
        const trailerVideo = trailer.length === 0 ? trailer[0] : json.results[0];

        dispatch(addTrailerVideo(trailerVideo));
    }

    useEffect(() => {
        getMoviesVideos();
    }, [])
    }

    export default usePlayMovie;
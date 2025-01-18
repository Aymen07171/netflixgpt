    import React from 'react'
    import MovieList from './MovieList'
    import { useSelector } from 'react-redux';


    const SecondaryContainer = () => {
        const movies = useSelector(store => store.movies);
    return (
            <div>
                <div className='-mt-20 relative z-10'>
                    <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                </div>
                <div className='bg-black'>
                    <MovieList title="Trending" movies={movies.trendingMovies} />
                    <MovieList title="Top Rated" movies={movies.trendingMovies} />
                    <MovieList title="Upcoming" movies={movies.trendingMovies} />
                </div>
            </div>
    )
    }

    export default SecondaryContainer
        
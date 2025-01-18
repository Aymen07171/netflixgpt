import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    // Early return if movies is undefined or null
    if (!movies) return null;

    return (
        <div className='px-6'>
            <h1 className='text-lg md:text-4xl py-4 text-white font-bold'>{title}</h1>
            <div className='relative'>
                <div className='flex overflow-x-scroll scroll-smooth no-scrollbar'>
                    <div className='flex gap-4 transition-transform duration-300 ease-in-out'>
                        {movies?.map((movie) => (
                            <MovieCard 
                                key={movie.id} 
                                posterPath={movie.poster_path} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
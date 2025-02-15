        import React from 'react'
        import usePlayMovie from '../Hooks/usePlayMovie';
        import { useSelector } from 'react-redux';

    

        const VideoBackground = ({movieId}) => {
            // Fetch Trailer Video
            const trailerVideo = useSelector(store => store.movies?.trailerVideo);
            usePlayMovie(movieId);

            
        return (
            <div>
                <iframe
                    className="w-screen aspect-video"
                    src={`https://www.${trailerVideo?.site.toLowerCase()}.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&start=55&enablejsapi=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    ></iframe>
            </div>
        )   
        }

        
        export default VideoBackground





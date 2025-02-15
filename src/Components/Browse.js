import useMovieTrailer from '../Hooks/useMovieTrailer'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendMovie from '../Hooks/useTrendMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

    const Browse = () => {

        const showGptSearch = useSelector(store => store.gpt.showGptSearch);
        useMovieTrailer();
        useTrendMovie();



    return (
        <div>
            <Header />
            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    )
    }

    export default Browse

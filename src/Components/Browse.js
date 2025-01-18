import useMovieTrailer from '../Hooks/useMovieTrailer'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTrendMovie from '../Hooks/useTrendMovie'


    const Browse = () => {


        useMovieTrailer();
        useTrendMovie();



    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
    }

    export default Browse

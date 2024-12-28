import useMovieTrailer from '../Hooks/useMovieTrailer'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


    const Browse = () => {


        useMovieTrailer();



    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
    }

    export default Browse

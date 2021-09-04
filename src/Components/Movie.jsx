import {useParams} from 'react-router-dom'

const Movie = (props) => {
    const params = useParams()
    const findMovie = props.data.find(e => e.id === parseInt(params.movieId))
    return(
        <>
            <img src={findMovie.img} width='960' height='500'></img>
            <h1>{findMovie.title}</h1>
            <p>{findMovie.description}</p>
        </>   
    )
}

export default Movie
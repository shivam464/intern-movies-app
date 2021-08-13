import React from 'react'
import { Link } from 'react-router-dom'

const Searchresult = ({ movies }) => {
    return (
        <>
        
            {movies.map((moviedata) => {
                return (
                    <div class="item" id="grig-items">
                        <Link to="#">
                            <img src={"https://image.tmdb.org/t/p/w185" + moviedata.poster_path} alt="Loading"/>
                            <p class="movie-name">{moviedata.original_title}</p>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Searchresult

import React from 'react'
import { Link } from 'react-router-dom'
import { Default_data } from '../Components/Default_data'



const Default_movie_poster = () => {

    return (
        <>
            {Default_data.map((data) => {
                const { poster, title } = data
                return (
                    <div class="item" key={data.id}>
                        <Link to="#">
                            <img src={poster} alt="Loading"/>
                            <p class="movie-name">{title}</p>
                        </Link>
                    </div>
                )
            })}
            

        </>

    )
}

export default Default_movie_poster

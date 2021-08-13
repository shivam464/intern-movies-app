import React from 'react'
import Searchresult from './Searchresult'
import { Link } from 'react-router-dom';
import back_icon from '../assets/images/icons/arrow-back.png';
import close_icon from '../assets/images/icons/close-icon.png';
import Default_result from './Default_result';
import Default_movie_poster from './Default_movie_poster';

const Home = ({ movies }) => {
    return (
        <div class="tv-layout">

            <div class="container-fluid">

                <div class="row">
                    <div class="span12">

                        <div class="nav-row">
                            <Link to="/newfiledsfd.html">
                                <div class="round-box back-arrow">
                                    <img src={back_icon} alt="Loading" />
                                </div>
                            </Link>

                            <Link to="/search">
                                <div class="round-box close-icon">
                                    <img src={close_icon} alt="Loading" />
                                </div>
                            </Link>

                        </div>



                        <div class="tv-data-row">
                            <h1>Search Results</h1>
                            <div class="col-12">
                                <div class="search-results" >
                                {movies.length ===0 ? (<Default_movie_poster />):(<Searchresult movies={movies} />)}
                                    
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

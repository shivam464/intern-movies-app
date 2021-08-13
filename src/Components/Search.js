import React from 'react'
import Inputfield from './Inputfield'
import cross_icon from '../assets/images/icons/close-icon.png'
import back_icon from '../assets/images/icons/arrow-back.png'
import Recentsearch from './Recentsearch'
import Keyboard from './Keyboard'
import { Link } from 'react-router-dom'
import Home from '../Components/Home'
const Search = ({setmoviename,api_call,moviename,movies}) => {
    
    return (
        <div class="tv-layout">

            <div class="container-fluid">

                <div class="row">
                    <div class="span12">
                        <div class="nav-row">
                            <Link to="/newpages">
                                <div class="round-box back-arrow">
                                    <img src={back_icon} alt="Loading"/>
                                </div>
                            </Link>

                            <Link to="/files">
                                <div class="round-box close-icon">
                                    <img src={cross_icon} alt="Loading"/>
                                </div>
                            </Link>

                        </div>

                        <div class="tv-data-row">
                            <div class="col-12">
                                <Inputfield setmoviename={setmoviename} api_call={api_call} moviename={moviename} movies={movies}/>
                                <Recentsearch />
                                <Keyboard api_call={api_call} moviename={moviename} movies={movies}/>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

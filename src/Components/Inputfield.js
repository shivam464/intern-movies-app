import React from 'react'
import { useHistory } from 'react-router-dom'
import search_icon from '../assets/images/icons/search-icon.png'


const Inputfield = ({ setmoviename, api_call, moviename, movies }) => {
    let history = useHistory()
    const redirectpage = (event) => {
        event.preventDefault();

        if (moviename.trim().length > 0) {
            api_call(event)
            
             history.push('/home');
            
        }else{
            history.push('/');
        }
        
    }
    // if(movies[null]){
    //     history.push('/');
    // }


    return (
        <div class="seach-box">
            <div class="input-group">
                <form onSubmit={redirectpage} >
                    <span class="input-search">
                        <img src={search_icon} alt="Loading" />
                    </span>
                    <input type="text" class="form-control" value={moviename} onChange={(event) => setmoviename(event.target.value)} placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                </form>
            </div>
        </div>
    )
}

export default Inputfield

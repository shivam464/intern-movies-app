import './App.css';
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.css';
import './assets/css/slide-right-panel.css';
import './assets/css/tv.css';
import './assets/css/responsive.css';
import axios from 'axios';
import { useState } from 'react';
import Search from './Components/Search';
import Default_result from './Components/Default_result';
import { BrowserRouter, Switch, Route, Redirect, useHistory, Router } from 'react-router-dom'
import Home from './Components/Home';



const App = () => {
  // let history = useHistory()
  const [moviename, setmoviename] = useState("")
  const [movies, setmovies] = useState([])





  const api_call = async (event) => {
    event.preventDefault();

    const api_key = "9b4570d98bd74ba56f272e0c791193ed"
    const api_data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${moviename}`)

    setmovies(api_data.data.results)
    console.log("enter ho gya hai");

  }


  return (

    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Default_result} />
        <Route exact={true} path="/search">
          <Search setmoviename={setmoviename} api_call={api_call} moviename={moviename} movies={movies} />
        </Route>
        <Route exact={true} path="/home" >
          <Home movies={movies} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

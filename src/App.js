import React, {Component, useState} from 'react'
import MovieList from './Components/MovieList'
import Navbarr from './Components/Navbar/Navbarr'
import  {MoviesData} from './Components/MoviesData' 
import AddMovie from './Components/AddMovie/AddMovie'
import InfoMovie from './Components/InfoMovie'
import './App.css'
import {Switch, Route} from 'react-router-dom'



const App = () => {
  const [Movies, setMovies] = useState(MoviesData)
  const [name, setName] = useState ("")
  const [ratingSearch, setRatingSearch] = useState(0)
  const Addfilm = (newmovie) => {

    return setMovies([...Movies, newmovie])
  }

  return (
    <div className= "App">
      <Switch>
  <Route exact path = '/' render={() =>{ 
          return (
        <div>
      <Navbarr 
      name={name} setName={setName} 
       ratingSearch={ratingSearch} 
        setRatingSearch={setRatingSearch}
        />
      <div className = "positionADD" style={{alignItems:"center"}}>
        <span>
        <MovieList Movies={Movies}  name={name}  ratingSearch={ratingSearch}/>
        </span>
        <span>  
         <AddMovie Addfilm={Addfilm}/>
        </span>
      </div>
    </div>
  );
}}
 />
<Route path ='/InfoMovie'component = {InfoMovie}/>
</Switch>
</div>
);
}

export default App;

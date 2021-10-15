import React from 'react'
import {Link} from 'react-router-dom'
import './InfoMovie.css'

const InfoMovie = (props) =>{
    const el=  props.location.state.el;
 
  return(
    <div>
   <h1 style={{background: "orange"}} >{el.name}</h1>
   <iframe title= 'video' style={{ height: "1000%", width: "100%"}}  src={el.Trailer} />
   <p style={{background: "white"}} >{el.descriptionsdetails}</p>
   <Link to ="/"> <button variant ="primary"onClick={onclick} style={{background: "red"}} > Go To Home </button></Link>
  </div>
  );
}

export default InfoMovie

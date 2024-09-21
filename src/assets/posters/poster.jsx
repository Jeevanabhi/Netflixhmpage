import React, { useState,useEffect } from 'react';
import api from '../axios';
import './poster.css';
import { imageurl } from '../constants/constants';

function Poster(props){
    const[movies,SetMovies] = useState([]);
    useEffect(()=>{
        api.get(props.url).then(response=>{
            console.log(response.data);
            SetMovies(response.data.results);
        })
    },[props.url]);

       

    
        const handleClick = (id) => {
            console.log("Clicked movie ID:", id);
            api
              .get(`/movie/${id}/videos?language=en-US`)
              .then((response) => {
                console.log(response.data.results[0].key);
                if (response.data.results.length > 0) {
                 const videos = response.data.results;
                 const videokey = videos[0].key;
                  const youtubeUrl = `https://www.youtube.com/watch?v=${videokey}`; // Construct the YouTube URL
                  window.open(youtubeUrl, '_blank'); // Open the trailer in a new tab
                  // Set the first video's key
                }
              })
              .catch((error) => {
                console.error("Error fetching movie videos:", error);
              });
          };

      
      
     

    return(
        <div className="row">
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map(movie=>(
                    <img key = {movie.id} onClick={()=>handleClick(movie.id)}className='poster' src={imageurl + movie.poster_path} alt="" />
                ))}
            
 
            </div>
            
            
        </div>
    )
    
}
export default Poster
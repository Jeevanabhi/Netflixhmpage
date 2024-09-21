

import React, { useEffect, useState } from 'react';
import api from './axios'; 
import './banner.css';
import { imageurl } from './constants/constants';

function Banner() {
  // Ensure your axios instance is imported correctly

  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/trending/all/day?language=en-US');
        setMovie(response.data.results[(Math.floor(Math.random()*20))]);
        console.log(response.data.results[0]); // Inspect the entire data structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  const handleClick = (id) => {
    console.log("Clicked movie ID:", id);
    api
      .get(`/movie/${id}/videos?language=en-US`)
      .then((response) => {
        const videos = response.data.results;
        if (videos && videos.length > 0) {
          console.log(videos[0]); // Log the first video to confirm
          const videokey = videos[0].key; // Extract the video key
          const youtubeUrl = `https://www.youtube.com/watch?v=${videokey}`; // Construct the YouTube URL
          window.open(youtubeUrl, '_blank'); // Open the trailer in a new tab
        } else {
          alert("No videos available for this movie.");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos:", error); // Error handling
      });
  };
  
  
  return (
    <div className='banner-container'>
      <div className='banner-img'><div className='banner-img' style={{ backgroundImage: `url(${imageurl+movie.backdrop_path})` }}></div>
      </div>
      <div className="banner-overlay"></div>
      <div className="banner-bottom"></div>
      <div className='banner-content'>
        <h1>{movie.name}</h1>
        <p>{movie.overview}</p>
        <button id="play" onClick={()=>handleClick(movie.id)
        }> Play Now</button>
        <button id= "info">More Info</button>
        
      </div>
    </div>
  );
  }

 
export default Banner;

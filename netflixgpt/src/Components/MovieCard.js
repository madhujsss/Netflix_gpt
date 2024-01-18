import React from 'react'
import {IMG_URL} from '../Utils/constants'
import useVideoPlay from '../Hooks/useVideoPlay';
import {  useSelector } from 'react-redux';
import { useState } from 'react';


const MovieCard = ({id, posterPath, title, release, vote, language}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedSize, setEmbedSize] = useState({ width: 640, height: 360 });
  const videoPlayer = useSelector(store => store.movies.videoPlayer);
   
  useVideoPlay(id);

  const handlePlay = () => {
    setEmbedSize({ width: 400, height: 250 });
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className='w-48 pr-4 rounded-md hover:w-56 cursor-pointer md:w-36 md:hover:w-44 sm:w-24'  onClick={handlePlay} 
    onMouseLeave={handlePause}>
       <img width={250} alt='img' src={IMG_URL+posterPath} /> 
       <div>
        <h3 className='text-xl font-semibold text-wrap: wrap '>{title}</h3>
        <h4 className='font-lg'>Language: {language}</h4>
        <h4>Release date: {release}</h4>
        <h3 className='text-green-950	font-semibold'>Avg voting: {Math.round(vote * 100)}</h3>
     </div>
   
     {isPlaying && (
     <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ml-10">
      <div className="relative w-full h-0 " >
        <iframe 
          width={embedSize.width}
          height={embedSize.height}
        src={"https://www.youtube.com/embed/"+videoPlayer?.key+ "?autoplay=1&mute=1&showinfo=0"}
         title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " 
          >
          </iframe>
          <button
              onClick={handlePause}
              className="relative top-4 right-4 text-white cursor-pointer bg-red-500 rounded-full p-2 ml-10"
            >
              Close
            </button>
      </div>
      </div>
    )}
    </div>
  )
}

export default MovieCard

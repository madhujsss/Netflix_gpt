import React from 'react'
import {  useSelector } from 'react-redux';
import useVideoBackground from '../Hooks/useVideoBackground';
import { useState } from 'react';

const VideoTitle = ({title, overview, movieId, release, vote, language}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const trailerVideo = useSelector(store => store.movies.trailerVideo);
   
  useVideoBackground(movieId);
  const playVideo = () => {
    setIsPlaying(true);
  }

  const showDetails = () => {
    setIsInfoClicked(true);
  }

  const hideDetails = () => {
    setIsInfoClicked(false);
  }

  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute'>
      <h1 className='md:text-3xl font-bold text-white sm:text-xl'>{title}</h1>
      <p className='md:py-6 sm:py-2 md:text-lg md:w-2/4 text-white sm:text-sm sm:w-3/4 lg:w-2/4'>{overview}</p>
      <div>
        <button onClick={playVideo} className='lg:px-10 lg:py-4 md:px-10 md:py-4 text-center text-sm sm:px-1 sm:py-2 cursor-pointer rounded-md bg-white font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-black'>&#9658; Play</button>
        <button onClick={showDetails} onMouseOver={showDetails} onMouseLeave={hideDetails} className='lg:px-10 md:px-10 md:py-4 text-sm ml-4 sm:px-2 sm:py-2  cursor-pointer rounded-md bg-white font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-black'>&#8505; More info</button>
      </div>
      {isPlaying && ( 
         <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center ml-10' >
         <iframe className='absolute w-full h-0'
         width={450}
         height={400}
           src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?autoplay=1&showinfo=0"}
            title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share, " 
             >
             </iframe>
       </div>)}
       {isInfoClicked && (
         <div className='  bg-white h-50 mr-32 ml-10 mt-10 p-5 rounded-lg w-2/4'>
         <h3 className='text-2xl font-semibold text-wrap: wrap '>{title}</h3>
         <p className='italic pt-3 text-lg w-4/4 text-black'>{overview}</p>
         <h4 className='font-lg'>Language: {language}</h4>
         <h4>Release date: {release}</h4>
         <h3 className='text-green-950	font-semibold'>Avg voting: {Math.round(vote * 100)}</h3>
         <button onClick={hideDetails} className=' cursor-pointer mt-2.5 mr-5 rounded-md bg-red-500 p-4 w-20 text-center text-lg font-bold text-red shadow-sm '>Close</button>
      </div>
       )}
    </div>
  )
}

export default VideoTitle

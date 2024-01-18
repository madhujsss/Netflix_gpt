import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null) return;

    const mainMovie = movies[0];
 
    const { original_title, overview, id, original_language, release_date, title, vote_average} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieId={id} language= {original_language} release={release_date} vote={vote_average} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer

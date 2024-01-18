import { addVideoPlayer } from '../Utils/moviesSlice';
import  { useEffect } from 'react'
import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux';

const useVideoPlay = (movieId) => {
  const dispatch = useDispatch();

    const getMovieVideos = async () => {
    const data = await fetch( "https://api.themoviedb.org/3/movie/" +
    movieId +
    "/videos",
  options);
     const json = await  data.json();
     const filterData = json.results[0];
    dispatch(addVideoPlayer(filterData));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
 
}

export default useVideoPlay

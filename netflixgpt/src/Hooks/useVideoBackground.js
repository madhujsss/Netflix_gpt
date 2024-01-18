import  { useEffect } from 'react'
import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../Utils/moviesSlice';


const useVideoBackground = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
    const data = await fetch( "https://api.themoviedb.org/3/movie/" +
    movieId +
    "/videos?language=en-US",
  options)
     const json = await  data.json();

     const filterData = json.results.filter((video) => video.type==="Trailer")
      const trailer = filterData[0];
      
     
      dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
 
}

export default useVideoBackground

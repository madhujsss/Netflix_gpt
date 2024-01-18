import { options } from '../Utils/constants'
import { useDispatch } from 'react-redux'
import { addTopratedMovies } from '../Utils/moviesSlice'
import { useEffect } from 'react'


const useTopratedMovies = () => {
    const dispatch = useDispatch();

  const getTopratedMovies = async () =>
  {
    const data = await 
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
     const json = await data.json();
    
     dispatch(addTopratedMovies(json.results));
  }

  useEffect(() => {
    getTopratedMovies();
  }, []);

};

export default useTopratedMovies;
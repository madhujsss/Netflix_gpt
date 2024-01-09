import React from 'react'
import {IMG_URL} from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 md:w-48 pr-4 '>
     <img width={250} alt='img' src={IMG_URL+posterPath} />
    </div>
  )
}

export default MovieCard

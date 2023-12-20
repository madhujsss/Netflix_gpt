import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-6 md:px-24 absolute'>
      <h1 className='text-3xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
      <div>
        <button className='rounded-md bg-white px-10 py-4 w-32 text-center text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-black'>&#9658; Play</button>
        <button className='ml-4 rounded-md bg-white px-10 py-4 w-42 text-sm font-semibold text-black shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-black'>&#8505; More info</button>
      </div>
    </div>
  )
}

export default VideoTitle

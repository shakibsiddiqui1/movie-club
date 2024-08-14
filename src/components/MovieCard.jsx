import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/apiConfig'
import add from '../assets/add.png'
import notadd from '../assets/notadd.png'
import { useDispatch } from 'react-redux'
import { addFavouriteMovies } from '../utils/redux/movieSlice'

const MovieCard = ({movieData}) => {
  const [favorite, setFavourite] = useState(false)
  const dispatch = useDispatch()
  const {id, title, release_date, poster_path} = movieData
  const year =  release_date.split('-')[0];
  const movieTitle = title.split(':')[0]

  const handleFavouriteItems = ()=>{

     // Retrieve existing favorites from local storage
     const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
     
      if(existingFavorites.length !== 0){
        const movie = existingFavorites.find((movie)=>movie.id===id)
        if(movie){
          const newArray = existingFavorites.filter((movie)=>movie.id !== id)
          localStorage.setItem('favorites', JSON.stringify(newArray));
          dispatch(addFavouriteMovies(newArray))
          setFavourite(false)
          return
        } }
        
     // Add new favorite item
     const newFavorite = {id, title, release_date, poster_path };
     existingFavorites.push(newFavorite);
 
     // Save the updated list back to local storage
     localStorage.setItem('favorites', JSON.stringify(existingFavorites));
     setFavourite(true)
  }

  const handleImage = ()=>{
      const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if(existingFavorites.length !== 0){
        const movie = existingFavorites.find((movie)=>movie.id===id)
        if(movie){
          return add
        }}
      return notadd
  }
  return (
    <>
      <div className='w-40 sm:w-48 md:w-72 lg:w-48 relative  rounded-lg shadow-gray-700 shadow-md'>
          <img className='w-40 h-60 sm:w-48 sm:h-72 md:w-72 lg:w-48 md:h-96 lg:h-72 rounded-lg' src={`${IMG_CDN_URL}${poster_path}`} alt={title+' image'}/>
            <div className='absolute bottom-0 left-0  bg-black bg-opacity-70 text-white w-40 sm:w-48 md:w-72 lg:w-48 px-2 py-1 rounded-b-lg '>
                <p className='text-[14px] font-semibold'>{movieTitle}</p>
                <div className='flex justify-between items-center '>
                    <p className='text-[12px] font-semibold px-1 bg-white text-black rounded-sm'>Released on: {year}</p>
                    <span>
                       <img src={handleImage()} alt='favourite-logo' className='w-6' onClick={handleFavouriteItems}/>
                    </span>
                </div>
            </div>
      </div>
    </>
  )
}

export default React.memo(MovieCard)
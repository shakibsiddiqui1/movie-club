import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteMovies } from '../utils/redux/movieSlice'
import { Link } from 'react-router-dom'

const Favourite = () => {
  const dispatch = useDispatch()
  const {favouriteMovies} = useSelector(store=>store.movies)

  useEffect(()=>{
    let localStorageData = localStorage.getItem('favorites');
    if(localStorageData) {
        let moviesData = JSON.parse(localStorageData);
        dispatch(addFavouriteMovies(moviesData))}
  },[])
  
  return (
    <>
        <section >
            <div className='w-full py-5 border border-b-gray-300 shadow-md grid grid-cols-12'>
              <p className='text-center text-2xl sm:text-4xl font-semibold col-span-9 lg:col-span-11'>Favourite Movies</p>
              <div className='col-span-3 lg:col-span-1'>
                <Link to='/'><button className='bg-red-700 text-white font-semibold px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xl'>Home</button></Link>
              </div>
            </div>
            {
              favouriteMovies.length == 0 ? <h1 className='text-3xl sm:text-4xl font-semibold text-center mt-20'>Please add your favourite movies 📺</h1> :
                <div className="flex justify-center mt-10 ">
                  <ul className="none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-y-10 w-11/12">
                          {
                              favouriteMovies.map((movieData)=><li key={movieData.id}><MovieCard movieData={movieData}/></li>)
                          }
                  </ul>
              </div>
            }
        </section>
    </>
  )
}

export default React.memo(Favourite)
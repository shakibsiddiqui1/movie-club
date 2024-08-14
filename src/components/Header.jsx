import React, { useState } from 'react';
import appLogo from '../assets/app-logo.png';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addFilterMovies, setSearchValue } from '../utils/redux/movieSlice';
import favourite from '../assets/favourite.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const {popularMovies, searchValue} = useSelector(store=>store.movies)
  const dispatch = useDispatch()
  
  const handleSearch = (e)=>{
    const term = e.target.value
    const filtered = popularMovies.filter((movie) =>movie.title.toLowerCase().includes(term.toLowerCase()))
    dispatch(setSearchValue(term))
    dispatch(addFilterMovies([filtered,false]))
  }

  return (
    <>
      <header className='w-full shadow-md'>
        <div className='grid grid-cols-12 py-1 w-full items-center justify-center'>
            <div className='col-span-2 pl-6'>
                <img className='w-14' src={appLogo} alt='logo'/>
            </div>
            <div className='col-span-8 flex justify-center'>
                <div className='flex items-center'>
                    <label htmlFor="search-input" className='sr-only'>Search</label>
                    <input className='w-[150px] sm:w-[350px] md:min-w-[500px] border border-gray-300 rounded-l-full py-1 px-4 md:py-2 shadow-sm ' type='text' aria-label="Search" onChange={handleSearch} placeholder='Search Movie' value={searchValue}/>
                    <button className='border border-gray-300 rounded-r-full py-1 md:py-2 px-2 md:px-5 shadow-sm '><CiSearch style={{width:'24px',height:'24px'}} /></button>
                </div>
            </div>
            <div className='col-span-2 '>
              <Link to='favourite'>
                <div className='flex flex-col items-center pr-4 sm:pr-0'>
                  <img src={favourite} alt='favourite logo' className='w-8'/>
                  <p className='font-semibold text-[12px] sm:text-lg '>Favourites</p>
                </div>
              </Link>
            </div>
        </div>
      </header>
    </>
  )
}

export default React.memo(Header)
import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import MovieCard from "./MovieCard"
import { addError, addFilterMovies, addLoadingIndicator, addPopularMovies, changeInfiniteScrollLoader, increasePage } from "../utils/redux/movieSlice"
import {options } from "../utils/apiConfig"
import Shimmer from "./Shimmer"
import generateRandomNumber from "../utils/constants"

const Body = ()=>{
    const dispatch = useDispatch()
    const {filteredMovies, isLoading, page, infiniteScrollLoader} = useSelector(store=>store.movies)
    const API_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`

    const fetchMoviesData = async ()=>{
        if(infiniteScrollLoader==true){
            const result = await fetch(API_URL, options)
            const movieData = await result.json()
            dispatch(addPopularMovies(movieData.results))
            dispatch(addFilterMovies([movieData.results,true]))
            dispatch(addLoadingIndicator(false))
            dispatch(changeInfiniteScrollLoader(false))}
    }

    const handleInfiniteScroll =  ()=>{
        try{
            if(window.innerHeight + document.documentElement.scrollTop+1  >= document.documentElement.offsetHeight){
                dispatch(changeInfiniteScrollLoader(true))
                dispatch(increasePage())
            }}
        catch(e){dispatch(addError(e))}}

    //Fetching movies's data
    useEffect(()=>{
        fetchMoviesData()
    },[page])

    //Attached Event listener for infinite scroll
    useEffect(()=>{
        window.addEventListener('scroll',handleInfiniteScroll)
        return ()=>window.removeEventListener('scroll',handleInfiniteScroll)
    },[])
    
    if(isLoading) return <Shimmer/>
    
    return(
        <> 
            <main className="pt-10 md:pt-18 lg:pt-10">{
                filteredMovies.length !== 0 ?
                (<section>
                    <div className="flex justify-center ">
                        <ul className="none grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 w-11/12 gap-y-10 md:gap-y-18 lg:gap-y-10">{
                            filteredMovies.map((movieData)=><li key={movieData.id+generateRandomNumber(1,movieData.id)}><MovieCard movieData={movieData}/></li>)}
                        </ul>
                    </div>
                    {
                        infiniteScrollLoader && <div className="flex justify-center"><div className="px-4 py-1 rounded-md font-semibold text-white bg-blue-600 w-36 text-center my-16">Loading Data</div></div>}
                </section>) :
                (<section >
                    <h1 className="text-3xl sm:text-4xl flex justify-center font-semibold mt-20">OOPS😒 No data found</h1>
                </section>)}
            </main>
        </>
    )
}
export default React.memo(Body)
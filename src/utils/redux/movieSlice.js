import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState : {
        popularMovies : [],
        filteredMovies : [],
        isLoading : true,
        page : 1,
        infiniteScrollLoader : true,
        favouriteMovies : [],
        error : null,
        searchValue : '',
    },
    reducers : {
        addPopularMovies : (state,action)=>{
            state.popularMovies = [...state.popularMovies, ...action.payload]
        },
        addFilterMovies : (state,action)=>{
            const [data, isFilter] = action.payload
            if(isFilter){
                state.filteredMovies = [...state.filteredMovies, ...data]
            }
            else{
                state.filteredMovies = data
            }   
        },
        addLoadingIndicator : (state, action)=>{
            state.isLoading = action.payload
        },
        increasePage : (state)=>{
            state.page = state.page+1
        },
        changeInfiniteScrollLoader : (state, action)=>{
            state.infiniteScrollLoader = action.payload
        },
        addFavouriteMovies : (state,action)=>{
            state.favouriteMovies = action.payload 
        },
        addError : (state, action)=>{
            state.error = action.payload
        },
        setSearchValue : (state, action)=>{
            state.searchValue = action.payload
        }
    }
})

export const {addPopularMovies, addFilterMovies, addLoadingIndicator, increasePage, changeInfiniteScrollLoader, addFavouriteMovies, addError, setSearchValue} = moviesSlice.actions
export default moviesSlice.reducer
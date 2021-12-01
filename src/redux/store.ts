import {configureStore} from '@reduxjs/toolkit'
import {movieDatabaseSlice} from './createSlice'

export const {
    setSelectedMovie,
    setSearchPhrase,
    setSearchResults,
} = movieDatabaseSlice.actions

// @ts-ignore
export const getSelectedMovie = (state) => state.currentState.selectedMovie
// @ts-ignore
export const getSearchPhrase = (state) => state.currentState.searchPhrase
// @ts-ignore
export const getSearchResults = (state) => state.currentState.searchResults

export const store = configureStore({
    reducer: {
        currentState: movieDatabaseSlice.reducer,
    },
})
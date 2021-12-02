import {configureStore} from '@reduxjs/toolkit'
import {movieDatabaseSlice} from './createSlice'
import createSagaMiddleware from 'redux-saga'
import root from '../dataLoader'

export const setSelectedMovie = movieDatabaseSlice.actions.setSelectedMovie
export const setSearchPhrase = movieDatabaseSlice.actions.setSearchPhrase
export const setSearchResults = movieDatabaseSlice.actions.setSearchResults
export const setMovieInfo = movieDatabaseSlice.actions.setMovieInfo

// @ts-ignore
export const getSelectedMovie = (state) => state.currentState.selectedMovie
// @ts-ignore
export const getSearchPhrase = (state) => state.currentState.searchPhrase
// @ts-ignore
export const getSearchResults = (state) => state.currentState.searchResults
// @ts-ignore
export const getMovieInfo = (state) => state.currentState.movieInfo

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        currentState: movieDatabaseSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(root)
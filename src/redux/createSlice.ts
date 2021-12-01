import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    selectedMovie: null,
    searchPhrase: null,
    searchResults: [],
}

export const movieDatabaseSlice = createSlice({
    name: 'movie-database',
    initialState,
    reducers: {
        setSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload
        },
        setSearchPhrase: (state, action) => {
            state.searchPhrase = action.payload
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },
    },
})
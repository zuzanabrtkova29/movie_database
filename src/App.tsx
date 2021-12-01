import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import MovieDetailPage from './pages/MovieDetailPage'
import FavoriteMoviesPage from './pages/FavoriteMoviesPage'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/detail" element={<MovieDetailPage/>}/>
                <Route path="/favorites" element={<FavoriteMoviesPage/>}/>
            </Routes>
        </div>
    )
}

export default App

import React from 'react'
import basicPageStyle from '../styles/basicPageStyle'
import FavoriteMoviesList from '../components/FavoriteMoviesList'

export default function FavoriteMoviesPage() {
    const style = basicPageStyle()

    return (
        <div className={style.wrapper}>
            <FavoriteMoviesList/>
        </div>
    )
}
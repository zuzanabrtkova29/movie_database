import React from 'react'
import basicPageStyle from '../styles/basicPageStyle'
import MovieDetailInfoList from '../components/MovieDetailInfoList'
import FavoritesButton from '../components/FavoritesButton'

export default function MovieDetailPage() {
    const styles = basicPageStyle()

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWrapper}>
                <FavoritesButton/>
            </div>
            <MovieDetailInfoList/>
        </div>
    )
}
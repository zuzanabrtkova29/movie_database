import React from 'react'
import basicPageStyle from '../styles/basicPageStyle'
import MovieDetailInfoList from '../components/MovieDetailInfoList'

export default function MovieDetailPage() {
    const style = basicPageStyle()

    return (
        <div className={style.wrapper}>
            <MovieDetailInfoList/>
        </div>
    )
}
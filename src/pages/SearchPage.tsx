import React from 'react'
import basicPageStyle from '../styles/basicPageStyle'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton'
import SearchResults from '../components/SearchResults'

export default function SearchPage() {
    const style = basicPageStyle()

    return (
        <div className={style.wrapper}>
            <SearchInput/>
            <SearchButton/>
            <SearchResults/>
        </div>
    )
}
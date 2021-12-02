import React from 'react'
import basicPageStyle from '../styles/basicPageStyle'
import SearchInput from '../components/SearchInput'
import SearchButton from '../components/SearchButton'
import SearchResults from '../components/SearchResults'
import FavoritesButton from '../components/FavoritesButton'

export default function SearchPage() {
    const styles = basicPageStyle()

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonWrapper}>
                <FavoritesButton/>
            </div>
            <div className={styles.inputWrapper}>
                <SearchInput/>
                <SearchButton/>
            </div>
            <SearchResults/>
        </div>
    )
}
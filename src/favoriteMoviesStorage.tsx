type idType = { id: string }

export const isFavoriteMovie = (imdbID: string) => {
    const favorites = window.localStorage.getItem("favoriteMovies")
    if (favorites !== null) {
        const favoritesList = JSON.parse(favorites)
        if (favoritesList.some(({id}: idType) => id === imdbID)) {
            return true
        }
    }
    return false
}

export const addToFavorites = (imdbID: string, title: string, year: string) => {
    const favorites = window.localStorage.getItem("favoriteMovies")
    if (favorites === null) {
        window.localStorage.setItem("favoriteMovies", JSON.stringify([{id: imdbID, title: title, year: year}]))
    } else {
        const favoritesList = JSON.parse(favorites)
        if (!favoritesList.some(({id}: idType) => id === imdbID)) {
            favoritesList.push({id: imdbID, title: title, year: year})
            window.localStorage.setItem("favoriteMovies", JSON.stringify(favoritesList))
        }
    }
}

export const removeFromFavorites = (imdbID: string) => {
    const favorites = window.localStorage.getItem("favoriteMovies")
    if (favorites !== null) {
        const favoritesList = JSON.parse(favorites)
        window.localStorage.setItem("favoriteMovies", JSON.stringify(favoritesList.filter(
            ({id}: idType) => id !== imdbID)))
    }
}
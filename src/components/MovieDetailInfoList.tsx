import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Tooltip,
} from '@material-ui/core'
import FavStarIcon from '@mui/icons-material/Star'
import NoFavStarIcon from '@mui/icons-material/StarBorder'
import React, {useEffect, useState} from 'react'
import {isFavoriteMovie, addToFavorites, removeFromFavorites} from '../favoriteMoviesStorage'
import {getMovieInfo, getSelectedMovie, store} from '../redux/store'
import {useSelector} from 'react-redux'

const hiddenKeys = ["Title", "imdbID", "Ratings", "Poster", "Response"]

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: '50px',
        maxWidth: '1200px',
    },
    movieTitle: {
        position: 'relative',
        width: 'auto',
        fontFamily: theme.typography.fontFamily,
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.15em',
        color: '#0a4352',
    },
    movieInfoItem: {
        '& .MuiTypography-body1': {
            fontFamily: theme.typography.fontFamily,
            fontSize: '16px',
            color: '#5a696d',
        },
        '& .MuiTypography-body2': {
            fontFamily: theme.typography.fontFamily,
            fontSize: '20px',
            color: '#222a2c',
        },
    },
}))

function FavMovieStar({imdbID, setNoFavorite}: { imdbID: string, setNoFavorite: () => void }) {
    return (
        <Tooltip title={"Remove from favorites"}>
            <ListItemIcon
                onClick={() => {
                    removeFromFavorites(imdbID)
                    setNoFavorite()
                }}
            >
                <FavStarIcon sx={{position: 'relative', marginLeft: '20px'}}/>
            </ListItemIcon>
        </Tooltip>
    )
}

function NoFavMovieStar({imdbID, title, year, setFavorite}: {
    title: string,
    year: string,
    imdbID: string,
    setFavorite: () => void,
}) {
    return (
        <Tooltip title={"Add to favorites"}>
            <ListItemIcon
                onClick={() => {
                    addToFavorites(imdbID, title, year)
                    setFavorite()
                }}
            >
                <NoFavStarIcon sx={{position: 'relative', marginLeft: '20px'}}/>
            </ListItemIcon>
        </Tooltip>
    )
}

export default function MovieDetailInfoList() {
    const styles = useStyles()
    const movieInfo = useSelector(getMovieInfo)
    const imdbID = useSelector(getSelectedMovie)
    const [isFavorite, setIsFavorite] = useState(imdbID === null ? false : isFavoriteMovie(imdbID))

    useEffect(() => {
        store.dispatch({type: 'MOVIE_INFO_REQUESTED', payload: {imdbID}})
    }, [])

    return (
        movieInfo && <div className={styles.wrapper}>
            <div className={styles.movieTitle}>
                {movieInfo["Title"]}
                {
                    isFavorite
                        ? <FavMovieStar
                            imdbID={movieInfo["imdbID"]}
                            setNoFavorite={() => setIsFavorite(false)}
                        />
                        : <NoFavMovieStar
                            imdbID={movieInfo["imdbID"]}
                            title={movieInfo["Title"]}
                            year={movieInfo["Year"]}
                            setFavorite={() => setIsFavorite(true)}
                        />
                }
            </div>
            <List>
                {
                    Object.keys(movieInfo).map((key, idx) => (
                        !hiddenKeys.includes(key) &&
                        <ListItem
                            key={idx}
                            className={styles.movieInfoItem}
                        >
                            <ListItemText
                                primary={key}
                                secondary={movieInfo[key]}
                            />
                        </ListItem>
                    ))
                }
            </List>
            <img src={movieInfo["Poster"]} alt={"poster"}/>
        </div>
    )
}
import React, {useState} from 'react'
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    Avatar,
    Tooltip
} from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import {removeFromFavorites} from '../favoriteMoviesStorage'
import listItemStyle from '../styles/listItemStyle'
import {setSelectedMovie} from '../redux/store'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import cinema from '../assets/cinema.png'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: '70px 50px',
        maxWidth: '900px',
    },
    listTitle: {
        position: 'relative',
        width: 'auto',
        fontFamily: theme.typography.fontFamily,
        fontSize: '30px',
        fontWeight: 'bold',
        letterSpacing: '0.15em',
        color: '#0a4352',
    },
    deleteIcon: {
        marginTop: '-15px',
    }
}))

export default function FavoriteMoviesList() {
    const styles = useStyles()
    const listStyles = listItemStyle()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [, refresh] = useState({})

    const favorites = window.localStorage.getItem("favoriteMovies")
    let favoritesList = []
    if (favorites !== null) {
        favoritesList = JSON.parse(favorites)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.listTitle}>My favorites list</div>
            <List>
                {
                    favoritesList && favoritesList
                        .map(({id, title, year}: { id: string, title: string, year: string }) => (
                            <ListItem key={id} className={listStyles.listItem}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img src={cinema} alt={"cinema"}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={title}
                                    secondary={year}
                                    onClick={() => {
                                        dispatch(setSelectedMovie(id))
                                        navigate("/detail")
                                    }}
                                />
                                <Tooltip title="Remove from favorites">
                                    <ListItemIcon
                                        className={styles.deleteIcon}
                                        onClick={() => {
                                            removeFromFavorites(id)
                                            refresh({})
                                        }}
                                    >
                                        <DeleteIcon/>
                                    </ListItemIcon>
                                </Tooltip>
                            </ListItem>
                        ))
                }
            </List>
        </div>
    )
}
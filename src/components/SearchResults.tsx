import React from 'react'
import {makeStyles, List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import {getSearchResults, setSelectedMovie} from '../redux/store'
import {useNavigate} from 'react-router-dom'
import cinema from '../assets/cinema.png'
import listItemStyle from '../styles/listItemStyle'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: '50px',
        maxWidth: '900px',
    },
}))

export default function SearchResults() {
    const styles = useStyles()
    const listStyles = listItemStyle()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchResults = useSelector(getSearchResults)
    type searchResultsTypes = {
        Title: string,
        Year: string,
        imdbID: string,
    }

    const onMovieClicked = (imdbID: string) => {
        dispatch(setSelectedMovie(imdbID))
        navigate("/detail")
    }

    return (
        <div className={styles.wrapper}>
            <List>
                {searchResults && searchResults.map(({Title, Year, imdbID}: searchResultsTypes) => (
                        <ListItem
                            className={listStyles.listItem}
                            key={imdbID}
                            onClick={() => onMovieClicked(imdbID)}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={cinema} alt={"cinema"}/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={Title} secondary={Year}/>
                        </ListItem>
                    )
                )
                }
            </List>

        </div>
    )
}
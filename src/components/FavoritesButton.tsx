import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import StarIcon from '@mui/icons-material/Star'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    button: {
        position: 'absolute',
        width: '125px',
        height: '40px',
        border: 'none',
        margin: '5px',
        backgroundColor: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        color: '#0a4352',
    },
}))

export default function FavoritesButton() {
    const styles = useStyles()
    const navigate = useNavigate()

    return (
        <Button className={styles.button} endIcon={<StarIcon/>} onClick={() => navigate('/favorites')}>
            Favorites
        </Button>
    )
}
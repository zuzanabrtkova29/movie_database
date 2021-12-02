import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import magnifier from '../assets/magnifier.png'
import {useSelector} from 'react-redux'
import {getSearchPhrase, store} from '../redux/store'

const useStyles = makeStyles((theme) => ({
    button: {
        height: '103px',
        width: '103px',
        border: '2px solid #0a4352',
        borderLeft: 'none',
        borderRadius: 0,
        backgroundImage: `url(${magnifier})`,
    }
}))

export default function SearchButton() {
    const styles = useStyles()
    const searchPhrase = useSelector(getSearchPhrase)

    const onSearchClick = () => {
        if (searchPhrase === null)
            return
        store.dispatch({type: 'MOVIES_FETCH_REQUESTED', payload: {searchPhrase}})
    }

    return (
        <Button className={styles.button} onClick={onSearchClick}/>
    )
}
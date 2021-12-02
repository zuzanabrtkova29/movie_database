import React from 'react'
import {TextField, makeStyles} from '@material-ui/core'
import {getSearchPhrase, setSearchPhrase} from '../redux/store'
import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    input: {
        flex: 1,
        height: '100px',
        width: '500px',
        margin: '100px 0 0 150px',
        backgroundColor: 'white',
        border: '2px solid #0a4352',
        borderRight: 'none',
        '& .MuiInputBase-root': {
            height: '100%',
        },
        '& .MuiInputBase-input': {
            height: '24px',
            padding: '20px',
            fontSize: '36px',
            fontFamily: theme.typography.fontFamily,
            color: 'black',
            lineHeight: '400px',
        },
    }
}))


export default function SearchInput() {
    const styles = useStyles()
    const dispatch = useDispatch()
    const searchPhrase = useSelector(getSearchPhrase)

    const onSearchChange = (newSearchPhrase: string) => {
        dispatch(setSearchPhrase(newSearchPhrase))
    }

    return (
        <TextField
            className={styles.input}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={"Search movie..."}
            defaultValue={searchPhrase}
        />
    )
}
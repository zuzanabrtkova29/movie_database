import {makeStyles} from '@material-ui/core'

const basicPageStyle = makeStyles((theme) => ({
    wrapper: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme.palette.background.default,
        overflow: 'auto',
    },
    buttonWrapper: {
        width: '100%',
        height: '40px',
        position: 'relative',
        margin: 0,
    },
    inputWrapper: {
        width: '100%',
        height: '110px',
        position: 'relative',
        margin: '100px 0',
    },
}))

export default basicPageStyle
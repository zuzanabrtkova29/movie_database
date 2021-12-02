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
}))

export default basicPageStyle
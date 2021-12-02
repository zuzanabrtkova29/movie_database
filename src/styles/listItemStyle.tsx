import {makeStyles} from '@material-ui/core'

const listItemStyle = makeStyles((theme) => ({
    listItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontFamily: theme.typography.fontFamily,
            fontSize: '24px',
        },
        '& .MuiTypography-body2': {
            fontFamily: theme.typography.fontFamily,
            fontSize: '14px',
        },
    },
}))

export default listItemStyle
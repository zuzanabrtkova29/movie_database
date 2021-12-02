import {createTheme} from '@material-ui/core/styles'

export const defaultTheme = createTheme({
    palette: {
        text: {
            primary: '#FFFFFF',
        },
        background: {
            default: '#CCD5D7',
        },
    },
    typography: {
        fontFamily: [
            '"IBM Plex Sans"',
            '"Segoe UI"',
            '"Roboto"',
            '"Helvetica Neue"',
            'sans-serif',
        ].join(','),
    }
})

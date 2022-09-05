import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0e4627',
        },
        secondary: {
            main: '#f9bc60',
            light: '#fff',
            dark: '#272727'
        },
    },
    typography: {
        h1: {
            fontSize: '3rem',
            '@media (min-width:600px)': {
                fontSize: '6rem',
            },
        },

        h2: {
            fontSize: '3rem',
            '@media (min-width:600px)': {
                fontSize: '3.75rem',
            },
        },
        button: {
            fontSize: '16px',
            textTransform: "none"
        },
    },

});
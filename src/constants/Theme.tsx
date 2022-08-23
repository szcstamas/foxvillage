import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0e4627',
        },
        secondary: {
            main: '#f9bc60',
            light: '#fff',
        },
    },
    typography: {
        button: {
            fontSize: '16px',
            textTransform: "none"
        },
    },
});
import { createTheme } from "@mui/material";

const getTheme = (mode = "light") => createTheme({
    palette: {
        mode: mode,
        primary: {
            main: '#6956E5',
        },
        secondary: {
            main: '#F9F9F9',
            light: '#F9F9F9'
        },
        warning: {
            main: '#FABE7A',
            contrastText: '#fff',
        },
        white: {
            main: '#fff',
            contrastText: '#000'
        },
        black: {
            main: '#7b7b7b',
            contrastText: '#fff',
            light: '#c4c4c4',
            dark: '#000'
        },
        orange: {
            main: "#F6866A",
            contrastText: '#fff',
        },
        skyBlue: {
            main: "#59E6F6",
            contrastText: '#fff',
        }

    },

});

export default getTheme;
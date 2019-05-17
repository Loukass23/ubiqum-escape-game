import { createMuiTheme } from '@material-ui/core/styles';



const defaultTheme = createMuiTheme({})
const { breakpoints, typography: { pxToRem } } = defaultTheme
const theme = createMuiTheme({
    ...defaultTheme,
    typography: {
        useNextVariants: true,

    },
    overrides: {

        MuiTypography: {

            h1: {
                fontSize: "5rem",
                [breakpoints.down("xs")]: {
                    fontSize: "3rem"
                }
            },

        },
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#6AA6C9',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            //light: '#0066ff',
            main: '#ff0000',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // error: will use the default color
    },

});


export default theme


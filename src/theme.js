import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';


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
            main: '#ad1457',
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

// const theme = {
//     ...defaultTheme,
//     overrides: {
//         MuiTypography: {
//             h1: {
//                 fontSize: "5rem",
//                 [breakpoints.down("xs")]: {
//                     fontSize: "3rem"
//                 }
//             }
//         },
//         palette: {
//             primary: pink,
//             secondary: indigo 
//         },
//     }
// }

export default theme


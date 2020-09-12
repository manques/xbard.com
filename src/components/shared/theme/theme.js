import { createMuiTheme } from '@material-ui/core/styles';

const xbardGreen = "#00b0ff";
const xbardOrange = "#357a38";

export default createMuiTheme({
    palette: {
        common: {
            green: `${xbardGreen}`,
            orange: ` ${xbardOrange}`
        },
        primary: {
            main: `${xbardGreen}`
        },
        secondary: {
            main: `${xbardOrange}`
        }
    },
    typography: {
        h1: {

        },
        h2: {
            fontSize: "1.5rem",
            fontFamliy: "Raleway",
            textTransform: "none",
            fontWeight: 500
        },
        h3: {
            fontSize: "1.3rem",
            fontWeight: 700,
            fontFamily: "Raleway",
        },
        card: {
            fontSize: "2rem",
            fontWeight: 700,
            fontFamily: "Pacifico"
        },
        subtitle1: {
            fontSize: "1.2rem",
            fontWeight: 700,
            fontFamily: "Raleway",
            color: "gray"
        },
        subtitle2: {
            fontSize: "0.9rem",
            fontWeight: 600,
            fontFamily: "Raleway",
            color: "gray"
        },
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        price: {
            fontFamily: "pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
        primary: {
            main: `${xbardGreen}`
        },
        common: {
            main: `${xbardGreen}`
        },
        button: {
            color: `${xbardGreen}`,
            fontSize: "1rem",
            fontFamliy: "pacifico",
            borderRadius: "5rem",
            borderColor: `${xbardGreen}`
        }
    }
});
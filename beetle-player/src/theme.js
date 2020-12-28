import { createMuiTheme } from "@material-ui/core";

const BeetlePlaylistTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#53C48C",
      light: "#87F8BC",
      dark: "#11935E",
      contrastText: "#FEFFFF"
    },
    secondary: {
      main: "#CBF2DF",
      light: "#FEFFFF",
      dark: "#9ABFAD",
      contrastText: "#4B645A"
    },
    background: {
      default: "#FEFFFF"
    }
  }
});
export { BeetlePlaylistTheme };

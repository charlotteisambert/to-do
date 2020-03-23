import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#DBE9F5",
      main: blueGrey[700],
    },
    text: {
      primary: blueGrey[700],
      secondary: "#ffffff",
    }
  },
});
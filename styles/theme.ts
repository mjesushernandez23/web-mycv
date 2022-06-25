import { createTheme } from "@mui/material/styles";
import { lightBlue, deepPurple, blueGrey, red, indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;

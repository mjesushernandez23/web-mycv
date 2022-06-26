import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    h3: {
      color: indigo[500],
      fontWeight: 500,
    },
    h6: {
      color: indigo[500],
    },
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

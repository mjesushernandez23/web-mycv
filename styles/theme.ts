import { createTheme } from "@mui/material/styles";
import { indigo, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    h1: {
      color: indigo[500],
    },
    h4: {
      color: indigo[500],
      fontWeight: 500,
    },
    h5: {
      color: blueGrey[700],
    },
    h6: {
      color: indigo[500],
    },
    subtitle1: {
      color: blueGrey[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { variant: "text", LinkComponent: "a" },
          style: { textTransform: "capitalize", fontSize: "1rem", color: blueGrey[700] },
        },
      ],
    },
  },
});

export const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: indigo,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      variants: [
        {
          props: { variant: "text", LinkComponent: "a" },
          style: { textTransform: "capitalize", fontSize: "1rem", color: blueGrey[200] },
        },
      ],
    },
  },
});

export default theme;

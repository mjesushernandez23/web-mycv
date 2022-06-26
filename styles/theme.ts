import { createTheme } from "@mui/material/styles";
import { indigo, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
  },
  typography: {
    h4: {
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
      variants: [
        {
          props: { variant: "text", LinkComponent: "a" },
          style: { textTransform: "capitalize", fontSize: "1rem", color: blueGrey[700] },
        },
      ],
    },
  },
});

export default theme;

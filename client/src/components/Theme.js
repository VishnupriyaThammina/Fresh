import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Create custom theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000", // Replace with your desired color
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;

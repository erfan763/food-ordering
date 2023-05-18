import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["iran-sans-normal"].join(","),
  },
  palette: {
    primary: {
      main: "#FE5301",
    },
    secondary: {
      main: "#2E3D50",
    },
    success: {
      main: "#459699",
    },
  },
});

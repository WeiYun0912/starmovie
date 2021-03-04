import React from "react";
import Box from "@material-ui/core/Box";
import Pagination from "@material-ui/lab/Pagination";
import Movie from "./Movie";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  overrides: {
    MuiPaginationItem: {
      root: {
        color: "#fff",
      },
    },
  },
});
const MovieList = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        <Movie />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin="10px"
      >
        <Pagination count={10} color="primary" />
      </Box>
    </ThemeProvider>
  );
};

export default MovieList;

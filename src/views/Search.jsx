import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import CardMovie from "../components/CardMovie";
import useMovies from "../hooks/useMovies";

export default function Search() {
  const { movies, getSearchedMovie } = useMovies();

  // SE PUEDE NO TENER ESTA FUNCION?

  // const handleInput = (e) => {
  //   getSearchedMovie(e.target.value);
  // };

  return (
    <Box
      component="section"
      sx={{
        border: "1px dashed grey",
        minHeight: "78vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        /*  */
      }}
    >
      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="search-your-movie" focused color="success">
          Search your Movie
        </InputLabel>
        <OutlinedInput
          color="success"
          id="search-your-movie"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          label="Search your Movie"
          onChange={(e) => getSearchedMovie(e.target.value)}
        />
      </FormControl>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        flexWrap="wrap"
        gap={5}
        sx={{ width: "90%", border: "1px dashed grey" }}
      >
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </Stack>
    </Box>
  );
}

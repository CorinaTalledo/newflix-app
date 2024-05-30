import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import CardMovie from "../components/CardMovie";
import useMovies from "../hooks/useMovies";

export default function Search() {
  const { movies, getSearchedMovie } = useMovies();

  return (
    <Box
      component="section"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        width: "100vw",
      }}
    >
      <FormControl sx={{ m: 5, width: "40%", color: "white" }}>
        <InputLabel htmlFor="search-your-movie" focused color="success">
          Search your Movie
        </InputLabel>

        <OutlinedInput
          color="success"
          id="search-your-movie"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon color="success" />
            </InputAdornment>
          }
          label="Search your Movie"
          onChange={(e) => getSearchedMovie(e.target.value)}
        />
      </FormControl>

      {movies.length === 0 ? (
        <Box
          sx={{
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h2" component="h2" color="white">
            Looking for a movie?
          </Typography>
          <Typography variant="h4" component="h3" color="white">
            Find it here
          </Typography>
        </Box>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          flexWrap="wrap"
          gap={5}
          sx={{ width: "95%", margin: "3%" }}
        >
          {movies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </Stack>
      )}
    </Box>
  );
}

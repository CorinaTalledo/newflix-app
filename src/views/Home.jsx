import Carrousel from "../components/Carrousel";
import CardMovie from "../components/CardMovie";
import { Typography, Box, Stack, Grid, Button, Slide } from "@mui/material";
import useMovies from "../hooks/useMovies";
import { useEffect /* useState */ } from "react";

/* import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; */

export default function Home() {
  const { popularMovies, getPopularMovies, topRatedMovies, getTopRatedMovies } =
    useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <Box component="section" sx={{ border: "1px dashed grey" }}>
      <Carrousel />

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="baseline"
        spacing={3}
        mt={5}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          Peliculas populares
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {popularMovies.map((popularMovie) => (
            <CardMovie key={popularMovie.id} movie={popularMovie} />
          ))}
        </Stack>
      </Stack>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="baseline"
        spacing={3}
        mt={5}
      >
        <Typography variant="h4" component="h2">
          Peliculas mejor puntuadas
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {topRatedMovies.map((topMovie) => (
            <CardMovie key={topMovie.id} movie={topMovie} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

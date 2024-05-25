import Carrousel from "../components/Carrousel";
import CardMovie from "../components/CardMovie";
import { Typography, Box, Stack, Grid, Button, Slide } from "@mui/material";
import useMovies from "../hooks/useMovies";
import { useEffect /* useState */ } from "react";

/* import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; */

export default function Home() {
  const { movies, getMoviesByCategory, topRatedMovies, getTopRatedMovies } =
    useMovies();

  useEffect(() => {
    getMoviesByCategory("popular");
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <Box component="section" sx={{ border: "1px dashed grey" }}>
      <Carrousel />

      {/* Todo un componente que le llegue el titulo y la categoria */}
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
          {movies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </Stack>
      </Stack>
      {/* TERMINA EL COMPONENTE */}

      {/* REPITE EL COMPONENTE DE ARRIBA */}
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

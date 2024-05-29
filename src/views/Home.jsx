import { useEffect } from "react";
import { Box } from "@mui/material";
import useMovies from "../hooks/useMovies";
import MainCarousel from "../components/MainCarousel";
import MoviesCarousel from "../components/MoviesCarousel";

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
    <Box component="section" sx={{ maxWidth: "100vw", minHeight: "100vh" }}>
      <MainCarousel />

      <Box>
        <MoviesCarousel title="Popular Movies" movies={movies} />
        <MoviesCarousel title="Top Rated Movies" movies={topRatedMovies} />
      </Box>
    </Box>
  );
}

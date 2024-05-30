import { Typography, Pagination, Box, Stack } from "@mui/material";
import CardMovie from "../components/CardMovie";
import useMovies from "../hooks/useMovies";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ContainMovies() {
  const { category } = useParams();

  const {
    movies,
    getMoviesByCategory,
    totalPages,
    page,
    handlePagination,
    resetPage,
  } = useMovies();

  useEffect(() => {
    getMoviesByCategory(category);
  }, [category, page]);

  useEffect(() => {
    resetPage();
  }, [category]);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" gutterBottom color="white" sx={{ mt: "3%" }}>
        {category === "popular" ? "Popular Movies" : "Last Releases"}
      </Typography>

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

      <Pagination
        count={totalPages} // Le dice a MUI cuantas paginas debe habilitar
        page={page}
        onChange={handlePagination}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Box>
  );
}

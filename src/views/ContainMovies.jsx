import CardMovie from "../components/CardMovie";

import { Typography, Pagination, Box, Stack } from "@mui/material";

import { useEffect } from "react";
import useMovies from "../hooks/useMovies";
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
  console.log(category);

  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px dashed grey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        {category === "popular" ? "Popular Movies" : "Last Releases"}
      </Typography>

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

      <Pagination
        count={totalPages} // Le dice a MUI cuantas paginas debe habilitar
        page={page}
        onChange={handlePagination}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
}

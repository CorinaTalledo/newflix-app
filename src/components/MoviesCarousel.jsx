import CardMovie from "../components/CardMovie";
import { Typography, Box, Stack, ImageList } from "@mui/material";

export default function MoviesCarousel({ title, movies }) {
  return (
    <Box
      component="section"
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h4" component="h4" gutterBottom color="white">
        {title}
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        flexWrap="wrap"
        gap={4}
        my={2}
      >
        {movies.slice(0, 8).map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </Stack>
    </Box>
  );
}

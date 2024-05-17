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

  // const [index, setIndex] = useState(0);

  // const handleScrollRight = () => {
  //   setIndex(Math.min(index + 1, popularMovies.length - 1));
  // };

  // const handleScrollLeft = () => {
  //   setIndex(Math.max(index - 1, 0));
  // };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //     slidesToSlide: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     slidesToSlide: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };

  /*   useEffect(() => {
    getPeopleCarrusel();
  }, []);

  console.log(initialCarrusel); */

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  // console.log(popularMovies);

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

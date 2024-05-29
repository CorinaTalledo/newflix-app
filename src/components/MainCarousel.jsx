import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import useMovies from "../hooks/useMovies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainCarrousel() {
  const { getMoviesByCategory, movies } = useMovies();

  const navigate = useNavigate();

  useEffect(() => {
    getMoviesByCategory("popular");
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };

  return (
    <Box
      component="section"
      sx={{
        width: "auto",
        height: "500px",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2500}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass="carousel-slider"
        slidesToSlide={1}
        swipeable
      >
        {movies.slice(0, 5).map((item) => (
          <Card
            key={item.id}
            sx={{
              /* width: "100vw", */
              height: "500px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              sx={{
                display: "block",
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <Box>
              <CardContent
                sx={{
                  zIndex: 1,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  p: 4,
                  backgroundColor: "rgba(128, 128, 128, 0.85)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "50%",
                  height: "50%",
                }}
              >
                <Typography variant="h5" component="h5" textAlign="center">
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  paragraph
                  textAlign="center"
                >
                  {item.overview}
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => navigate(`/movie/${item.id}`)}
                  width="20%"
                >
                  See more
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
}

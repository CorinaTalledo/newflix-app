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

export default function Carrousel() {
  const { initialCarrusel, getPopularCarrusel } = useMovies();

  const navigate = useNavigate();

  useEffect(() => {
    getPopularCarrusel();
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
        width: "100vw",
        height: "500px",
        overflow: "hidden",
        /*         position: "relative",
         */
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
        {initialCarrusel.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              overflow: "hidden",
              /*               objectFit: "cover",
               */
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                position: "relative",
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
                  p: 8,
                  backgroundColor: "rgba(128, 128, 128, 0.85)",
                }}
              >
                <Typography variant="h5" component="div" textAlign="center">
                  {item.title}
                </Typography>
                <Typography variant="body1" component="div" textAlign="center">
                  {item.overview}
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => navigate(`/movie/${item.id}`)}
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

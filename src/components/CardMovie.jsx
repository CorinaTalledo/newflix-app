import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton,
  Box,
  CardActions,
} from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function CardMovie({ movie }) {
  const navigate = useNavigate();

  const { addFavourite, isFavourite, removeFavourite } =
    useContext(FavouritesContext);

  return (
    <Card sx={{ width: 320, height: 220 }}>
      <CardActionArea
        sx={{ height: "80%" }}
        onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          title={movie.title}
        />
      </CardActionArea>

      <Box
        display="flex"
        alignItems="center"
        height="20%"
        justifyContent="space-between"
        sx={{ border: "1px solid red" }}
      >
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="span">
            {movie.title}
          </Typography>
        </CardContent>

        <CardActions>
          {isFavourite(movie.id) ? (
            <IconButton
              aria-label="add to favorites"
              onClick={() => removeFavourite(movie.id)}
            >
              <PlaylistRemoveIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="add to favorites"
              onClick={() => addFavourite(movie)}
            >
              <PlaylistAddIcon />
            </IconButton>
          )}
        </CardActions>
      </Box>
    </Card>
  );
}

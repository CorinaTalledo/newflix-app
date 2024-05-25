import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ movie }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 320, height: 220 }}>
      <CardActionArea
        sx={{ height: "100%" }}
        onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="80%"
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography variant="subtitle1" component="div" textAlign="center">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

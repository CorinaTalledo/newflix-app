import {
  Card,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

/* import { useParams } from "react-router-dom";
import { useState } from "react"; */

export default function DetailMovie() {
  /*   const { idMovie } = useParams();

  const [movieDetail, setMovieDetail] = useState();

  console.log(idMovie); */

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>

      <Box>
        <Typography variant="h3" gutterBottom>
          TITULO
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          General
        </Typography>

        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Géneros
        </Typography>

        <List /* dense={dense} */>
          {/* {generate( */}
          <ListItem>
            <ListItemIcon>X</ListItemIcon>
            <ListItemText
              primary="Single-line item"
              /* secondary={secondary ? "Secondary text" : null} */
            />
          </ListItem>
          {/* )} */}
        </List>
      </Box>
    </div>
  );
}

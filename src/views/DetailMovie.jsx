import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function DetailMovie() {
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

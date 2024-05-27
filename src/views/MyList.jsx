import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import CardMovie from "../components/CardMovie";
import { Typography, Box, Stack } from "@mui/material";

export default function MyList() {
  const { allFavourites, totalFavourites } = useContext(FavouritesContext);

  console.log(allFavourites);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        /* flexWrap: "wrap", */
        textAlign: "center",
        minHeight: "90vh",
      }}
    >
      <Typography color="white" variant="h2">
        MY LIST
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
        {totalFavourites() === 0 ? (
          <Typography color="white" variant="h6">
            Add movies to your list to watch later
          </Typography>
        ) : (
          allFavourites.map((favourite) => (
            <CardMovie key={favourite.id} movie={favourite} />
          ))
        )}
      </Stack>
    </Box>
  );
}

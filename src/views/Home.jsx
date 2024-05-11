import Carrousel from "../components/Carrousel";
import CardMovie from "../components/CardMovie";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Carrousel />

      <Typography variant="h5" component="h2">
        Peliculas populares
      </Typography>
      <CardMovie />

      <Typography variant="h5" component="h2">
        Peliculas mejor puntuadas
      </Typography>

      <CardMovie />
    </Box>
  );
}

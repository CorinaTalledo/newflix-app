import CardMovie from "../components/CardMovie";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Box from "@mui/material/Box";

export default function ContainMovies() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Typography variant="h2" gutterBottom>
        Ultimos Lanzamientos oooo Populares
      </Typography>

      {/* <CardMovie /> */}

      <Pagination
      /* page="1"
        count={10}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )} */
      />
    </Box>
  );
}

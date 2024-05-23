import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box my="2%" sx={{ border: "3px solid white", color: "white" }}>
      <Typography variant="subtitle2" display="block">
        Done with ♥ by {""}
        <Link
          href="https://github.com/CorinaTalledo"
          underline="hover"
          target="_blank"
        >
          Coco Talledo
        </Link>
      </Typography>
    </Box>
  );
}

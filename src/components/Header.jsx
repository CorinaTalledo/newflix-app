import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavouritesContext } from "../context/FavouritesContext";

// const pages = [
//   { name: "Home", path: "/" },
//   { name: "Last Realeses", path: "/movies" },
//   { name: "Popular", path: "/movies" },
//   { name: "Search", path: "/search" },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const { totalFavourites } = useContext(FavouritesContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            NOWFLIX
          </Typography>

          {/* MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* ---------------------- */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          {/* FIN DE MOBILE */}

          {/* DESKTOP */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            NOWFLIX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                navigate("/");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              HOME
            </Button>

            <Button
              onClick={() => {
                navigate("/now_playing");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              LAST RELEASES
            </Button>

            <Button
              onClick={() => {
                navigate("/popular");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              POPULAR
            </Button>

            <Button
              onClick={() => {
                navigate("/search");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              SEARCH
            </Button>
          </Box>

          {/* TODO LO RELACIONADO AL AVATAR */}
          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={totalFavourites()} color="primary" max={50}>
              <Button
                fullWidth
                component="label"
                role={undefined}
                variant="outlined"
                color="inherit"
                tabIndex={-1}
                startIcon={<PlaylistPlayIcon />}
                onClick={() => {
                  navigate("/my-list");
                  handleCloseNavMenu();
                }}
              >
                My List
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
            </Badge>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Lo que se despliega del avatar */}
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}

              {/* -------------------------- */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

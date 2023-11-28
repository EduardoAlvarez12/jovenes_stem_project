import { Link } from "react-router-dom";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ugbLogo from "../images/ugb_logo.jpg";

const pages = [
  { name: "Inicio", url: "home" },
  { name: "Historia", url: "historia" },
  { name: "Memorias", url: "memorias" },
];

export function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{ minHeight: "110px", backgroundColor: "#ffffff" }}
    //elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo UGB Escritorio*/}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Link to="/home">
              <Box
                component="img"
                src={ugbLogo}
                alt="Logo UGB"
                sx={{ maxHeight: "110px", ml: 20 }} // Adjust the maxHeight value as needed
              />
            </Link>
          </Box>

          {/* Menu de Hamburguesa para Moviles comienza */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
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
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: "12px", color: "gray" }}
                    component={Link}
                    to={page.url}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo UGB Móvil*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Link to="/home">
              <Box
                component="img"
                src={ugbLogo}
                alt="Logo UGB"
                sx={{ width:"75%", maxHeight: "110px", mr: 10}} // Adjust the maxHeight value as needed
              />
            </Link>
          </Box>
          {/* Menu de Hamburguesa para moviles termina */}

          

          {/* Navbar de Escritorio continúa */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 0.75,
                  fontSize: "12px",
                  color: "gray",
                  display: "block",
                  textAlign: "center",
                }}
                component={Link}
                to={`/${page.url}`}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {/* Navbar de Escritorio termina */}

          {/* Contenedor del Botón de Contacto inicia */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              color="indigo"
              sx={{ borderRadius: "8px" }}
            >
              Contáctanos
            </Button>
          </Box>
          {/* Contenedor del Botón de Contacto termina */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

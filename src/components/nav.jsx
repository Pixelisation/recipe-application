import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Avatar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";

export default function Nav() {
  const { data: session, status } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (status === "authenticated") {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              component="a"
              sx={{
                flexGrow: 1,
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              href="/"
            >
              YumYumYields
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  src={session.user.image}
                  sx={{ width: 70, height: 70 }}
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Hello, {session.user.name}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/recipe/create-a-recipe" >Create a Recipe</Link>
                </MenuItem>
                <MenuItem onclick={handleClose}>
                  <Link href="/api/auth/signout">Sign out</Link>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            href="/"
          >
            YumYumYields
          </Typography>
          <div>
          <Typography
            variant="h6"
            component="a"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            href="/api/auth/signin"
          >
            Sign in
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

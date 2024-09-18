import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  let userId = 1;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign: "left"}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Typography>
          <Button color="inherit">Login</Button>
          <Typography variant="h6" component="div">
            <Link to={`/users/${userId}`} style={{ textDecoration: 'none', color: 'white' }}>
              User
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;

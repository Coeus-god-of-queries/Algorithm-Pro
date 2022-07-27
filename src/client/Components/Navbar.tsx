import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    
    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ color: 'red', backgroundColor: 'black', justifyContent: 'flex-end'}}>
              <Typography variant="h6" component="div" sx={{ mr: '40%'}} >
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;
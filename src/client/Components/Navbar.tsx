import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    
    
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ color: 'black', backgroundColor: '#CFEFFF', justifyContent: 'flex-end' }}>
              <Typography variant="h6" component="div" sx={{ mr: '40%', fontFamily: 'Raleway, sans-serif'}} >
                Coeus
              </Typography>
              <Button color="inherit">Sign In</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Navbar;
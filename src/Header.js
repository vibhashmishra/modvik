import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, styled } from '@mui/material';
import { FaSearch } from "react-icons/fa";

const HeaderComponent = styled("Box")(({ theme }) => ({
"& .navitems":{
    display:"flex",
    alignItems:'center',
    gap:"25px",
        "& button":{
        color:"#0064A8",
        textTransform:"capitalize",
        fontSize:"16px",
        fontWeight:"600",

    }
}
  }));

const headerBox ={
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    alignItems:"center"
}


function Header() {
  return (
    <HeaderComponent>
  <AppBar position="static" sx={{backgroundColor:'#fff'}}>
      <Container>
      <Toolbar>
        <Box style={headerBox}>
        <Box>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src='/images/modvak.png' alt="modvak" style={{ height: '55px' }} />
        </IconButton>
        </Box>
     <Box className="navitems">
     <Button color="inherit">Home</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Custom Solutions</Button>
        <Button color="inherit">Marketplace</Button>
        <Button color="inherit">Career</Button>
        <Button color="inherit">Contact us</Button>
        <IconButton style={{padding:"0px", width:"65px", borderRadius:"0px", borderLeft:'2px solid' }} >
        <FaSearch  style={{color:'#1679AB'}} />
        </IconButton>
        <IconButton style={{backgroundColor:"#C7E8FA"}}>
        <img src="/images/Marketplace.png"/>
        </IconButton>
     </Box>
   
        </Box>
     
      

      </Toolbar>
    </Container>
    </AppBar>
    </HeaderComponent>
    
  
  );
}

export default Header;

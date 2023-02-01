import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/pngwing.com.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around" 
      sx={{gap: {sm: "122px", xs: "40px"}, mt: {sm: "32px", xs:"20px"}, justifyContent:"none"}}
      px="20px"
    >
        <Link to="/">
            <img src={Logo} alt="logo" style={{width: '150px', height: '150px', margin: '0 0px'}} />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link to="/" style={{textDecoration: "none", color: "#DAA520", borderBottom: "3px solid #DAA520", marginBottom: "90px"}}>Home</Link>
          <a href="/#exercises" style={{textDecoration: "none", color: "#DAA520", marginBottom: "90px"}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
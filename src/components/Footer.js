import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/pngwing.com.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#DAA520" sx={{borderRadius: "50px"}}>
      <Stack direction="row" gap="40px" alignItems="center" justifyContent="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px"  />
        <Typography variant='h5' pb="40px" mt="20px">
          Made by David Vojvodić
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
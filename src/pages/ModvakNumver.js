import { Box, styled } from '@mui/material';
import React from 'react'

const MainComponent = styled("Box")(({ theme }) => ({
"& .modvakStatic":{
    backgroundImage: `url('/images/modvak_statics.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '360px',
    width: "100%",
    position: "relative",
    // backgroundAttachment: "fixed",
}
}));

const ModvakNumver = () => {
  return (
    <MainComponent>
 <Box className="modvakStatic">

</Box>
    </MainComponent>
  
  )
}

export default ModvakNumver

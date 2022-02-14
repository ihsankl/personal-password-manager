import {Box, IconButton, Stack, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const index = () => {
  const theme = useTheme();
  return (
    <Stack direction='row' flex={1}>
      <Stack
        p='.5em'
        height='100%'
        position='fixed'
        sx={{
          background: `linear-gradient(
            37deg, 
            rgba(0,222,242,1) 0%, 
            rgba(121,244,202,1) 49%, 
            rgba(228,244,200,1) 100%
          )`,
        }}
      >
        <IconButton aria-label='menu'>
          <MenuIcon fill={theme.palette.primary.contrastText} />
        </IconButton>
      </Stack>
      <Box position='absolute' left='3.5em' flex={1} bgcolor='violet'>
          a
      </Box>
    </Stack>
  );
};

export default index;

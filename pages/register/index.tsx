import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {useTheme} from '@mui/system';
import React, {FC} from 'react';
import {GradientBg} from '../../theme/layout';

const index:FC = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <GradientBg elevation={0}>
      <Container sx={{py: 'auto', height: '100%'}}>
        <Stack
          component='form'
          gap='1em'
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault(); console.log('hi');
          }}
        >
          <Typography
            variant='h5'
            textAlign='center'
            fontWeight={500}
            my='2em'
            color={theme.palette.primary.contrastText}
          >
            Register
          </Typography>
          <FormControl sx={{width: '100%'}}>
            <TextField
              autoFocus
              //   type={field.type ?? null}
              //   error={field.error}
              //   key={index}
              //   id={field.id}
              //   multiline={!!field.multiline}
              //   rows={!!field.multiline ? 4 : null}
              //   value={field.value}
              label='Username'
              name='username'
              variant="outlined"
              fullWidth
            //   onChange={field.onChange}
            //   helperText={field.helperText}
            />
          </FormControl>
          <FormControl sx={{width: '100%'}}>
            <TextField
              autoFocus
              //   type={field.type ?? null}
              //   error={field.error}
              //   key={index}
              //   id={field.id}
              //   multiline={!!field.multiline}
              //   rows={!!field.multiline ? 4 : null}
              //   value={field.value}
              label='Password'
              name='password'
              variant="outlined"
              fullWidth
            //   onChange={field.onChange}
            //   helperText={field.helperText}
            />
          </FormControl>
          <FormControl sx={{width: '100%'}}>
            <TextField
              autoFocus
              //   type={field.type ?? null}
              //   error={field.error}
              //   key={index}
              //   id={field.id}
              //   multiline={!!field.multiline}
              //   rows={!!field.multiline ? 4 : null}
              //   value={field.value}
              label='Re-type Password'
              name='retype_password'
              variant="outlined"
              fullWidth
            //   onChange={field.onChange}
            //   helperText={field.helperText}
            />
          </FormControl>
          <FormControl>
            <Button type='submit' variant='contained'>
                Register
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </GradientBg>
  );
};

export default index;

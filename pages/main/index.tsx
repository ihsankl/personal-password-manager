import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Fab,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import {
  Add as AddIcon,
  ChevronRight as ChevronRightIcon,
  // eslint-disable-next-line no-unused-vars
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Search as SearchIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';
import { Animated } from '../../theme/layout';
import { AnimatePresence } from 'framer-motion';
interface Data {
  id: string;
  username: string;
  description: string;
  image: string;
  password: string;
  title: string;
}

const defaultData: Data[] = [
  {
    id: '1',
    username: 'ihsanklkl',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://source.unsplash.com/random',
    password: '*******',
    title: 'Twitter',
  },
  {
    id: '2',
    username: 'ihsanklkl',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://source.unsplash.com/random',
    password: '*******',
    title: 'Twitter',
  },
  {
    id: '3',
    username: 'ihsanklkl',
    description: 'lorem ipsum dolor sit amet',
    image: 'https://source.unsplash.com/random',
    password: '*******',
    title: 'Twitter',
  },
];

const index = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = React.useState(defaultData);
  const [isExpand, setIsExpand] = React.useState(false);
  const theme = useTheme();
  return (
    <>
      <Box
        zIndex={1}
        p='.5em'
        height='100%'
        position='fixed'
        minWidth='40px'
        sx={{
          background: `linear-gradient(
            37deg, 
            rgba(0,222,242,1) 0%, 
            rgba(121,244,202,1) 49%, 
            rgba(228,244,200,1) 100%
          )`,
        }}
      >
        <Stack gap='.5em'>
          <IconButton aria-label='menu'>
            <MenuIcon color='action' />
          </IconButton>
          <IconButton aria-label='search'>
            <SearchIcon color='action' />
          </IconButton>
        </Stack>
      </Box>
      <Stack sx={{ marginLeft: 'calc(40px + 1em)' }}>
        <Stack
          boxSizing='border-box'
          py='1em'
        >
          <Stack
            direction='row'
            gap='.5em'
          >
            <Button variant='text'>
              {`All`}
            </Button>
            <Button variant='text'>
              {`Recents`}
            </Button>
            <Box flex={1} />
            <IconButton
              aria-label='filter'
            >
              <TuneIcon color='action' />
            </IconButton>
          </Stack>
          <Stack
            gap='1em'
            px='.5em'
          >
            {data.map((value, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    maxWidth: '350px',
                    minWidth: '250px',
                    width: '100%',
                    background: alpha(theme.palette.primary.light, 0.1),
                  }}
                >
                  <Animated
                    animate={{
                      // the height is 'Open Site' button
                      // minus the height of the 'CardContent'
                      height: isExpand ? '145px' : '105px',
                    }}
                  >
                    <CardContent>
                      <Stack direction='row' alignItems='center'>
                        <Stack>
                          <Box bgcolor='red' maxWidth={80}>
                            {`lorem`}
                          </Box>
                          <Box bgcolor='violet' maxWidth={80}>
                            {`a`}
                          </Box>
                        </Stack>
                        <Stack flex={1} gap='.5em'>
                          <Typography variant='h6'>
                            {`${value.title}`}
                          </Typography>
                          <Typography variant='h6' fontSize={14}>
                            {`${value.username}`}
                          </Typography>
                          <AnimatePresence>
                            {isExpand &&
                              <Animated
                                initial={{
                                  opacity: 0,
                                  translateY: '-1em',
                                }}
                                animate={{
                                  opacity: 1,
                                  translateY: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  translateY: '-1em',
                                }}
                              >
                                <Button
                                  variant='outlined'
                                  size='small'
                                >
                                  Open Site
                                </Button>
                              </Animated>
                            }
                          </AnimatePresence>
                        </Stack>
                        <IconButton
                          onClick={() => setIsExpand(!isExpand)}
                          aria-label='expand'
                        >
                          <Animated
                            animate={{
                              rotate: isExpand ? '90deg' : '0deg',
                            }}
                          >
                            <ChevronRightIcon color='action' />
                          </Animated>
                        </IconButton>
                      </Stack>
                    </CardContent>
                  </Animated>
                </Card>
              );
            })}
          </Stack>
        </Stack>
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          sx={{
            position: 'fixed',
            bottom: '1.5em',
            right: '1em',
            zIndex: 1,
          }}
        >
          <AddIcon />
        </Fab>
      </Stack>
    </>
  );
};

export default index;

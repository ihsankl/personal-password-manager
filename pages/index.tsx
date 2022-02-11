import {NextPage} from 'next';
import React, {
  forwardRef,
} from 'react';
import {
  motion,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';
// material-ui
import {styled} from '@mui/material/styles';
import {useTheme} from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import LockIcon from '@mui/icons-material/Lock';

const GradientBg = styled(Paper)`
  
  min-height: 100vh;
  height: 80%;
  max-height: 1000px;
  width: 100%;
`;

const AnimatedComponent = forwardRef(
    (props: any, ref:any) => {
      // eslint-disable-next-line react/prop-types
      const Component = props.children;
      return {...Component, ref};
    });

const Animated = motion(AnimatedComponent);

AnimatedComponent.displayName = 'AnimatedComponent';

const Home: NextPage = () => {
  const theme = useTheme();
  const gradientX = useSpring(0);
  const gradientY = useMotionValue(0);
  const gradient = useMotionTemplate`
  linear-gradient(
    ${gradientY}deg, 
    rgba(0,222,242,1) 0%, 
    rgba(121,244,202,1) ${gradientX}%, 
    rgba(228,244,245,1) 100%
  );`;

  return (
    <Animated
      animation={{
        style: {
          background: gradient,
        },
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        type: 'spring',
        velocity: 4,
      }}
    >
      <GradientBg elevation={0} >
        <Stack gap='1em' >
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            gap='.5em'
            my='auto'
            minHeight='200px'
          >
            <Animated
              whileHover={{
                rotate: 360,
              }}
              transition={{
                type: 'spring',
                velocity: 1,
              }}
            >
              <Stack
                sx={{
                  height: '56px',
                  width: '56px',
                  background: theme.palette.primary.main,
                  boxShadow: 3,
                  borderRadius: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LockIcon sx={{fill: 'white', height: '32px', width: '32px'}} />
              </Stack>
            </Animated>
            <Stack>
              <Animated
                initial={{
                  opacity: 0,
                  translateY: -20,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Typography
                  variant='h3'
                  color={theme.palette.primary.contrastText}
                  fontWeight='500'
                >
                  {`Password`}
                </Typography>
              </Animated>
              <Animated
                initial={{
                  opacity: 0,
                  translateY: 20,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >
                <Typography
                  variant='h4'
                  color={theme.palette.primary.contrastText}
                >
                  {`Manager`}
                </Typography>
              </Animated>
            </Stack>
          </Stack>
          <Typography
            variant='h4'
            marginTop='3em'
            color={theme.palette.primary.contrastText}
            textAlign='center'
          >
            {`Transparent and Secured.`}
          </Typography>
          <Typography
            variant='h6'
            marginTop='2em'
            mx={2}
            color={theme.palette.primary.contrastText}
            textAlign='center'
          >
            {`Only you can see your personal data.`}
          </Typography>
          <Typography
            variant='h5'
            marginTop='3em'
            color={theme.palette.primary.contrastText}
            textAlign='center'
          >
            {`Login with`}
          </Typography>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            sx={{
              mx: '1.5em',
              mb: '1em',
            }}
          >
            Google
          </Button>
        </Stack>
      </GradientBg>
    </Animated>
  );
};

export default Home;

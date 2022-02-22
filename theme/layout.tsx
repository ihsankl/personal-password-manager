import React from 'react';
import {styled} from '@mui/material/styles';
import {Paper} from '@mui/material';
import {motion} from 'framer-motion';

export const GradientBg = styled(Paper)`
  min-height: 100vh;
  height: 80%;
  max-height: 1000px;
  width: 100%;
  background: rgb(0,222,242);
  background: linear-gradient(
    37deg, 
    rgba(0,222,242,1) 0%, 
    rgba(121,244,202,1) 49%, 
    rgba(228,244,245,1) 100%
  );
`;

const AnimatedComponent = React.forwardRef(
    (props: any, ref:any) => {
    // eslint-disable-next-line react/prop-types
      const Component = props.children;
      return {...Component, ref};
    });

export const Animated = motion(AnimatedComponent);

AnimatedComponent.displayName = 'AnimatedComponent';

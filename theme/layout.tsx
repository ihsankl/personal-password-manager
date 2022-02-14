import {styled} from '@mui/material/styles';
import {Paper} from '@mui/material';

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

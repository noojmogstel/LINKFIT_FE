import { Card } from '@chakra-ui/react';

import MyPTImage from '@/assets/date.png';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './MyPT.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

export const MyPT = () => {
  const navigate = useNavigate();
  const navigateToUserPtSchedule = () => {
    navigate(RouterPath.userPtSchedule);
  };

  return (
    <Wrapper onClick={navigateToUserPtSchedule}>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={MyPTImage} alt='내 PT' />
          <StyledText>내 PT</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

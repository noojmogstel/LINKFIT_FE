import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import ReceiveOfferImage from '@/assets/invitation.png';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './ReceivedOffers.styles';

export const ReceivedOffers = () => {
  const navigate = useNavigate();

  const handleReceivedOfferClick = () => {
    navigate(RouterPath.receivedProposal);
  };

  return (
    <Wrapper onClick={handleReceivedOfferClick}>
      <Card height='125px'>
        <StyledCardBody>
          <StyledText>받은 제안</StyledText>
          <StyledImage src={ReceiveOfferImage} alt='받은 제안' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import ProposalHistoryImage from '@/assets/send.png';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './MyPT.styles';

export const ProposalHistory = () => {
  const navigate = useNavigate();

  const handleProposalHistoryClick = () => {
    navigate(RouterPath.sentProposal);
  };

  return (
    <Wrapper onClick={handleProposalHistoryClick}>
      <Card height='125px'>
        <StyledCardBody>
          <StyledImage src={ProposalHistoryImage} alt='내 제안 기록' />
          <StyledText>내 제안 기록</StyledText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

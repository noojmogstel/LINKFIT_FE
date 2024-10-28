import { Box, Card, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/routes/path';
import { UserProposalResponse } from '@/types';

import {
  StyledButtonWrapper,
  StyledCardBody,
  StyledChatButton,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  StyledProposalText,
  StyledReviewButton,
  Wrapper,
} from './ProposalTrainerProfile.styles';

export const ProposalTrainerProfile = ({
  proposal,
}: {
  proposal: UserProposalResponse;
}) => {
  const navigate = useNavigate();
  const navigateToTrainerDetail = (trainerId: number) => {
    navigate(
      RouterPath.trainerDetail.replace(':trainerId', trainerId.toString())
    );
  };
  return (
    <Wrapper onClick={() => navigateToTrainerDetail(proposal.trainerId)}>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage
              src={proposal.trainerProfileImageUrl}
              alt='프로필'
            />
            <Box>
              <StyledNameText>{proposal.trainerName} 트레이너</StyledNameText>
              <StyledProposalText>
                {proposal.totalCount}회 {proposal.price}원
              </StyledProposalText>
              <StyledGymText>{proposal.gymName}</StyledGymText>
            </Box>
          </Flex>

          <StyledButtonWrapper>
            <StyledReviewButton>리뷰 보기</StyledReviewButton>
            <StyledChatButton>채팅하기</StyledChatButton>
          </StyledButtonWrapper>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
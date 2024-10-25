import { Box, Card, Flex } from '@chakra-ui/react';

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
  return (
    <Wrapper>
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

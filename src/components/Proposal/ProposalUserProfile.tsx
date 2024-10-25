import { Box, Card, Flex } from '@chakra-ui/react';
import {
  StyledCardBody,
  StyledNameText,
  StyledProposalText,
  StyledProfileImage,
  Wrapper,
  StyledStatusText,
} from './ProposalUserProfile.styles';
import { TrainerProposalResponse } from '@/types';

export const ProposalUserProfile = ({
  proposal,
}: {
  proposal: TrainerProposalResponse;
}) => {
  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage
              src={proposal.userProfileImageUrl}
              alt='프로필'
            />
            <Box>
              <StyledNameText>{proposal.userName} 회원님</StyledNameText>
              <StyledProposalText>
                {/* TODO : 가격 부분 자연스럽게 수정 */}
                {proposal.totalCount}회 {proposal.price}원
              </StyledProposalText>
            </Box>
          </Flex>
          {/* TODO : status 변수로 관리 */}
          <StyledStatusText>{proposal.status}</StyledStatusText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

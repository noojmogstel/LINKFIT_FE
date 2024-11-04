import { Card, Flex } from '@chakra-ui/react';

import { usePtProfile } from '@/hooks/usePtProfile';

import {
  StyledCardBody,
  StyledChatButton,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './TrainerProfile.styles';

export const TrainerProfile = () => {
  const { trainerProfile } = usePtProfile();

  if (!trainerProfile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <Flex>
            <StyledProfileImage
              src={trainerProfile.profileImageUrl}
              alt='프로필'
            />
            <Flex direction='column'>
              <StyledNameText mt='15px'>
                {trainerProfile.trainerName} 트레이너
              </StyledNameText>
              <StyledGymText>소속 : {trainerProfile.gymName}</StyledGymText>
            </Flex>
          </Flex>
          <StyledChatButton>1:1 채팅</StyledChatButton>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

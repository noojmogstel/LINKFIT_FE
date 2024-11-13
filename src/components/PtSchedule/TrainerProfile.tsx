import { Card, Flex } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';
import { UserPtDetail } from '@/types';

import { ChattingButton } from '../Chat/ChattingButton';
import {
  StyledCardBody,
  StyledDefaultText,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './TrainerProfile.styles';

export const TrainerProfile = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();

  return (
    <Wrapper>
      {!ptDetail ? (
        <StyledDefaultText>
          아직 PT 매칭이 이루어지지 않았습니다.
        </StyledDefaultText>
      ) : (
        <Card>
          <StyledCardBody>
            <Flex>
              <StyledProfileImage src={ptDetail.profileImageUrl} alt='프로필' />
              <Flex direction='column' alignItems='flex-start'>
                <StyledNameText mt='15px'>
                  {ptDetail.trainerName} 트레이너
                </StyledNameText>
                <StyledGymText>소속 : {ptDetail.gymName}</StyledGymText>
              </Flex>
            </Flex>
            <ChattingButton opponentId={ptDetail.trainerId} />
          </StyledCardBody>
        </Card>
      )}
    </Wrapper>
  );
};

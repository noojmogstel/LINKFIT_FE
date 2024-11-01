import { Card } from '@chakra-ui/react';

import { useProfile } from '@/hooks/useProfile';

import {
  StyledCardBody,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  Wrapper,
} from './TrainerProfile.styles';

interface TrainerProfileProps {
  trainerId: number;
}

export const TrainerProfile = ({ trainerId }: TrainerProfileProps) => {
  const profile = useProfile(trainerId);

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  let displayGender = '성별 정보 없음';

  // TODO : 추후 utils 함수로 분리
  if ('gender' in profile) {
    displayGender =
      profile.gender === 'MALE'
        ? '남'
        : profile.gender === 'FEMALE'
          ? '여'
          : '성별 정보 없음';
  }

  return (
    <Wrapper>
      <Card>
        <StyledCardBody>
          <StyledProfileImage src={profile.profileImageUrl} alt='프로필' />
          <StyledNameText mt='15px'>
            {profile.name} 트레이너님 ({displayGender})
          </StyledNameText>
          <StyledGymText>
            소속 : {'gymName' in profile ? profile.gymName : '체육관 정보 없음'}
          </StyledGymText>
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};

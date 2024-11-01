import { Flex } from '@chakra-ui/react';

import { usePt } from '@/hooks/usePt';

import {
  StyledButton,
  StyledCard,
  StyledDefaultText,
  StyledNameText,
  StyledProfileCard,
  StyledProfileImage,
  StyledTitleText,
  Wrapper,
} from './LinkedClients.styles';

export const LinkedClients = () => {
  const { linkedClients } = usePt();

  return (
    <Wrapper>
      <StyledCard>
        <StyledTitleText>내 회원 목록</StyledTitleText>
        {linkedClients.length === 0 ? (
          <StyledDefaultText>PT가 성사된 회원이 없습니다.</StyledDefaultText>
        ) : (
          linkedClients.map((linkedClient) => (
            <StyledProfileCard key={linkedClient.id}>
              <Flex justify='left' align='center' position='relative'>
                <StyledProfileImage
                  src={linkedClient.profileImageUrl}
                  alt='프로필'
                ></StyledProfileImage>
                <StyledNameText>{linkedClient.userName}</StyledNameText>
                <StyledButton>일정 관리</StyledButton>
              </Flex>
            </StyledProfileCard>
          ))
        )}
      </StyledCard>
    </Wrapper>
  );
};

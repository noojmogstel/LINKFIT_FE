import { Card, Flex, Text } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';
import { UserPtDetail } from '@/types';

import {
  FlexWrapper,
  StyledCard,
  StyledDefaultText,
  TitleText,
  Wrapper,
} from './UserSchedule.styles';

export const UserSchedule = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();

  if (!ptDetail) {
    return <Text>PT 일정 정보를 불러오는 중...</Text>;
  }

  return (
    <Wrapper>
      <TitleText>PT 일정</TitleText>
      <FlexWrapper>
        {ptDetail?.schedules.length === 0 ? (
          <StyledDefaultText>등록된 PT 일정이 없습니다.</StyledDefaultText>
        ) : (
          ptDetail.schedules.map((schedule, index) => (
            <StyledCard key={index}>
              <Flex justifyContent='space-around'>
                <Text minWidth='100px'>
                  {new Date(schedule.date).toLocaleDateString()}
                </Text>
                <Text>{schedule.isCompleted ? '완료' : '미완료'}</Text>
              </Flex>
            </StyledCard>
          ))
        )}
      </FlexWrapper>
    </Wrapper>
  );
};

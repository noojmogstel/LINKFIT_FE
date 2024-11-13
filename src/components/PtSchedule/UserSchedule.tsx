import { Flex, Text } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';
import { useSchedule } from '@/hooks/useSchedule';
import { UserPtDetail } from '@/types';

import {
  FlexWrapper,
  StyledCard,
  StyledCompleteButton,
  StyledDefaultText,
  TitleText,
  Wrapper,
} from './UserSchedule.styles';

export const UserSchedule = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();
  const { handleCompleteSchedule } = useSchedule();

  return (
    <Wrapper>
      <TitleText>PT 일정</TitleText>
      <FlexWrapper>
        {!ptDetail ? (
          <StyledDefaultText>PT 매칭을 기다려주세요!</StyledDefaultText>
        ) : ptDetail.schedules.length === 0 ? (
          <StyledDefaultText>등록된 PT 일정이 없습니다.</StyledDefaultText>
        ) : (
          ptDetail.schedules.map((schedule, index) => (
            <StyledCard key={index}>
              <Flex justifyContent='space-around'>
                <Text minWidth='100px'>
                  {new Date(schedule.date).toLocaleDateString()}
                </Text>
                <Text>
                  {schedule.isCompleted ? (
                    '완료'
                  ) : (
                    <StyledCompleteButton
                      onClick={() =>
                        handleCompleteSchedule(schedule.scheduleId)
                      }
                    >
                      완료
                    </StyledCompleteButton>
                  )}
                </Text>
              </Flex>
            </StyledCard>
          ))
        )}
      </FlexWrapper>
    </Wrapper>
  );
};

import { Text } from '@chakra-ui/react';

import {
  CareerBox,
  StyledCard,
  StyledDefaultText,
  StyledTitleText,
} from '@/components/MyPage/TrainerCareer.styles';
import { useCareer } from '@/hooks/useCareer';

interface TrainerCareerProps {
  trainerId: number;
}

export const TrainerCareer = ({ trainerId }: TrainerCareerProps) => {
  const { careers } = useCareer(trainerId);

  return (
    <StyledCard>
      <StyledTitleText>&#128196; 경력 및 자격사항</StyledTitleText>
      {careers.length === 0 ? (
        <StyledDefaultText>
          등록된 경력 및 자격사항이 없습니다.
        </StyledDefaultText>
      ) : (
        careers.map((career) => (
          <CareerBox key={career.id}>
            <Text>{career.career}</Text>
          </CareerBox>
        ))
      )}
    </StyledCard>
  );
};

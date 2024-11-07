import { Card, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 90%;
  margin: 30px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StyledDefaultText = styled(Text)`
  text-align: center;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledCard = styled(Card)`
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
  margin: 0 auto;
`;

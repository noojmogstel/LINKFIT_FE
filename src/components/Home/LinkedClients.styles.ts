import { Button, Card, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div``;

export const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  padding-bottom: 20px;
`;

export const StyledTitleText = styled(Text)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0px 30px;
`;

export const StyledProfileCard = styled(Card)`
  width: 90%;
  background-color: #f5f5f5;
  margin-bottom: 10px;
`;

export const StyledProfileImage = styled(Image)`
  width: 60px;
  margin: 10px 20px 10px 100px;
`;

export const StyledNameText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledDefaultText = styled(Text)`
  text-align: center;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 24px;
  right: 100px;
  background-color: ${colors.mainColor};
  color: ${colors.white};
  font-size: 14px;
  width: 100px;
  height: 30px;

  &:hover {
    background-color: #ff467e;
  }
`;

import { Button, CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 500px;
  cursor: pointer;
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
`;

export const StyledProfileImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 1px solid #eeeeee;
  border-radius: 100%;
`;

export const StyledNameText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
`;

export const StyledProposalText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.mainColor};
`;

export const StyledGymText = styled(Text)`
  font-size: 13px;
  color: gray;
  margin-top: 10px;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

export const StyledChatButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  width: 120px;
  height: 32px;

  &:hover {
    background-color: #ff467e;
  }
`;

export const StyledReviewButton = styled(Button)`
  width: 120px;
  height: 32px;
`;

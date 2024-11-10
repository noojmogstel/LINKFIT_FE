import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const StyledChatButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  width: 300px;
  height: 26px;
  font-size: 14px;
  margin-top: 15px;

  &:hover {
    background-color: #ff467e;
  }
`;

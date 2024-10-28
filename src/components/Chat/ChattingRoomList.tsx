import {ChattingList} from "@/types";
import {
  Card,
  Box,
  Flex,
} from '@chakra-ui/react';
import {
  Wrapper,
  StyledCardBody,
  StyledProfileImage,
  StyledNameText,
} from './ChattingRoomList.styles';
import {RouterPath} from "@/routes/path";
import {useNavigate} from "react-router-dom";

export const ChattingRoomList = ({
  chattingList,
} : {
  chattingList: ChattingList;
}) => {

  const navigate = useNavigate();

  const handleCardClick = (roomId: number) => {
    console.log("Navigating to room ID:", roomId); // Check the roomId being passed
    navigate(`${RouterPath.chattingRoom}/${roomId}`);
  };


  return (
      <Wrapper onClick={() => handleCardClick(chattingList.Id)}>
        <Card>
          <StyledCardBody>
            <Flex align='center'>
              <StyledProfileImage src={chattingList.personProfileImageUrl} alt='프로필' />
              <Box>
                <Flex align='center'>
                  <StyledNameText>{chattingList.personName} 트레이너</StyledNameText>
                </Flex>
              </Box>
            </Flex>
          </StyledCardBody>
        </Card>
      </Wrapper>
  )
}
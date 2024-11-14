import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

import { useReview } from '@/hooks/useReview';

import {
  StyledButton,
  StyledFlex,
  StyledFormWrapper,
  StyledIcon,
  StyledTextarea,
  StyledTitleText,
  Wrapper,
} from './RegisterReview.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from '@/routes/path';

export const RegisterReview = () => {
  const navigate = useNavigate();
  const { submitReview } = useReview();

  const [content, setContent] = useState('');
  const [score, setScore] = useState(3);

  const handleSubmit = async () => {
    await submitReview({ content, score });
    navigate(RouterPath.home);
  };

  return (
    <Wrapper>
      <StyledTitleText>리뷰 작성하기</StyledTitleText>
      <StyledFormWrapper>
        <StyledFlex>
          {[...Array(5)].map((_, i) => (
            <StyledIcon key={i} onClick={() => setScore(i + 1)}>
              {i < score ? <FaStar /> : <FaRegStar />}
            </StyledIcon>
          ))}
        </StyledFlex>
        <StyledTextarea
          placeholder='리뷰를 작성해주세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <StyledButton onClick={handleSubmit}>제출하기</StyledButton>
      </StyledFormWrapper>
    </Wrapper>
  );
};

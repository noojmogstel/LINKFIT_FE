import { postReview } from '@/api/review/postReview';
import { Review } from '@/types';

export const useReview = () => {
  const submitReview = async (reviewData: Review) => {
    try {
      await postReview(reviewData);
      alert('리뷰 작성이 완료되었습니다.');
    } catch (error) {
      console.error('리뷰 작성 실패:', error);
      alert('리뷰 작성은 PT가 완료된 후 가능합니다.');
    }
  };

  return { submitReview };
};

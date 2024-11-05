import { useEffect, useState } from 'react';

import { getUserPtDetail } from '@/api/pt/getUserPtDetail';
import { UserPtDetail } from '@/types';

export const useUserPtDetail = () => {
  const [ptDetail, setPtDetail] = useState<UserPtDetail>();

  const fetchTrainerProfile = async () => {
    try {
      const data = await getUserPtDetail();
      setPtDetail(data);
    } catch (error) {
      console.error('PT 데이터를 가져오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchTrainerProfile();
  }, []);

  return { ptDetail };
};

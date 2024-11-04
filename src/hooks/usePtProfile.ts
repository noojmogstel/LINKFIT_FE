import { useEffect, useState } from 'react';

import { getPtTrainerProfile } from '@/api/pt/getPtProfile';
import { PtTrainerProfile } from '@/types';

export const usePtProfile = () => {
  const [trainerProfile, setTrainerProfile] = useState<PtTrainerProfile>();

  const fetchTrainerProfile = async () => {
    try {
      const data = await getPtTrainerProfile();
      setTrainerProfile(data);
    } catch (error) {
      console.error('트레이너 프로필 데이터를 가져오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchTrainerProfile();
  }, []);

  return { trainerProfile };
};

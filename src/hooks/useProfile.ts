import { useEffect, useState } from 'react';

import {
  getTrainerProfile,
  getTrainerProfileForUser,
} from '@/api/profile/getTrainerProfile';
import { getUserProfile } from '@/api/profile/getUserProfile';
import { useAuth } from '@/hooks/useAuth';
import { TrainerProfile, TrainerProfileForUser, UserProfile } from '@/types';

export const useProfile = (trainerId?: number) => {
  const { type } = useAuth();
  const [profile, setProfile] = useState<
    TrainerProfileForUser | UserProfile | TrainerProfile | null
  >(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (trainerId && type === 'user') {
          // 일반회원이 특정 트레이너의 프로필을 조회할 때
          const data: TrainerProfileForUser =
            await getTrainerProfileForUser(trainerId);
          setProfile(data);
        } else if (type === 'user') {
          // 일반회원이 본인의 프로필을 조회할 때
          const data: UserProfile = await getUserProfile();
          setProfile(data);
        } else if (type === 'trainer') {
          // 트레이너가 본인의 프로필을 조회할 때
          const data: TrainerProfile = await getTrainerProfile();
          setProfile(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [type]);

  return profile;
};

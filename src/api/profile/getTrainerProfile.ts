import { fetchAPI } from '..';

export const getTrainerProfile = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/trainers/profile',
  });
};

export const getTrainerProfileForUser = async (trainerId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/trainers/${trainerId}`,
  });
};

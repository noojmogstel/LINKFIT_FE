import { fetchAPI } from '..';

export const getPtTrainerProfile = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/user',
  });
};

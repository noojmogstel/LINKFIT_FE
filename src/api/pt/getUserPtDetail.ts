import { fetchAPI } from '..';

export const getUserPtDetail = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/user',
  });
};

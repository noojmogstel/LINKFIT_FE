import { fetchAPI } from '..';

export const getUserProposal = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/suggests/user',
  });
};

import { fetchAPI } from '..';

export const getLinkedClients = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/pt/trainer',
  });
};

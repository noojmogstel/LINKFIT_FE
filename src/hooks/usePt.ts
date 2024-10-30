import { useEffect, useState } from 'react';

import { getLinkedClients } from '@/api/pt/getLinkedClients';
import { LinkedClients } from '@/types';

export const usePt = () => {
  const [linkedClients, setLinkedClients] = useState<LinkedClients[]>([]);

  const fetchLinkedClients = async () => {
    try {
      const data = await getLinkedClients();
      setLinkedClients(data);
    } catch (error) {
      console.error(
        'PT 매칭 성사 회원 데이터를 가져오는데 실패했습니다.',
        error
      );
    }
  };

  useEffect(() => {
    fetchLinkedClients();
  }, []);

  return { linkedClients };
};

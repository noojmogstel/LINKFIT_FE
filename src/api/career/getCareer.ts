import { fetchAPI } from '..';

// 트레이너회원 본인이 경력 조회 시
export const getCareer = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/careers',
  });
};

// 일반회원이 트레이너회원 경력 조회 시
export const getTrainerCareer = async (trainerId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/careers/${trainerId}`,
  });
};

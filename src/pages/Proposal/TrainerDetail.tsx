import { useParams } from 'react-router-dom';

import { TrainerCareer } from '@/components/Proposal/TrainerDetail/TrainerCareer';
import { TrainerProfile } from '@/components/Proposal/TrainerDetail/TrainerProfile';

export const TrainerDetail = () => {
  const { trainerId } = useParams<{ trainerId: string }>();

  return (
    <>
      <TrainerProfile trainerId={Number(trainerId)} />
      <TrainerCareer trainerId={Number(trainerId)} />
    </>
  );
};

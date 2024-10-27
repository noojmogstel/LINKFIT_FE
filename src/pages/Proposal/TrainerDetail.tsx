import { TrainerCareer } from '@/components/Proposal/TrainerDetail/TrainerCareer';
import { useParams } from 'react-router-dom';

export const TrainerDetail = () => {
  const { trainerId } = useParams<{ trainerId: string }>();

  return <TrainerCareer trainerId={Number(trainerId)} />;
};

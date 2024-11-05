import { TrainerProfile } from '@/components/PtSchedule/TrainerProfile';
import { Wrapper } from './UserPtSchedule.styles';
import { UserSchedule } from '@/components/PtSchedule/UserSchedule';

export const UserPtSchedulePage = () => {
  return (
    <Wrapper>
      <TrainerProfile />
      <UserSchedule />
    </Wrapper>
  );
};

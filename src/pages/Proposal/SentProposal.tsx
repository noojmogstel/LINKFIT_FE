import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ProposalUserProfile } from '@/components/Proposal/ProposalUserProfile';
import { useProposal } from '@/hooks/useProposal';

import { StyledTitleText, Wrapper } from './SentProposal.styles';

export const SentProposal = () => {
  const { trainerProposals, fetchTrainerProposals } = useProposal();

  useEffect(() => {
    fetchTrainerProposals();
  }, []);

  return (
    <Wrapper>
      <StyledTitleText>회원들에게 LINK를 제안했어요!</StyledTitleText>
      {trainerProposals.length > 0 ? (
        trainerProposals.map((proposal) => (
          <ProposalUserProfile key={proposal.id} proposal={proposal} />
        ))
      ) : (
        <Text>아직 제안한 회원이 없습니다.</Text>
      )}
    </Wrapper>
  );
};

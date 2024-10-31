import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { RegisterBodyInfo } from '@/pages/BodyInfo/RegisterBodyInfo';
import { RegisterCareer } from '@/pages/Career/RegisterCareer';
import { ClientFinder } from '@/pages/Clients/ClientFinder';
import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { MyPage } from '@/pages/MyPage';
import { PreferencePage } from '@/pages/Preference';
import { ProposalPage } from '@/pages/Proposal/ProposalPage';
import { ReceivedProposal } from '@/pages/Proposal/ReceivedProposal';
import { SentProposal } from '@/pages/Proposal/SentProposal';
import { TrainerDetail } from '@/pages/Proposal/TrainerDetail';
import { SignupPage } from '@/pages/Signup';
import { TrainerSignupPage } from '@/pages/Signup/TrainerSignup';
import { UserSignupPage } from '@/pages/Signup/UserSignup';

import { RouterPath } from './path';
import { UserPtSchedulePage } from '@/pages/PtSchedule/UserPtSchedule';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.login,
        element: <LoginPage />,
      },
      {
        path: RouterPath.signup,
        element: <SignupPage />,
      },
      {
        path: RouterPath.signupUser,
        element: <UserSignupPage />,
      },
      {
        path: RouterPath.signupTrainer,
        element: <TrainerSignupPage />,
      },
      {
        path: RouterPath.mypage,
        element: <MyPage />,
      },
      {
        path: RouterPath.registerBodyInfo,
        element: <RegisterBodyInfo />,
      },
      {
        path: RouterPath.registerCareer,
        element: <RegisterCareer />,
      },
      {
        path: RouterPath.preference,
        element: <PreferencePage />,
      },
      {
        path: RouterPath.clientFinder,
        element: <ClientFinder />,
      },
      {
        path: RouterPath.proposal,
        element: <ProposalPage />,
      },
      {
        path: RouterPath.sentProposal,
        element: <SentProposal />,
      },
      {
        path: RouterPath.receivedProposal,
        element: <ReceivedProposal />,
      },
      {
        path: RouterPath.trainerDetail,
        element: <TrainerDetail />,
      },
      {
        path: RouterPath.userPtSchedule,
        element: <UserPtSchedulePage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

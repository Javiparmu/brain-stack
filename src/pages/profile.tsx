import { MainLayout, Profile } from '@/components';
import { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};

export default ProfilePage;

import { Profile } from '@/components';
import { MainLayout } from '@/components/layouts';
import { NextPage } from 'next';
import React from 'react';

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};

export default ProfilePage;

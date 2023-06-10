import { MainLayout, Pricing } from '@/components';
import { NextPage } from 'next';

const PricingPage: NextPage = () => {
  return (
    <MainLayout>
      <Pricing show />
    </MainLayout>
  );
};

export default PricingPage;

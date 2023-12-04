import { PlanEnum } from '@/utils/enums';
import { create } from 'zustand';

interface useSubscriptionStore {
  subscriptionPlan?: PlanEnum;
  setSubscriptionPlan: (plan: PlanEnum) => void;
}

export const useSubscription = create<useSubscriptionStore>((set) => ({
  subscriptionPlan: undefined,
  setSubscriptionPlan: (plan) => set({ subscriptionPlan: plan }),
}));

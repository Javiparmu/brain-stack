import { maxFreeCounts } from './constants';
import { PlanEnum } from './enums';

export const getPlanId = (plan: PlanEnum): string => {
  switch (plan) {
    case PlanEnum.BASIC:
      return (process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_ID as string) ?? '';
    case PlanEnum.STANDARD:
      return (process.env.NEXT_PUBLIC_STRIPE_STANDARD_PLAN_ID as string) ?? '';
    case PlanEnum.PREMIUM:
      return (process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_ID as string) ?? '';
    default:
      return assertNever(plan);
  }
};

export const getPlanFromId = (planId: string | undefined): PlanEnum | null => {
  switch (planId) {
    case process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_ID:
      return PlanEnum.BASIC;
    case process.env.NEXT_PUBLIC_STRIPE_STANDARD_PLAN_ID:
      return PlanEnum.STANDARD;
    case process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_ID:
      return PlanEnum.PREMIUM;
    default:
      return null;
  }
};

export const getProgressPercentage = (progress: number): number => {
  return (progress / maxFreeCounts) * 100;
};

export const getCanSubscribe = (userPlan: string, plan: string): boolean => {
  switch (userPlan) {
    case process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_ID:
      return plan !== process.env.NEXT_PUBLIC_STRIPE_BASIC_PLAN_ID;
    case process.env.NEXT_PUBLIC_STRIPE_STANDARD_PLAN_ID:
      return plan === process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_ID;
    case process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_ID:
      return false;
    default:
      return true;
  }
};

export const assertNever = (value: never): never => {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
};

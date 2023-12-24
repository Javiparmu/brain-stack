export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  plan: string;
  role: string;
  requestCount: number;
  requestLimit: number;
  requestReset: number;
}

export interface UserSubscriptionDocument {
  _id: string;
  userId: string;
  stripeSubscriptionId: string;
  stripeCustomerId: string;
  stripePriceId: string;
  stripeCurrentPeriodEnd: number;
}

export interface UserApiLimitDocument {
  _id: string;
  userId: string;
  userIp: string;
  hits: number;
  exceeded: boolean;
}

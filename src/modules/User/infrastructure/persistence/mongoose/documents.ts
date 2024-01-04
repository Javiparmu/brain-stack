export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  plan: string;
  role: string;
  customerId: string;
}

export interface UserSubscriptionDocument {
  _id: string;
  userId: string;
  stripeCurrentPeriodEnd: number;
  requestCount: number;
  requestLimit: number;
  requestReset: number;
}

export interface UserApiLimitDocument {
  _id: string;
  userId: string;
  userIp: string;
  hits: number;
  exceeded: boolean;
}

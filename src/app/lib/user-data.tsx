import { NextRequest } from 'next/server';

export const getUserIp = (req: NextRequest): string => {
  let userIp = req.ip ?? req.headers.get('x-real-ip');

  const forwardedFor = req.headers.get('x-forwarded-for');

  if (!userIp && forwardedFor) {
    userIp = forwardedFor.split(',').at(0) ?? 'Unknown';
  }

  return userIp ?? 'Unknown';
};

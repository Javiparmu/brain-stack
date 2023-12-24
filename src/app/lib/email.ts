import { registrationEmailTemplate, subscriptionEmailTemplate } from '@/app/utils/email-templates';
import { PlanEnum } from '@/app/utils/enums';
import { EmailResponse } from '@/app/utils/interfaces';
import { Resend } from 'resend';

const NO_REPLY_EMAIL = 'noreply@brain-stack.com';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendRegistrationEmail = async (emailTo: string, username: string): Promise<EmailResponse> => {
  const send = await resend.emails.send({
    from: NO_REPLY_EMAIL,
    to: emailTo,
    subject: 'Brain Stack Registration',
    html: registrationEmailTemplate(username),
  });

  return send;
};

export const sendSubscriptionEmail = async (
  emailTo: string,
  username: string,
  plan: PlanEnum,
): Promise<EmailResponse> => {
  const send = await resend.emails.send({
    from: NO_REPLY_EMAIL,
    to: emailTo,
    subject: 'Brain Stack Subscription',
    html: subscriptionEmailTemplate(username, plan),
  });

  return send;
};

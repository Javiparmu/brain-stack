import {
  registrationEmailTemplate,
  subscriptionEmailTemplate,
} from '@/utils/email-templates';
import { PlanEnum } from '@/utils/enums';
import { EmailResponse } from '@/utils/interfaces';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendRegistrationEmail = async (
  emailTo: string,
  username: string,
): Promise<EmailResponse> => {
  const send = await resend.emails.send({
    from: 'noreply@brain-stack.com',
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
    from: 'noreply@brain-stack.com',
    to: emailTo,
    subject: 'Brain Stack Subscription',
    html: subscriptionEmailTemplate(username, plan),
  });

  return send;
};

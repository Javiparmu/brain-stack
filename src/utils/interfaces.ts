import { ErrorResponse } from 'resend';

export interface Point {
  x: number;
  y: number;
}

export interface EmailResponse {
  data: {
    id: string;
  } | null;
  error: ErrorResponse | null;
}

export interface Email {
  id: string;
  sender: string;
  recipient: string;
  subject: string;
  body: string;
  received_date: string;
  flagged: boolean | null; // null = pending, true = high risk, false = not high risk
}

export type EmailFilter = 'all' | 'pending' | 'flagged' | 'not-flagged';


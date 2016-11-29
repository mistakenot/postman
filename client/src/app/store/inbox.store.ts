
export interface IInboxItem {
  id: string;
  sentAt: Date;
  from: string;
  to: string;
  subject: string;
}

export interface IInboxItemContent {
  id: string;
  content: string;
}
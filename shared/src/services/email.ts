import {EmailHeader} from '../models/';

export interface IEmailService {
  createEmail(email: IEmailModel): Promise<EmailHeader>;
}

export interface IEmailModel {
  to: string;
  from: string;
  content: string;
  subject: string;
}

export class EmailService implements IEmailService {
  createEmail(email: IEmailModel): Promise<EmailHeader> {
    return Promise.resolve(new EmailHeader("", "", ""));
  }
}
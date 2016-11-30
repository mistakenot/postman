import {EmailModel, EmailHeader} from '../models/';
import {Contains, IsString, MinLength, MaxLength, IsEmail, IsFQDN, IsDate, ArrayNotEmpty, ArrayMinSize, IsDefined, validate} from 'class-validator';
import {createValidator} from '../models/validator';

export interface IEmailService {
  createEmail(userId: string, email: EmailModel): Promise<EmailHeader>;
}

export class EmailService implements IEmailService {

  createEmail(userId: string, email: EmailModel): Promise<EmailHeader> {
    return EmailModel.isValid(email)
      .then(model => {
        return new EmailHeader(model.from, model.to, model.subject);
      });
  }
}
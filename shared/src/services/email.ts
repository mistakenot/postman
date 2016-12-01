import {EmailModel, EmailHeader} from '../models/';
import {Contains, IsString, MinLength, MaxLength, IsEmail, IsFQDN, IsDate, ArrayNotEmpty, ArrayMinSize, IsDefined, validate} from 'class-validator';
import {createValidator} from '../models/validator';
import {FirebaseHttp, Schema, IFirebaseHttp} from './';

export interface IEmailService {
  createEmail(userId: string, email: EmailModel): Promise<EmailHeader>;
}

export class EmailService implements IEmailService {

  constructor(
    private _fb: IFirebaseHttp) {}

  createEmail(userId: string, email: EmailModel): Promise<EmailHeader> {
    return EmailModel.isValid(email)
      .then(model => {
        let url = Schema.userData.user(userId).emailHeader._;
        
        return this._fb.push(url, model)
          .then(result => {
            return new EmailHeader(result.name, model.from, model.to, model.subject);
          });
      });
  }
}
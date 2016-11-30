import {Contains, IsString, MinLength, MaxLength, IsEmail, IsFQDN, IsDate, ArrayNotEmpty, ArrayMinSize, IsDefined} from 'class-validator';
import {createValidator} from '../models/validator';

export class EmailModel {
  @IsEmail()
  @IsDefined()
  to: string;

  @IsEmail()
  @IsDefined()
  from: string;

  @IsString()
  @MaxLength(1000)
  @IsDefined()
  content: string;

  @IsString()
  @MaxLength(30)
  @IsDefined()
  subject: string;

  constructor(val: any) {
    this.to = val.to;
    this.from = val.from;
    this.content = val.content;
    this.subject = val.subject;
  }

  static isValid = createValidator(a => new EmailModel(a));

}
import {FirebaseHttp} from './firebase';
import {EmailContent, EmailHeader} from '../models';

interface IBlankSchema {
  emailHeaders: EmailHeader[],
  emailContent: EmailContent[],
  testVal: string
}

const blankSchema: IBlankSchema = {
  emailHeaders: [],
  emailContent: [],
  testVal: "sadfsa"
}

export const Schema = {
  userData: {
    _: 'user-data',
    user: (userId: string) => {
      return {
        _: 'user-data/' + userId,
        emailHeader: {
          _: 'user-data/' + userId + '/email-header/',
          item: (id: string) => {
            return {
              _: 'user-data/' + userId + '/email-header/' + id
            }
          }
        }
      }
    }
  }
}

export class Database {
  constructor(private _fb: FirebaseHttp) {

  }

  createForNewUser(userId: string): Promise<any> {
    return this._fb.set(Schema.userData.user(userId)._, userId);
  }
}
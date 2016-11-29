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
    user: (id: string) => {
      return {
        _: 'user-data/' + id,
        inboxItems: {
          _: 'user-data/inbox-items/',
          item: (id: string) => {
            return {
              _: 'user-data/inbox-items/',
              item: (itemId: string) => 'user-data/inbox-items/' + itemId
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
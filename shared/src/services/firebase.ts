import * as request from 'request';

export class FirebaseHttp {
  constructor(
    private _baseUrl: string, 
    private _authToken?: string) {

  }

  get(relativePath: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request(this._baseUrl + relativePath + ".json", (error, resp, body) => {
        if (error) {
          reject(error);
        }

        resolve(body); 
      });
    });
  }

  set(relativePath: string, body: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request.put(
        this._baseUrl + relativePath + '.json', 
        {body: JSON.stringify(body)}, 
        (error, resp, body) => {
          if (error) {
            reject(error)
          }

          resolve(body);
        }
      )
    });
  }

  push(relativePath: string, body: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      request.post(
        this._baseUrl + relativePath + '.json', 
        {body: JSON.stringify(body)}, 
        (error, resp, body) => {
          if (error) {
            reject(error)
          }

          resolve(body);
        }
      )
    });
  }

  private getauth(): string {
    if (this._authToken) {
      return "?auth=" + this._authToken
    }
    else {
      return "";
    }
  }
}
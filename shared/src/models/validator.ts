import {validate} from 'class-validator';

export function createValidator<T>(ctor: (val: any) => T): (val: any) => Promise<T> {
  return (val: any) => {
    return new Promise<T>((resolve, reject) => {
      let model = ctor(val);
      
      validate(model).then(errors => {
        if (errors.length === 0) {
          resolve(model);
        }
        else {
          reject(errors);
        }
      })
    });
  }
}
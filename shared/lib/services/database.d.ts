import { FirebaseHttp } from './firebase';
export declare const Schema: {
    userData: {
        _: string;
        user: (id: string) => {
            _: string;
        };
    };
};
export declare class Database {
    private _fb;
    constructor(_fb: FirebaseHttp);
    createForNewUser(userId: string): Promise<any>;
}

import { FirebaseHttp } from './firebase';
export declare const Schema: {
    userData: {
        _: string;
        user: (id: string) => {
            _: string;
            inboxItems: {
                _: string;
                item: (id: string) => {
                    _: string;
                    item: (itemId: string) => string;
                };
            };
        };
    };
};
export declare class Database {
    private _fb;
    constructor(_fb: FirebaseHttp);
    createForNewUser(userId: string): Promise<any>;
}

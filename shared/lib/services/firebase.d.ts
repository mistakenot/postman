export declare class FirebaseHttp {
    private _baseUrl;
    private _authToken;
    constructor(_baseUrl: string, _authToken?: string);
    get(relativePath: string): Promise<any>;
    set(relativePath: string, body: any): Promise<any>;
    push(relativePath: string, body: any): Promise<any>;
    private getauth();
}

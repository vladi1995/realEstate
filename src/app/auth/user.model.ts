export class User {
    public email: string;
    public id: string;
    public _token: string;
    public _tokenExpirationDate: Date;

    constructor(email: string, id: string, _token: string, _tokenExpirationDate: Date) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}
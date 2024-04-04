export class User{
    constructor(
        public username: string, 
        public role: string, 
        public status: string,
        public createdAt: string,
        public searchCounts: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ){}

    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
        return this._token;
    }
}

export class userLoginModel{
    constructor(
        public username: string,
        private _password: string
    ){}

    get password(){
        const pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$";
        if(!this._password.match(pattern)){
            return null;
        }
        return this._password;
    }
}

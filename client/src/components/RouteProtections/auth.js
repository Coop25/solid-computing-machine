//this tracks login status after user logs in
//while keeping it protected

class Auth {
    constructor() {
        this.authenticated = false;
        this.token = undefined;
    }
// here we may want to consider having the callback be local storage
    login(token, cb) {
        this.token = token;
        this.authenticated = true;
        cb()
    }

    logout(cb) {
        this.token = undefined;
        this.authenticated = false;
        cb()
    }

    getToken(){
        return this.token;
    }

    isAuthenticated() {
        return this.authenticated; 
    }
}

export default new Auth();
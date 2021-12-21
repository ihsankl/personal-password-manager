import { action, makeObservable, observable } from "mobx";

class ObservableUserStore {
    user = {
        isLoggedIn: false,
        message: "",
        username: ""
    };

    constructor() {
        makeObservable(this, {
            user: observable,
            login: action,
        });
    }

    login = (user, password) => {
        if (user === 'admin' && password === 'admin') {
            this.user.isLoggedIn = true;
            this.user.message = "Login Successful";
            this.user.username = user;
        } else {
            this.user.message = "Login Failed";
        }
    }
}

export default ObservableUserStore;
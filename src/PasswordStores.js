import { action, autorun, computed, makeObservable, observable } from "mobx";

class ObservablePasswordStore {
    passwords = [];

    constructor() {
        makeObservable(this, {
            passwords: observable,
            passwordCounts: computed,
            addPassword: action,
            deletePassword: action
        });
        // THIS RUNS ON START/EVERY CHANGE
        // autorun(() => { console.log('your passwords counts now >>>', this.passwordCounts) });
    }

    get passwordCounts() {
        return this.passwords.length;
    }

    addPassword(password, site, note, username, title) {
        this.passwords.push({
            password,
            site,
            note,
            username,
            title,
        });
    }

    deletePassword = (index) => {
        this.passwords.splice(index, 1);
    }
}

export default ObservablePasswordStore;
import AuthStore from "./AuthStore";

export default class RootStore{
    constructor(){
        this.authStore = new AuthStore(this);
    }
}
import api from './api';

const version = 0.1;

const GLOBAL_TOKEN_KEY = 'gobal-token';
const REFRESH_GLOBAL_TOKEN_KEY = 'refresh-global-token';
const USER_TOKEN_KEY = 'token';
const USER_ID_KEY = 'userId';

export default class AuthServices {
    static isLoggin = () => {
        const token = AuthServices.getToken();
        const expired_at = new Date(parseInt(this.getExpired()));
        const now = new Date();
        const isExpired = now >= expired_at;
        const isLoggin = !!token && !isExpired;

        if (isExpired) this.logout();

        return isLoggin;
    }

    static setCredentials = (data) => {
        AuthServices.setToken(data.token);
        AuthServices.setExpired(data.expired_at);
        AuthServices.setUserId(data.userId);
        AuthServices.setRefreshToken(data.refreshToken);
    }
    static isNearExpired = () => {
        const expired_at = new Date(parseInt(this.getExpired()));
        const now = new Date();

        const diff_hour = parseFloat(
            ((expired_at - now) / (1000 * 60 * 60)).toFixed(2)
        );
        
        return diff_hour <= 2 && diff_hour > 0;
    }

    static setToken = (token) => {
        localStorage.setItem(GLOBAL_TOKEN_KEY, token);
    }
    static getToken = () => {
        return localStorage.getItem(GLOBAL_TOKEN_KEY);
    }
    static setUserToken = (token) => {
        localStorage.setItem(USER_TOKEN_KEY, token);
    }
    static getUserToken = () => {
        return localStorage.getItem(USER_TOKEN_KEY);
    }
    static setUserId = (userId) => {
        localStorage.setItem(USER_ID_KEY, userId);
    }
    static getUserId = () => {
        return localStorage.getItem(USER_ID_KEY);
    }
    static setRefreshToken = (refreshToken) => {
        localStorage.setItem(REFRESH_GLOBAL_TOKEN_KEY, refreshToken);
    }
    static getRefreshToken = () => {
        return localStorage.getItem(REFRESH_GLOBAL_TOKEN_KEY);
    }
    static setExpired = (expired_at) => {
        localStorage.setItem('expired_at', expired_at);
    }
    static getExpired = () => {
        return localStorage.getItem('expired_at');   
    }
    static getNewToken = () => {
        const refreshToken = AuthServices.getRefreshToken();
        if(!refreshToken) return;
        api
        .getNewToken({ refreshToken })
        .then((res)=> {
            const data = res.data;
            this.setCredentials(data);
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 'InvalidRefreshToken'){
                localStorage.removeItem(REFRESH_GLOBAL_TOKEN_KEY);
            }
        })
    }
    static logout = () => {
        localStorage.removeItem(GLOBAL_TOKEN_KEY);
        localStorage.removeItem(USER_ID_KEY);
        localStorage.removeItem('expired_at');
        localStorage.removeItem(REFRESH_GLOBAL_TOKEN_KEY);
    }
    logoutUser = () => {
        localStorage.removeItem(USER_TOKEN_KEY);
    }
    static login = (data, callback) => {
        api
        .login(data)
        .then((res) => {
            const data = res.data;
            this.setCredentials(data);
            callback();
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

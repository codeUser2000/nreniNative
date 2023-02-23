import axios from 'axios';
import {API_URL} from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

let auth = null;

(async () => {
    auth = await AsyncStorage.getItem('token')
})()
const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: auth,
        'Content-type': 'application/json',
    },
});

api.interceptors.request.use(
    // eslint-disable-next-line no-unused-vars
    (config) => config,
);

class Api {
    static getData(data) {
        return api.get(`/products/products?page=${data.page}${data.filter ? `&filter=${data.filter}` : ''}${data.search ? `&searchText=${data.search}` : ''}`, {
            headers: {
                'Content-Type': 'image/jpeg',
            },
        });
    }

    static getCategories() {
        return api.get('/categories/category');
    }

    static async userSelfDelete(email) {
        auth = await AsyncStorage.getItem('token')
        return api.post('/users/deleteSelf', {email}, {
            headers: {
                Authorization: auth
            },
        });
    }

    static setBlockquote(data) {
        return api.post('/users/blockquote', data);
    }

    static getBlockquote() {
        return api.get('/users/getBlockquote');
    }

    static login(data) {
        console.log(data)

        return api.post('/users/login', data);
    }

    static forgetPass(email) {
        return api.post('/users/forget', {email, isDevice: true});
    }

    static newPasswordDevice(data) {
        return api.post('/users/newPasswordDevice', data);
    }

    static newPasswordDeviceConfirm(data) {
        return api.get(`/users/newPasswordDevice?confirmToken=${data}`);
    }

    static register(data) {
        return api.post('/users/register', data);
    }

    static async addresses(data) {
        const auth = await AsyncStorage.getItem('token')
        return api.post('/users/addresses', data, {
            headers: {
                Authorization: auth
            },
        });
    }

    static confirm() {
        return api.get('/users/confirm');
    }

    static async getProfile() {
        const auth = await AsyncStorage.getItem('token')

        return api.get('/users/profile', {
            headers: {
                Authorization: auth
            },
        });
    }

    static async getOrders(data) {
        const auth = await AsyncStorage.getItem('token')

        return api.get('/others/getSingleOrder',{
            headers: {
                Authorization: auth
            },
        });
    }

    static async likeProduct(productId) {
        const auth = await AsyncStorage.getItem('token')
        console.log(1222)
        return api.post('others/like', { productId }, {
            headers: {
                Authorization: auth
            },
        });

    }

    static async deleteLikeProduct(productId) {
        const auth = await AsyncStorage.getItem('token')
        return api.post('others/likeDelete', { productId } ,{
            headers: {
                Authorization: auth
            },
        });
    }

    static async getSingle(id) {
        return api.get(`/products/singleProduct?id=${id}`);
    }

}

export default Api;

import axios from 'axios';
import Cookies from 'universal-cookie';
import { interceptorSuccessHandler, interceptorErrorHandler } from "./utilities";

const cookie = new Cookies();
const token = cookie.get('jwt_token');
export const apiUrl = process.env.REACT_APP_API_URL;

const apiWithoutToken = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        "X-CSRFToken": cookie.get("csrftoken"),
    }
});

const apiWithToken = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        Authorization: `Token ${token}`,
        "X-CSRFToken": cookie.get("csrftoken"),
    }
});

apiWithoutToken.interceptors.response.use(interceptorSuccessHandler, interceptorErrorHandler);
apiWithToken.interceptors.response.use(interceptorSuccessHandler, interceptorErrorHandler);

export { apiWithoutToken, apiWithToken };
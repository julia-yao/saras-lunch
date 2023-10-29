import { axiosErrorHandler } from "./errorHandler";

export const interceptorSuccessHandler = response => response.data;

export const interceptorErrorHandler = error => {
    axiosErrorHandler(error);
    return Promise.reject(error.response.data);
};

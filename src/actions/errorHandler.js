export const axiosErrorHandler = error => {
    const status = error.response.status;
    switch(status){
        case 401:
            console.log(401);
            break;
        case 404:
            console.log(404);
            break;
        default:
            console.log("default");
            break;
    }
};
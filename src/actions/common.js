import { UPDATE_IS_LOADING_STATUS } from "../constant/reducer/common";

export const updateIsLoading = status => ({
    type: UPDATE_IS_LOADING_STATUS,
    payload: status
})
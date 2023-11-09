//action creator

import {
    UPDATE_IS_LOADING_STATUS,
    UPDATE_HEADER_DATA,
    UPDATE_FOOTER_DATA,
    UPDATE_INDEX_DATA
} from "../../constant/reducer/common";

export const updateIsLoading = status => ({
    type: UPDATE_IS_LOADING_STATUS,
    payload: status
})

export const updateHeaderData = data => ({
    type: UPDATE_HEADER_DATA,
    payload: data
})

export const updateFooterData = data => ({
    type: UPDATE_FOOTER_DATA,
    payload: data
})
export const updateIndexData = data => ({
    type: UPDATE_INDEX_DATA,
    payload: data
})
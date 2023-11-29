//action creator

import {
    UPDATE_IS_LOADING_STATUS,
    UPDATE_HEADER_DATA,
    UPDATE_FOOTER_DATA,
} from "../../constant/reducer/common";
import {
    UPDATE_INDEX_DATA,
    UPDATE_LUNCHAREA_DATA
} from "../../constant/reducer/index";

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
export const updateLunchAreaData = data => ({
    type: UPDATE_LUNCHAREA_DATA,
    payload: data
})
import { apiGetHeaderFooter, apiGetIndex } from '../instance/headerFooter';
import * as commonAction from '../creators/common';
import { successResponseFormatter } from '../utilities';

// TODOS: 新增串連 redux 那段 更新 error modal
export const getCommonData = () => {
    return async (dispatch, getState) => {
        dispatch(commonAction.updateIsLoading(true));
        
        try {
            apiGetHeaderFooter()
                .then(res => {
                    const { header, footer } = successResponseFormatter(res);

                    // TODOS: transformer 可以做成統一共用的 res.data
                    dispatch(commonAction.updateHeaderData(header));
                    dispatch(commonAction.updateFooterData(footer));

                    dispatch(commonAction.updateIsLoading(false));
                }, (error) => {
                    console.log("error");
                })
        } catch (error) {
            console.log("error error");
        }
    }
};

export const getIndexData = () => {
    return async (dispatch, getState) => {
        dispatch(commonAction.updateIsLoading(true));
        
        try {
            apiGetIndex()
                .then(res => {
                    const { content } = successResponseFormatter(res);
                    dispatch(commonAction.updateIndexData(content.main_area[0]));
                    dispatch(commonAction.updateLunchAreaData(content.lunch_area));
                    
                    dispatch(commonAction.updateIsLoading(false));
                }, (error) => {
                    console.log("error");
                });
        } catch (error) {
            console.log("error error");
        }
    }
};
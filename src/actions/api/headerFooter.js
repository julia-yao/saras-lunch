import { apiGetHeaderFooter, apiGetIndex } from '../instance/headerFooter';
import * as commonAction from '../creators/common';

// TODOS: 新增串連 redux 那段 更新 error modal
export const getCommonData = () => {
    return async (dispatch, getState) => {
        dispatch(commonAction.updateIsLoading(true));
        
        try {
            apiGetIndex().then(res=>{
                //console.log(res.data[0].content.main_area[0].main_text)
                dispatch(commonAction.updateIndexData(res.data[0].content.main_area[0]));
            });

            apiGetHeaderFooter()
                .then(res => {
                    console.log(res);

                    // TODOS: transformer 可以做成統一共用的 res.data
                    const headerData = res.data[0].header;
                    dispatch(commonAction.updateHeaderData(headerData));
                    
                    const footerData = res.data[0].footer;
                    dispatch(commonAction.updateFooterData(footerData));

                    dispatch(commonAction.updateIsLoading(false));
                }, (error) => {
                    console.log("error");
                })
        } catch (error) {
            console.log("error error");
        }
    }
};
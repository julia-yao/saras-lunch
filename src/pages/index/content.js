import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useSetCommonState } from '../../hooks';
import { useAppDispatch } from "../../hooks/redux";
import { getCommonData } from "../../actions/api/headerFooter";
import MainPic from "../../components/index/main_pic";
import '../../sass/pages/index.scss';

const Content = () => {
    /**
     * 固定打 api 的位置為 pages-content
     * 可以在這邊做打 api 順序定義
     * 確保 getCommonData 先 再打別隻
     * 用 getCommonData 來做 refresh token 機制
     */
    const [isLoading, setIsLoading] = useSetCommonState();

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading])

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommonData());
    }, [dispatch]);

    const mainareaData = useSelector(state => state.common.content);
    const { main_text, sub_text, image } = mainareaData;
    console.log(main_text, sub_text, image);

    return <div className='index-page'>
        <MainPic
            main_text={mainareaData.main_text}
            sub_text={mainareaData.sub_text}
        />
        
        { isLoading && 'text isLoading' }
    </div>
}

export default Content;
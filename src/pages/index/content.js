import React, { useEffect } from 'react';
import { useSetCommonState } from '../../hooks';
import { useAppDispatch } from "../../hooks/redux";
import { useSelector } from "react-redux";
import { getCommonData, getIndexData } from "../../actions/api/headerFooter";
import MainPic from "../../components/index/main_pic";
import '../../sass/pages/index.scss';
import LunchPic from '../../components/index/lunch_area';
import ProductArea from '../../components/index/product_area';
import CategoryArea from '../../components/index/category_area';

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
        dispatch(getIndexData());
    }, [dispatch]);

    const IndexPageData = useSelector(state => state.index);
    const { main_text,sub_text } = IndexPageData.main_area;
    
    const { left_section,mid_section,right_section } = IndexPageData.lunch_area;
    const leftSection = Array.isArray(left_section) ? left_section[0] : [{}];
    const midSection = Array.isArray(mid_section) ? mid_section[0] : [{}];
    const rightSection = Array.isArray(right_section) ? right_section[0] : [{}];

    //const productArea = IndexPageData.product_area;
    //const bgImage = Array.isArray(product_area) ? product_area[0] : [{}];
    console.log(left_section,mid_section,right_section);

    return <div className='index-page'>
            <MainPic main_text={main_text} sub_text={sub_text}/>
        <div className='container'>
            <LunchPic leftSection={leftSection} midSection={midSection} rightSection={rightSection}/>
            <ProductArea />
            <CategoryArea />
        </div>
        { isLoading && 'text isLoading' }
    </div>
}

export default Content;
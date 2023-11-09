import React, { useEffect } from 'react';
// import { useSelector } from "react-redux";
import { useSetCommonState } from '../../hooks';
import { useAppDispatch } from "../../hooks/redux";
import { getCommonData } from "../../actions/api/headerFooter";
import '../../sass/pages/category.scss';

const Category = () => {
    const [isLoading, setIsLoading] = useSetCommonState();

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading])

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommonData());
    }, [dispatch]);

    console.log(isLoading);

    return <div className='category-page container'>
        category
    </div>
}

export default Category;
import React, { useEffect } from 'react';
import { useSetCommonState } from '../../hooks';
import { useAppDispatch } from "../../hooks/redux";
import { getCommonData } from "../../actions/api/headerFooter";

const Content = () => {
    const [isLoading, setIsLoading] = useSetCommonState();

    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading])

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCommonData());
    }, [dispatch]);

    return <>
        Content<br/>
        { isLoading && 'text isLoading' }
    </>
}

export default Content;
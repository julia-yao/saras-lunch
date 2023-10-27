import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { updateIsLoading } from '../../actions/common';

const Content = () => {
    const dispath = useDispatch();

    useEffect(() => {
        dispath(updateIsLoading(false));
    }, [dispath]);

    return <>
        Content
    </>
}

export default Content;
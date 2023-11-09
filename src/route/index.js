import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import MainLayout from '../layout/mainLayout';
import Content from '../pages/index/content';
import Category from '../pages/category';
import WithoutHeaderFooterLayout from '../layout/withoutHeaderFooter';
import Test from '../pages/test/Test';

/**
 * todos: 需要把 router 抽成常數
 */
const routes = [
    {
        path: '/',
        element: <MainLayout />,
        breadcrumb: 'home',
        children: [
            {
                path: '/',
                element: <Content />,
                breadcrumb: 'Content'
            },
            {
                path: '/category',
                element: <Category />,
                breadcrumb: 'category'
            }
        ]
    },
    {
        path: '/test-test',
        element: <WithoutHeaderFooterLayout />,
        breadcrumb: 'test test',
        children: [
            {
                path: '',
                element: <Test />,
                breadcrumb: 'Test'
            }
        ]
    }
]

export const RoutesElement = () => useRoutes(routes);
export default RoutesElement;
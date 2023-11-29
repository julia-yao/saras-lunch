import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import MainLayout from '../layout/mainLayout';
import Content from '../pages/index/content';
import Category from '../pages/category';
import WithoutHeaderFooterLayout from '../layout/withoutHeaderFooter';
import Test from '../pages/test/Test';
import BootstrapTest from '../layout/testLayout/BootstrapTest';
import LayoutTest from '../layout/testLayout/LayoutTest';
import FluidTest from '../layout/testLayout/FluidTest';
import ProductLayout from '../layout/testLayout/ProductLayout';
import HelpLayout from '../layout/testLayout/HelpLayout';
import CartLayout from '../layout/testLayout/CartLayout';

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
            },
            {
                path: '/layouttest',
                element: <LayoutTest />,
                breadcrumb: 'layouttest'
            },
            {
                path: '/product',
                element: <ProductLayout />,
                breadcrumb: 'product'
            },
            {
                path: '/help',
                element: <HelpLayout />,
                breadcrumb: 'help'
            },

            {
                path: '/cart',
                element: <CartLayout/>,
                breadcrumb: 'cart'
            },
            {
                path: '/fluidtest',
                element: <FluidTest />,
                breadcrumb: 'fluidtest'
            },

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
    },
    {
        path: '/bootstrap-test',
        breadcrumb: 'bootstrap-test',
        children: [
            {
                path: '',
                element: <BootstrapTest />,
                breadcrumb: 'BootstrapTest'
            }
        ]
    }
]

export const RoutesElement = () => useRoutes(routes);
export default RoutesElement;
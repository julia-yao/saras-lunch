import Effect from '../Effect.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <>
        <Outlet />
        <Effect />
    </>
}

export default Layout;
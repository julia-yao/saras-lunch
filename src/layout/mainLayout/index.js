import Header from './Header.js';
import Footer from './Footer.js';
import Effect from '../Effect.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        <Effect />
    </>
}

export default Layout;
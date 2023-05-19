
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Common/Nav';
import Footer from '../Pages/Common/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
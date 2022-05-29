import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <img className="absolute top-0 -z-10" src="/assets/illustration.svg" alt="" />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
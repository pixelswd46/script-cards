
import { Link } from 'react-router-dom';
import { MdLocationPin, MdMail } from "react-icons/md";


const Footer = () => {

    return (
        <>
            <footer className="bg-white">
                <section className="container mx-auto px-24 lg:px-99 py-32 md:flex md:items-center text-center md:justify-between">
                    <Link to="/">
                        <img className="w-183" src="/assets/script-cards.svg" alt="" />
                    </Link>
                    <div className="flex mt-22 space-x-6 flex-col md:flex-row items-end md:mt-0">
                        <span className="group flex items-center gap-2 cursor-pointer text-gray-600 text-14 hover:underline transition-all"><MdLocationPin className='text-22 group-hover:text-primary transition-all' /> 447 High Street Penrith 2750</span>
                        <span className="group flex items-center gap-3 cursor-pointer text-gray-600 text-14 hover:underline transition-all"> <MdMail className='text-20 group-hover:text-primary transition-all' /> 447 High Street Penrith 2750</span>
                    </div>
                </section>

                <section className="bg-primary">
                    <section className="container mx-auto px-24 lg:px-99 py-24 md:flex md:items-center text-center md:justify-between">
                        <span className="cursor-pointer text-gray-400 text-14 hover:underline transition-all">Contact Us</span>
                        <span className="text-gray-400 text-14"> Copyright © 2022 ScriptCards Pty Ltd.</span>
                        <span className="text-gray-400 text-14"> <Link to="/terms&conditions"><span className='cursor-pointer hover:underline transition-all'> Terms and Conditions </span> </Link> & <Link to="/privacy-policy"><span className='cursor-pointer hover:underline transition-all'> Privacy Policy </span> </Link> </span>
                    </section>
                </section>
            </footer>
        </>
    )
}

export default Footer;
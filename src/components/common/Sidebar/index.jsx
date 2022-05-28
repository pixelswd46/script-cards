import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { BsDiscord, BsSignal } from "react-icons/bs";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const Navigation = [{ placeholder: 'Home', path: '/' }, { placeholder: 'Our Story', path: '/our-story' }, { placeholder: 'Pricing', path: '/pricing' }, { placeholder: 'Account', path: '/account' }, { placeholder: 'App', path: '/app' }]

    return (
        <>
            <main className={`fixed bottom-0 right-0 left-0 z-10 transition-all ${toggleSidebar ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`} style={{ marginLeft: '0px', top: '4.4rem' }}>
                <aside className={`${toggleSidebar ? 'sidebar-open' : 'sidebar-close'} flex justify-between flex-col`}>
                    <ul className="flex pt-40 flex-col items-center mt-4 ">
                        {
                            Navigation?.map(item => (
                                <li key={Math.random()} className='mb-12' onClick={() => setToggleSidebar(false)}>
                                    <Link to={item?.path}>
                                        <span className='text-lg font-light cursor-pointer transition-all text-gray-700 hover:text-primary'>
                                            {item?.placeholder}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <section className='gGngoX'>
                        <Link to="/user-authentication"> <button className="bg-primary text-white w-full px-32 py-10 mb-24 rounded-full transition-all hover:bg-green-600 relative top-0 hover:top-px" >Get Started</button> </Link>

                        <div className='gGngoXline py-18'>
                            <div className='flex justify-center items-center gap-3 text-26 text-gray-500'>
                                <AiFillFacebook className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillTwitterSquare className='transition-all hover:text-gray-800 cursor-pointer' />
                                <AiFillInstagram className='transition-all hover:text-gray-800 cursor-pointer' />
                                <BsDiscord className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                                <BsSignal className='text-22 transition-all hover:text-gray-800 cursor-pointer' />
                            </div>
                        </div>
                    </section>
                </aside>
            </main>
        </>
    )
}

export default Sidebar;

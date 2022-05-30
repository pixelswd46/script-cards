import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import Sidebar from '../Sidebar';


const Navbar = () => {
    const location = useLocation();

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const Navigation = [{ placeholder: 'Product', path: '/' }, { placeholder: 'Our Story', path: '/our-story' }, { placeholder: 'Pricing', path: '/pricing' }, { placeholder: 'Account', path: 'https://login.focaltasker.com/login?state=hKFo2SA2WVAwTUg3d3JkWUY1cUg4dkpxY25BUjQ0YlZDNi1FMaFupWxvZ2luo3RpZNkgNUl0YWNwX1JxRExWWV9oNUhUcHFKM2pmcnpaV19GYTmjY2lk2SAxS2VvU0FIaExPcFRCajJSdUVaOG5uZnFiVU5XT3pSRQ&client=1KeoSAHhLOpTBj2RuEZ8nnfqbUNWOzRE&protocol=oauth2&scope=%22email%20openid%20profile%22&response_type=code&redirect_uri=https%3A%2F%2Fscript.cards%2Fapi%2Fauth%2Fcallback&nonce=jSXUjsmIPtojyGwk9YQULUacTYtz-eN9bbOEeFdfjwY&code_challenge=qbHMLwfist8ycwmVqfZZi79Z-gkehU09hwpIml8AxJo&code_challenge_method=S256' }, { placeholder: 'App', path: '/app' }]

    return (
        <>

            <nav className="h-71">
                <main className="flex h-71 justify-between items-center mx-auto px-24 lg:px-99">
                    <Link to="/">
                        <img className="w-183" src="/assets/script-cards.svg" alt="" />
                    </Link>

                    <button onClick={() => setToggleSidebar(!toggleSidebar)} type="button" className="relative inline-flex items-center p-2 ml-14 text-sm text-gray-500 rounded-xl xl:hidden  focus:outline-none focus:text-gray-800" aria-controls="mobile-menu-3" aria-expanded="false">
                        {toggleSidebar ? <VscClose size="24" /> : <AiOutlineMenu size="20" />}
                    </button>

                    <div className="hidden justify-between items-center w-full xl:flex xl:w-auto ">
                        <ul className="flex flex-col items-center mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium">
                            {
                                Navigation?.map(item => (
                                    <li key={Math.random()}>
                                        {
                                            item?.placeholder === 'Account' ? (
                                                <a href="https://login.focaltasker.com/login?state=hKFo2SBoR292NW1tNXAxdXlyUmU3X3dkWE5ZX2lQbDEzejZBcKFupWxvZ2luo3RpZNkgbEZST29wbl96MXc3SWpqWk5rN2JRSGdoOWplaFZhZm-jY2lk2SAxS2VvU0FIaExPcFRCajJSdUVaOG5uZnFiVU5XT3pSRQ&client=1KeoSAHhLOpTBj2RuEZ8nnfqbUNWOzRE&protocol=oauth2&scope=%22email%20openid%20profile%22&response_type=code&redirect_uri=https%3A%2F%2Fscript.cards%2Fapi%2Fauth%2Fcallback&nonce=hRE8aww-NAeGRH3m26QOaAmslPtwbqn4MmDyRKMOXHs&code_challenge=nzoa_hXwIn3vX7oT6FnYjnOWanylwABvtcTfSmuQwSQ&code_challenge_method=S256"> <span className={`text-lg cursor-pointer transition-all hover:text-primary ${item?.path === location?.pathname ? 'text-primary' : 'text-gray-900'}`}>
                                                    {item?.placeholder}
                                                </span></a>
                                            ) : (
                                                item?.placeholder === 'App' ? (
                                                    <a href="https://scriptcards.app/"> <span className={`text-lg cursor-pointer transition-all hover:text-primary ${item?.path === location?.pathname ? 'text-primary' : 'text-gray-900'}`}>
                                                        {item?.placeholder}
                                                    </span></a>
                                                ) : (
                                                    <Link to={item?.path}>
                                                        <span className={`text-lg cursor-pointer transition-all hover:text-primary ${item?.path === location?.pathname ? 'text-primary' : 'text-gray-900'}`}>
                                                            {item?.placeholder}
                                                        </span>
                                                    </Link>
                                                )
                                            )
                                        }
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <div className='hidden xl:block'>
                        <a href="https://login.focaltasker.com/login?state=hKFo2SBXbVhuX09vV0YwX0h3OVEwOUx0bzlMd1k0Tkc2TGppZ6FupWxvZ2luo3RpZNkgc1VPTjA5aHg1Sk5wd0djTG1tTnFJUWgzVjgwUUZaOFqjY2lk2SAxS2VvU0FIaExPcFRCajJSdUVaOG5uZnFiVU5XT3pSRQ&client=1KeoSAHhLOpTBj2RuEZ8nnfqbUNWOzRE&protocol=oauth2&scope=%22email%20openid%20profile%22&response_type=code&redirect_uri=https%3A%2F%2Fscript.cards%2Fapi%2Fauth%2Fcallback&nonce=lq5O5ytO5zITZKJW8Ae1kuG7GHJxc7LKRpy7UpNK-js&code_challenge=CnGiu35t4brqYxENz8ULLbq_9JWDCTfLRL0HpdZyHxI&code_challenge_method=S256"> <button className="bg-primary text-white px-32 py-10 rounded-full transition-all hover:bg-green-600 relative top-0 hover:top-px" >Get Started</button> </a>
                    </div>

                    <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />

                </main>
            </nav>
        </>

    )
}

export default Navbar;
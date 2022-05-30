import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { BsDiscord, BsSignal } from "react-icons/bs";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const location = useLocation();
    const Navigation = [{ placeholder: 'Product', path: '/' }, { placeholder: 'Our Story', path: '/our-story' }, { placeholder: 'Pricing', path: '/pricing' }, { placeholder: 'Account', path: '/account' }, { placeholder: 'App', path: '/app' }]

    useEffect(() => {
        const body = document?.querySelector('body');
        toggleSidebar ? body?.classList?.add('overflow-hidden') : body?.classList?.remove('overflow-hidden')
    }, [toggleSidebar])

    return (
        <>
            <main className={`fixed bottom-0 right-0 left-0 z-10 transition-all ${toggleSidebar ? 'sidebar-container' : 'bg-transparent pointer-events-none'}`} style={{ marginLeft: '0px', top: '4.4rem' }}>
                <aside className={`${toggleSidebar ? 'sidebar-open' : 'sidebar-close'} flex justify-between flex-col`}>
                    <ul className="flex pt-40 flex-col items-center mt-4 ">
                        {
                            Navigation?.map(item => (
                                <li key={Math.random()} className='mb-12' onClick={() => setToggleSidebar(false)}>
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

                    <section className='gGngoX'>
                        <a href="https://login.focaltasker.com/login?state=hKFo2SBXbVhuX09vV0YwX0h3OVEwOUx0bzlMd1k0Tkc2TGppZ6FupWxvZ2luo3RpZNkgc1VPTjA5aHg1Sk5wd0djTG1tTnFJUWgzVjgwUUZaOFqjY2lk2SAxS2VvU0FIaExPcFRCajJSdUVaOG5uZnFiVU5XT3pSRQ&client=1KeoSAHhLOpTBj2RuEZ8nnfqbUNWOzRE&protocol=oauth2&scope=%22email%20openid%20profile%22&response_type=code&redirect_uri=https%3A%2F%2Fscript.cards%2Fapi%2Fauth%2Fcallback&nonce=lq5O5ytO5zITZKJW8Ae1kuG7GHJxc7LKRpy7UpNK-js&code_challenge=CnGiu35t4brqYxENz8ULLbq_9JWDCTfLRL0HpdZyHxI&code_challenge_method=S256"> <button onClick={() => setToggleSidebar(false)} className="bg-primary text-white w-full px-32 py-10 mb-24 rounded-full transition-all hover:bg-green-600 relative top-0 hover:top-px" >Get Started</button> </a>

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

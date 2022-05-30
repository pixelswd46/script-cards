const PricingCard = ({ item }) => {

    return (

        <div className="my-18 px-14 w-full md:w-1/2 lg:my-24 lg:px-14 lg:w-1/3">
            <article className="py-26 px-20 rounded-lg custom-shadow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-14 block lg:text-18 font-bold text-black">{item?.title}</h3>
                    <img className="w-20" src={`/assets/pricing-icons/${item?.icon}`} alt="" />
                </div>
                <h6 className="text-sm text-gray-800"> White Labelled for you </h6>

                <h3 className="text-32 font-semibold text-black mt-26">{item?.price} <sub className='text-16 text-gray-500 font-normal relative bottom-1'>{item?.package_time}</sub> </h3>

                <ul className='relative circled-list text-gray-800 mt-26 h-auto md:h-126'>
                    {
                        item?.lists?.map(list => (
                            <li>{list}</li>
                        ))
                    }
                </ul>

                <a href="https://login.focaltasker.com/login?state=hKFo2SBOSmNaOFlWRVpTNk9WbGJpOElxT1BTWndmZXlpSGNvVaFupWxvZ2luo3RpZNkgaW83LXRSdzFZVHM4ZFdTblpWU2pGQm05YUNHelhsZnCjY2lk2SAxS2VvU0FIaExPcFRCajJSdUVaOG5uZnFiVU5XT3pSRQ&client=1KeoSAHhLOpTBj2RuEZ8nnfqbUNWOzRE&protocol=oauth2&scope=%22email%20openid%20profile%22&response_type=code&redirect_uri=https%3A%2F%2Fscript.cards%2Fapi%2Fauth%2Fcallback&nonce=NwF9QBmby0jFERpe9ZKEC993e6rUKaK3pvCilqDZ_c4&code_challenge=yu1i5cj0L3ypFxJr6hQZuZElqEn1ogijTVvRTvEb_Sg&code_challenge_method=S256"> <button className={`text-white w-full px-32 py-10 rounded-full transition-all mt-22 relative top-0 hover:top-px ${item?.title === 'Premium Plan' ? 'bg-primary hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-900'}`} >Get Started</button> </a>
            </article>
        </div>

    )
}

export default PricingCard;
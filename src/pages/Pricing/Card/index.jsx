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

                <ul className='relative circled-list text-gray-800 mt-26'>
                    <li>Unlimited printing</li>
                    <li>Pharmacy branding</li>
                    <li>GST included</li>
                </ul>

                <button className={`text-white w-full px-32 py-10 rounded-full transition-all mt-32 relative top-0 hover:top-px ${item?.title === 'Premium Plan' ? 'bg-primary hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-900'}`} >Get Started</button>
            </article>
        </div>

    )
}

export default PricingCard;

const Header = ({ children, icon }) => {

    return (
        <main className="container mx-auto px-24 lg:px-99 mb-99">
            <section className="w-full 2xl:w-2/3 mx-auto text-center">
                <h3 className="text-38 lg:text-55 font-semibold mb-14 text-black leading-44 lg:leading-58">Scan a drug barcode and print <span className='text-primary'> evidence-based, literacy-sensitive,  
patient-facing </span> information. Fast.  </h3>
                <p className="mt-4 text-18 text-gray-500">ScriptCards is novel Patient Educational Material Library that prints patient education tools efficiently without any friction.</p>
                <p className="font-medium text-18 text-gray-700 mt-10">It is BLAZING fast and is powered by Proprietary Technology developed in Australia.</p>

                <section className="flex items-start justify-center flex-col lg:flex-row gap-8 mt-99">
                    <div className="w-full flex justify-center lg:justify-end mb-42">
                        <img className="border-16 border-gray-100" src="/assets/brochure-1.png" alt="" />
                    </div>                    
                    <div className="w-full flex justify-center lg:justify-start mb-42">                 
                        <img className="border-16 border-gray-100" src="/assets/brochure-2.png" alt="" />
                    </div>                    
                </section>
                <hr className="w-240 mx-auto mt-99" />
            </section>
        </main>
    )
}

export default Header;
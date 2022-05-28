import { HiSpeakerphone } from "react-icons/hi";

const Header = ({ children, icon }) => {

    return (
        <main className="container mx-auto px-24 lg:px-99 pb-99 mb-99">
            <section className="w-full 2xl:w-2/3 mx-auto text-center">
                <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">ScriptCards is a <span className='text-primary'> Powerful </span> patient education tool for <span className='text-primary'> Pharmacists </span>.</h3>
                <p className="mt-4 text-18 text-gray-500">It is a Drug Information Management and Printing System (DIMPS) that takes a drug barcode as single input on a web app and prints evidence-based patient-facing information locally.</p>
                <p className="mt-4 font-medium text-18 text-gray-700">It is BLAZING fast and is powered by Proprietary Technology developed in Australia.</p>

                <section className="flex items-start justify-center flex-col lg:flex-row gap-6 mt-99">
                    <div className="w-full flex justify-center mb-42">
                        <img src="/assets/brochure-1.png" alt="" /></div>                    
                    <div className="w-full flex justify-center mb-42">                 
                        <img src="/assets/brochure-2.png" alt="" /></div>                    
                </section>
                <hr className="w-240 mx-auto mt-99" />
            </section>
        </main>
    )
}

export default Header;
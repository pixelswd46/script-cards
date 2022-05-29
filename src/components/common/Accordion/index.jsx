import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Accordion = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <section className="mb-24">
                <div onClick={() => setToggle(!toggle)} className={`flex justify-between items-center gap-12 cursor-pointer transition-all w-full bg-gray-50 hover:bg-gray-200 rounded-5 py-18 px-24 ${toggle && 'bg-gray-200'}`}>
                    <p className="text-16 md:text-18 text-gray-800"> What is a Payment Gateway? </p>
                    {toggle ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>

                {
                    toggle && (
                        <section>
                            <div className="bg-gray-50 text-14 text-gray-600 rounded-br-5 rounded-bl-5 py-18 px-24">
                                {children}
                            </div>
                        </section>
                    )
                }

            </section>
        </>
    )
}


export default Accordion;
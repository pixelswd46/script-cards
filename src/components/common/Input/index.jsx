import { BsAsterisk } from "react-icons/bs";

const Input = ({ label, type, required, className, placeholder, startAdorment }) => {
    return (
        <section>
            {label && (<> <label className="text-gray-800 font-medium flex items-start gap-1 mb-6" htmlFor="#">{label}{required && <BsAsterisk className="text-8 text-red-600 relative top-1" />}</label> </>)}
            <section className="relative">
                <span className="absolute top-2/4 left-2 -translate-y-2/4 text-gray-500">
                    {startAdorment}
                </span>
                <input autoComplete="off" type="text" className={`w-full h-44 py-18 text-14 pr-16 transition-all ${startAdorment ? 'pl-32' : 'pl-16'} ${className}`} placeholder={placeholder} />
            </section>
        </section>
    )
}

export default Input;
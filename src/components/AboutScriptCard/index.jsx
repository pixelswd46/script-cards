
const AboutScriptCard = ({ children, icon }) => {

    return (
        <main className="container mx-auto px-24 lg:px-99 my-99">
            <section className={`flex items-center gap-6 ${icon == 'speaker' && 'flex-row-reverse'}`}>
                <div className={`w-full mb-32 xl:mb-10} ${icon == 'speaker' && 'text-right'}`}>
                    {children}
                </div>
                <div className="hidden w-full xl:w-2/3 xl:flex justify-center items-center">
                    <div className='h-240 w-240 rounded-50 icon-shadow'>
                        <div className="text-gray-400 relative -top-10 -right-16 w-5/6 -rotate-45">
                            <img src="/assets/star.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <hr className="w-240 mx-auto mt-28" />
        </main>
    )
}

export default AboutScriptCard;
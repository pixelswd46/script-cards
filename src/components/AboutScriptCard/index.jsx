
const AboutScriptCard = ({ children, icon }) => {

    return (
        <main className="container mx-auto px-24 lg:px-99 my-99">
            <section className={`flex items-center gap-6 ${icon === 'speaker' && 'flex-row-reverse'}`}>
                <div className={`w-full mb-32 xl:mb-10} ${icon === 'speaker' && 'text-right'}`}>
                    {children}
                </div>
              
            </section>
            <hr className="w-240 mx-auto mt-100" />
        </main>
    )
}

export default AboutScriptCard;
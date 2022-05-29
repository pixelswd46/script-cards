import Header from "../../components/Header";
import AboutScriptCard from "../../components/AboutScriptCard"

function Home() {
    return (
        <>
            <div className="mt-99"></div>
            <Header />

            <AboutScriptCard icon="chain">
                <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Help improve <span className='text-primary'> medication adherence </span> through patient knowledge.</h3>
                <p className="mt-4 text-18 text-gray-500 pr-0 lg:pr-112">Patient education is a critical component of effective care. Pharmacists bear the responsibility for educating patients on the importance of their medication therapies and the necessity of adherence. And that's where we come in. #ScriptCards</p>
            </AboutScriptCard>

            <AboutScriptCard icon="speaker">
                <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Getting the voice and tonality right is <span className='text-primary'> critical </span> for patient-facing content.</h3>
                <p className="mt-4 text-18 text-gray-500 pl-0 lg:pl-112">Our explicit goal is to create good quality content that helps educate users about their treatment and allow this information to be printed efficiently without any friction.</p>
            </AboutScriptCard>

            <AboutScriptCard icon="star">
                <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Pharmacy managers can use this tool to ensure  <span className='text-primary'> provision </span> of quality pharmaceutical care is maintained.</h3>
                <p className="mt-4 text-18 text-gray-500 pr-0 lg:pr-112">Monitor usage so you know how your team is providing value to your patient.</p>
            </AboutScriptCard>

            <main className="container mx-auto px-24 lg:px-99 pb-99 mb-99">
            <section className="w-full 2xl:w-2/3 mx-auto text-center">
                <h3 className="text-38 lg:text-56 font-semibold mb-99 text-black leading-44 lg:leading-58">Printing a ScriptCard involves <span className="text-primary"> ONE </span> step... a simple scanning of a product barcode.</h3>
                <img src="/assets/flow-chart.png" alt="" />
            </section>
        </main>

        </>
    );
}

export default Home;

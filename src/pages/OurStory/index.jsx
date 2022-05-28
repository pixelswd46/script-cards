

function OurStory() {
  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto text-center">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58"><span className="text-primary"> Studies </span> have shown that patients forget up to 80% of what their doctors tell them during appointments. The same will apply to drug information!</h3>
          <hr className="w-240 mx-auto mt-99" />
        </section>

        <div className="text-center mt-99">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Our Story</h3>
          <p className="mt-4 text-18 text-gray-500">In September 2018, while having dinner at a local Chinese restaurant, we discussed the different work inefficiencies. It was our monthly pain points analysis meeting. The food was excellent like always. Amid the clickety-click of chopsticks, one of the things we were talking about was the number of clicks required to print one CMI. The printed document had a lot of information which could be overwhelming for the reader. It also took roughly 15-20 seconds for the printer to warm up!
            <br /><br />
            The conversation started becoming more exciting and animated because we began to define our pain points. Having listed the explicit points, it became easier for us to design an efficient system we thought would set us apart and help us be part of the value-based healthcare movement.</p>

          <hr className="w-240 mx-auto mt-99" />
        </div>

        <div className="mt-99">
          <h3 className="text-38 lg:text-56 font-semibold mb-42 text-black leading-44 lg:leading-58">We did some <span className="text-primary"> Qualitative Research </span> and came up with a list of pain points we wanted to address. We have listed most of them below.</h3>

          <QualitativeResearchList>
            1. Print the patient education material BUT without any clicks.
          </QualitativeResearchList>

          <QualitativeResearchList>
            2. Waiting for the printer to warm up... NO WAY.
          </QualitativeResearchList>

          <QualitativeResearchList>
            3. Passwordless Login. YES PLEASE!
          </QualitativeResearchList>

          <QualitativeResearchList>
            4. The system and printing process should be as easy as falling off a log. OK.
          </QualitativeResearchList>
        </div>
      </main>
    </>
  );
}

export default OurStory;


const QualitativeResearchList = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 rounded-5 py-18 px-24 mb-16">
      <p className="text-16 md:text-18 text-gray-800"> {children} </p>
    </div>
  )
}
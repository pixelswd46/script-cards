import { useState } from 'react';

function OurStory() {
  const [showless, setShowless] = useState(true)

  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto text-center">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58"><span className="text-primary"> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC539473/" target="_blank" rel="noreferrer"> Studies </a>  </span> have shown that patients forget up to 80% of what their doctors tell them during appointments. The same will apply to drug information!</h3>
          <hr className="w-240 mx-auto mt-99" />
        </section>

        <div className="text-center mt-99">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Our Story</h3>
          <p className="mt-4 text-18 text-gray-500">In September 2018, while having dinner at a local Chinese restaurant, we discussed the different work inefficiencies. It was our monthly pain points analysis meeting. The food was excellent like always. Amid the clickety-click of chopsticks, one of the things we were talking about was the number of clicks required to print one CMI. The printed document had a lot of information which could be overwhelming for the reader. It also took roughly 15-20 seconds for the printer to warm up!
            <br /><br />
            The conversation started becoming more exciting and animated because we began to define our pain points. Having listed the explicit points, it became easier for us to design an efficient system we thought would set us apart and help us be part of the value-based healthcare movement.</p>
          {showless && (
            <div>
              <p className="mt-4 text-18 text-gray-500">
                It was the early beginning of "the card", which we later renamed "ScriptCards".
                <br /><br />
                We were tired of saved logins and mouse clicks and wanted the system to print without any mouse or keyboard inputs. As impossible as it sounds, we achieved this by causing a document to be generated on the fly and automatically print when a drug barcode is scanned.
                <br /><br />
                We designed it to be a platform that allows pharmacists to manage patient-facing drug information or advice content and force peer review before it is available for printing.
                <br /><br />
                While ScriptCards officially took flight in June 2021, we have been building the product for the past two and a bit years.
                <br /><br />
                A meaningful patient engagement at the pharmacist-patient interface must be a core priority for pharmacists that want to be valued by their community. We think ScriptCards will help you enhance your service, decrease liability and most importantly, increase the patient safety posture of your pharmacy.
              </p> </div>
          )}

          <span onClick={() => setShowless(!showless)} className="block mx-auto my-24 text-primary font-semibold cursor-pointer transition-all hover:text-green-600">Read {showless ? 'less' : 'more'}</span>

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

          <QualitativeResearchList>
            5. Different pharmacists, different levels of workload and various levels of interaction with patients. NO PROBLEM! Every patient leaving the pharmacy gets the same evidence-based information in a printed form.
          </QualitativeResearchList>

          <QualitativeResearchList>
            6. The printer should hold enough media, so we do not need to refill often. PERFECT. Time is money, remember!
          </QualitativeResearchList>

          <QualitativeResearchList>
            7. The card should educate the patient regarding their medications. DEFINITELY. The information on the printed material should be a counselling tool and have information on all the points a pharmacist would be interested in while counselling a patient. It should be concise, evidence-based and referenced patient-facing content.
          </QualitativeResearchList>

          <QualitativeResearchList>
            8. The card needs to survive a couple of washing machine cycles and still be legible. WHY NOT!
          </QualitativeResearchList>

          <QualitativeResearchList>
            9. Able to print information about S2 and S3 products. AMAZING!
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
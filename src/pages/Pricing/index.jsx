import { useState } from 'react';
import PricingCard from './Card'

function OurStory() {

  const PricingCards = ["Standard Plan", "Premium Plan", "Enterprise Plan"]

  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto text-center">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Pricing Plans</h3>
          <p className="mt-4 text-18 text-gray-500">ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.</p>
        </section>

        <div className="text-center mt-99">

          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              PricingCards?.map(item => (
                <PricingCard item={item} />
              ))
            }
          </div>

          <p className="mt-4 text-left text-14 px-14 text-gray-600">* Requires a ZEBRA Thermal Transfer Printer with a roll of cards and a genuine zebra ribbon to be purchased separately in addition to the monthly subscription. Current pricing is introductory and subject to change without notice for new subscribers.</p>

          <hr className="w-240 mx-auto mt-99" />
        </div>

        <div className="mt-99">
          <h3 className="text-38 lg:text-56 font-semibold mb-42 text-black leading-44 lg:leading-58 text-center">Frequently Asked Questions</h3>
          <p className="mt-4 text-18 text-gray-500 mb-62 px-0 md:px-24 lg:px-99 text-center">ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.</p>

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
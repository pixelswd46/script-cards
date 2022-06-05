import { useState } from 'react';
import Accordion from '../../components/common/Accordion'
import PricingCard from './Card'

function Pricing() {
  const [toggle, setToggle] = useState('monthly');
  const PricingCards = [{ title: "Standard Plan", icon: '1.png', price: toggle === 'monthly' ? '$69.99' : '$49.99', package_time: toggle === 'monthly' ? '/Month' : '/Yearly', lists: ['Unlimited printing', 'Pharmacy branding', 'GST included'] }, { title: "Premium Plan", icon: '2.png', price: toggle === 'monthly' ? '$89.99' : '$69.99', package_time: toggle === 'monthly' ? '/Month' : '/Yearly', lists: ['Everything in standard plan', 'Remove ScriptCards Branding',]  }, { title: "Enterprise Plan", icon: '3.png', price: 'Get in touch.', lists: ['Customisation', 'Private ScriptCards', 'Postcode lock for new signups', 'Banner advertisements on back']  }]

  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto text-center">
          <h3 className="text-38 lg:text-56 font-semibold mb-14 text-black leading-44 lg:leading-58">Pricing Plans</h3>
          <p className="mt-4 text-18 text-gray-500">ScriptCards is a successful patient education strategy that drives patient activation. An activated patient is more likely to value your service within the community.</p>
        </section>

        <div className="mt-99">

          <section className='w-full flex justify-center mb-62'>
            <div className='relative plan-container text-14 px-2'>
              <div className={`absolute plan-switch transition-all ${toggle === 'monthly' ? 'left-1' : 'right-1'}`}></div>
              <h4 onClick={() => setToggle('monthly')} className={`font-medium cursor-pointer ${toggle === 'monthly' && 'text-white'}`}>Monthly Billing</h4>
              <h4 onClick={() => setToggle('yearly')} className={`font-medium cursor-pointer ${toggle === 'monthly' && 'text-white'}`}>Yearly Billing </h4>
            </div>
          </section>

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

          <Accordion title="What is ScriptCards">
            ScriptCards is a web-based platform that allows pharmacists to scan a medication barcode and print patient-facing information very quickly. The information is evidence-based, it is important information, information on how to use the medication and pharmacist counselling points. It is beautifully designed, fast and focuses on patient safety by sharing the motto, "educate before you medicate". The only user input is scanning a barcode. We are really sorry but we killed the printer dialog box!
          </Accordion>

          <Accordion title="I am sold, how do I signup?">
            Signup does not take long, roughly 60 seconds. You will need to decide on your plan and whether you would like to pay monthly or annually. Using this information, checkout using the button below the pricing plan. Once you have entered your credit card details and hit enter, we will hopefully receive a notification that will trigger some activity on our end.
          </Accordion>

          <Accordion title="What happens after I sign up?">
            Once we approve your login, you will receive an email with instructions to verify your email and set a password. This will give you access to our web app. Once logged in, you will need to purchase your printer and consumables which will get shipped the same day if an order is placed before 10 am provided the printers are in stock at our warehouse. Once you receive your printer, we will make an onboarding call and help you set up the printer. Once the printer is set up, it takes us only a few clicks to get the system running.
          </Accordion>

          <Accordion title="Can I use ScriptCards without an internet connection?">
            Nah! there’s no “offline mode” with ScriptCards. It’s designed to work only with an internet connection, which allows you to scan the barcode on a web app and then our servers speak with your printer.
          </Accordion>

          <Accordion title="How many cups of coffee have we had?">
            Honestly, we do not know. We never thought we should track this metric and even if we did, we prefer not to reveal too much about our productivity secrets! On another note, in a study conducted by the Harvard School of Public Health, women who drink more coffee are less likely to be clinically diagnosed with depression. It mentions in the comments that the risk of depression decreased in a dose-dependent manner with increasing consumption of caffeinated coffee but then another study published in the American Journal of Clinical Nutrition concludes that, heavy coffee consumption (6 cups) was associated with a modest increase in CVD risk.
            <br /><br />
            Lucas, M. (2011) "Coffee, Caffeine, and Risk of Depression Among Women",Archives of Internal Medicine, 171(17), p. 1571. doi: 10.1001/archinternmed.2011.393.
            <br /><br />
            Zhou, A. and Hyppönen, E., 2019. Long-term coffee consumption, caffeine metabolism genetics, and risk of cardiovascular disease: a prospective analysis of up to 347,077 individuals and 8368 cases.The American Journal of Clinical Nutrition, [online] 109(3), pp.509–516.
          </Accordion>

        </div>
      </main>
    </>
  );
}

export default Pricing;
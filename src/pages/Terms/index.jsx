import {Link} from 'react-router-dom'

function Terms() {
  return (
    <>
      <main className="container mx-auto px-24 lg:px-99 pb-99 my-99">
        <section className="w-full 2xl:w-2/3 mx-auto">
          <h3 className="text-38 lg:text-56 font-semibold mb-18 text-black leading-44 lg:leading-58 text-center">Terms & Conditions</h3>
          <p className="mt-4 text-18 text-gray-500 text-center">eSquad Technologies Pty Ltd Terms of Service</p>
        </section>

        <div className="mt-82">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">1. Terms</h3>
          <p className="mt-4 text-16 text-gray-500">By accessing the website at <Link to="/"> <span className="text-primary cursor-pointer transition-all hover:text-green-600 hover:underline"> https://script.cards</span> </Link> , you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">2. Use License</h3>
          <p className="mt-4 text-16 text-gray-500">Permission is granted to temporarily download one copy of the materials (information or software) on eSquad Technologies Pty Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: <br />
            modify or copy the materials; <br />
            use the materials for any commercial purpose, or for any public display (commercial or non-commercial); <br />
            attempt to decompile or reverse engineer any software contained on eSquad Technologies Pty Ltd's website; <br />
            remove any copyright or other proprietary notations from the materials; or
            transfer the materials to another person or "mirror" the materials on any other server. <br />
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by eSquad Technologies Pty Ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">3. Disclaimer</h3>
          <p className="mt-4 text-16 text-gray-500">The materials on eSquad Technologies Pty Ltd's website are provided on an 'as is' basis. eSquad Technologies Pty Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.<br />
            Further, eSquad Technologies Pty Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">4. Limitations</h3>
          <p className="mt-4 text-16 text-gray-500">In no event shall eSquad Technologies Pty Ltd or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on eSquad Technologies Pty Ltd's website, even if eSquad Technologies Pty Ltd or a eSquad Technologies Pty Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">5. Accuracy of materials</h3>
          <p className="mt-4 text-16 text-gray-500">The materials appearing on eSquad Technologies Pty Ltd's website could include technical, typographical, or photographic errors. eSquad Technologies Pty Ltd does not warrant that any of the materials on its website are accurate, complete or current. eSquad Technologies Pty Ltd may make changes to the materials contained on its website at any time without notice. However eSquad Technologies Pty Ltd does not make any commitment to update the materials.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">6. Links</h3>
          <p className="mt-4 text-16 text-gray-500">eSquad Technologies Pty Ltd has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by eSquad Technologies Pty Ltd of the site. Use of any such linked website is at the user's own risk.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">7. Modifications</h3>
          <p className="mt-4 text-16 text-gray-500">eSquad Technologies Pty Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        </div>

        <div className="mt-32">
          <h3 className="text-26 lg:text-34 font-semibold mb-14 text-black leading-44 lg:leading-58">8. Governing Law</h3>
          <p className="mt-4 text-16 text-gray-500">These terms and conditions are governed by and construed in accordance with the laws of NSW and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>

      </main>
    </>
  );
}

export default Terms;


import Input from "../../components/common/Input";

function ContactUs() {
  return (
    <>

      <main className='auth-container max-w-md mx-auto my-99'>
        <img className="w-183 mb-24 mx-auto" src="/assets/script-cards.svg" alt="" />
        <div className='w-full'>
          <Input
            placeholder='Full Name'
            className='mb-16'
          />
          <Input
            placeholder='Email'
            className='mb-16'
          />
          <textarea className="w-full text-14 mb-16 p-18" placeholder="Drop your message here" rows="10"></textarea>
        </div>
        <button className="bg-primary text-white w-full mb-18 px-32 py-10 rounded-5 transition-all hover:bg-green-600 relative top-0 hover:top-px">Submit</button>
      </main>

    </>
  );
}

export default ContactUs;

import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const UserAuthScreens = () => {

    const [authScreen, setAuthScreen] = useState('SignUp')

    return (
        <>

            <section className="container mx-auto px-24 lg:px-99 my-99">

                {
                    authScreen === 'SignUp' ? <SignUp setAuthScreen={setAuthScreen} /> : <SignIn setAuthScreen={setAuthScreen} />
                }

            </section>
        </>
    )
}

export default UserAuthScreens;
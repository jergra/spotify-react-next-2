import {getProviders, signIn, useSession, signOut} from 'next-auth/react'

function Login({providers}) {
    
    //const {data: session, status} = useSession()
    // if (status == 'authenticated') {
    //     signOut()
    // }

    //console.log("session in login:", session)
    //onsole.log('status in login:', status)
    
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
            <img className='mb-5 w-52' src='https://links.papareact.com/9xl' alt='' />

            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button 
                        className='bg-[#18D860] text-white p-5 rounded-lg'
                        onClick={() => signIn(provider.id, {callbackUrl: '/'})}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}

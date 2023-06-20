"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


// const[] = useState();
// const[] = useEffect()
const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-3'>


            <Link href="/" className='flex font-bold text-xl gap-2 flex-center'>
                <Image
                    className='object-obtain'
                    src="/assets/images/logo.png"
                    width={30}
                    height={30}
                    alt='logo'
                />
                <p className='logo-text'>Course Connect</p>
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href="/create" className='black_btn'>
                            Add Course
                        </Link>

                        <button type='button'
                            onClick={signOut}
                            className='outline_btn'
                        >
                            Sign Out
                        </button>

                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.png"
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Objects.values(providers.map((provider) => {
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className='black_btn'>
                                SignIn
                            </button>
                        }

                        ))

                        }
                    </>
                )}
            </div>



            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (
                    <div className=''>
                        <Image
                            src="/assets/images/logo.png"
                            width={37}
                            height={37}
                            className='rounded-full'
                            alt='profile'
                            onClick={() => { }}
                        />
                    </div>) : (<>
                        {providers && Objects.values(providers.map((provider) => {
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className='black_btn'>
                                SignIn
                            </button>
                        }

                        ))

                        }
                    </>)
                }
            </div>
        </nav>
    )
}

export default Nav
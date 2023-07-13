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

    const [toggleDropdown, setToggleDropdown] = useState(false);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setProviders();
    }, [])


    return (
        <nav className='flex-between w-full mb-16 pt-3'>


            <Link href="/" className='flex items-center font-bold text-xl gap-2'>
                <Image
                    className='object-obtain'
                    src="/assets/images/logo.svg"
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
                                src="/assets/images/logo.svg"
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
                    <div className='flex'>
                        <Image
                            className='object-obtain'
                            src="/assets/images/logo.svg"
                            width={35}
                            height={35}
                            alt='profile'
                            onClick={() => setToggleDropdown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className='dropdown'>
                                <Link href="profile" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>

                                <Link href="create" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                    Add course
                                </Link>
                                <button type='button' className='mt-5 w-full black_btn' onClick={() => { setToggleDropdown(false); signOut(); }}>
                                    Sign Out
                                </button>
                            </div>
                        )
                        }
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

                        }</>
                )}
            </div>
        </nav>
    )
}

export default Nav
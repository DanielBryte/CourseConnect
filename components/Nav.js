"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    const [toggleDropdown, setToggleDropdown] = useState(false);
    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])


    return (
        <header className='app'>
            <nav className=' flex-between w-full py-6'>
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
                    {session?.user ? (
                        <div className='flex gap-3 md:gap-5'>
                            <Link href="/add-resource" className='btn'>
                                Add Resource
                            </Link>

                            <button type='button'
                                onClick={signOut}
                                className='outline_btn'
                            >
                                Sign Out
                            </button>

                            <Link href="/profile">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className='rounded-full'
                                    alt='profile'
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='btn'>
                                    Log In
                                </button>

                            ))

                            }
                        </>
                    )}
                </div>



                {/* Mobile Navigation */}

                <div className='sm:hidden flex relative'>
                    {session?.user ? (
                        <div className='flex'>
                            <Image
                                className='object-obtain border rounded-full border-primary p-1'
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

                                    <Link href="/add-resource" className='dropdown_link' onClick={() => setToggleDropdown(false)}>
                                        Add Resource
                                    </Link>
                                    <button type='button' className='mt-5 w-full btn' onClick={() => { setToggleDropdown(false); signOut(); }}>
                                        Sign Out
                                    </button>
                                </div>
                            )
                            }
                        </div>
                    ) : (
                        <>
                            {providers && Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='btn'>
                                    Log In
                                </button>

                            ))

                            }</>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Nav
import React from 'react'
import MaxWidthWraper from './MaxWidthWraper'
import { Icons } from './Icons'
import NavItems from './NavItems'
import Cart from './Cart'



const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white'>
            <MaxWidthWraper>
                <div className='border-b border-gray-200'>
                    <div className='flex h-16 items-center'>
                        {/* Logo */}
                        <div className='ml-4 flex lg:ml-0'>
                            <Icons.logo className='w-10 h-10'/>
                            {/* Navbar */}
                        </div>
                        {/* NavLinks */}
                        <div className='hidden z-50 lg:ml-8 lg:block lg:self-center'>
                            <NavItems/>
                        </div>
                        {/* buttons */}

                        <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                            <button variant="ghost">Sign In</button>
                            <span className='h-6 w-px bg-gray-200'/>

                            <button variant="ghost">Create Account</button>
                            <span className='h-6 w-px bg-gray-200'/>

                            <div className='flex lg:ml-6'>
                                <span className='h-6 w-px bg-gray-200'>
                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart/>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </MaxWidthWraper>

        </header>
      
    </div>
  )
}

export default Navbar

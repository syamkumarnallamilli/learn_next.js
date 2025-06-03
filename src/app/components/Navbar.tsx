'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname=usePathname()
  const isActive=(path:string): boolean=>pathname===path || pathname.startsWith(path + '/');
  const Linkclass=(path:string):string=>
    `hover:text-blue-600 ${isActive(path) ? 'font-bold text-blue-600' : 'text-gray-800' }`
  
  return (
    <div className='p-3 '>
      {/* <span>{pathname}</span> */}
        <nav className='  p-4 bg-gray-100 flex space-x-8 justify-center shadow-lg'>
            <Link href='/header/about' className={Linkclass('/about')}>About</Link>
            <Link href='/header/profile' className={Linkclass('/profile')}>Profile</Link>
            <Link href="/blog" className={Linkclass('/blog')}>Blog</Link>
            <Link href='/products' className={Linkclass('/products')}>Products</Link>
            <Link href='/header/contact' className={Linkclass('/contact')}>Contact</Link>

        </nav>
        </div>
    
  )
}

export default Navbar




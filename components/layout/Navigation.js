import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navigation() {
  const currentRoute = usePathname()
  return (
    <div className='lg:flex lg:bg-gray-100/50 mb-6'>
        <ul className='container flex flex-col lg:flex-row lg:gap-x-8 justify-center lg:items-center lg:py-4'>
            <li><Link className={`${currentRoute === '/' ? 'active' : ''}`} href={'/'}>همه</Link></li>
            <li><Link href={''}>محصولات</Link></li>
            <li><Link href={''}>وبلاگ</Link></li>
            <li><Link href={''}>درباره ما</Link></li>
            <li><Link href={''}>تماس با ما</Link></li>
        </ul>
    </div>
  )
}

export default Navigation
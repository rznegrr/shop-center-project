import React from 'react'
import Link from 'next/link'

function Navigation() {
  return (
    <div className='hidden lg:block bg-gray-100/50 mb-6'>
        <ul className='container flex gap-x-6 justify-center items-center py-4'>
            <li><Link href={''}>همه</Link></li>
            <li><Link href={''}>محصولات</Link></li>
            <li><Link href={''}>وبلاگ</Link></li>
            <li><Link href={''}>درباره با ما</Link></li>
            <li><Link href={''}>تماس با ما</Link></li>
        </ul>
    </div>
  )
}

export default Navigation
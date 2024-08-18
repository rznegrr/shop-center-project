import React from 'react'

function Banner() {
  return (
    <div className='grid grid-cols-2 xl:grid-cols-4 gap-x-3 gap-y-3 container pb-0 pt-8 md:py-8 place-items-center'>
        <img src={'./images/banner4.gif'} className='h-40 md:h-64 w-80 rounded-3xl'></img>
        <img src={'./images/banner1.png'} className='h-40 md:h-64 w-80 rounded-3xl'></img>
        <img src={'./images/banner2.gif'} className='h-40 md:h-64 w-80 rounded-3xl'></img>
        <img src={'./images/banner3.png'} className='h-40 md:h-64 w-80 rounded-3xl'></img>
    </div>
  )
}

export default Banner
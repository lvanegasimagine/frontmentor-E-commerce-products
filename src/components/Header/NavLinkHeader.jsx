import React from 'react'

export default ({text}) => {
  return (
    <a href="#" className='group py-8 relative'>
        <span className='group-hover:text-orange-primary'>{text}</span>
        <span className='absolute bottom-0 left-0 block h-2 w-full scale-x-0 transition-all duration-200 group-hover:bg-orange-primary group-hover:scale-x-100'></span>
    </a>
  )
}

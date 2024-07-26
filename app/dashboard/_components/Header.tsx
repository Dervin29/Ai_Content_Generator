import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className=' p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className=' flex gap-2 items-center p-2 rounded-md max-w-md bg-white '>
        <Search/>
        <input type="text" placeholder='Search' className='bg-transparent w-full outline-none' />
      </div>
      <hr className=' my-6 '/>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default Header
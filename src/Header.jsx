import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-[80px] text-[#fff] bg-[#180C61] flex text-3xl px-[10px] fixed'>
  <div className=' flex fixed left-2 text-center my-3 font-semibold'>
    <h1>BLOG</h1>
  </div>
  <div className='flex fixed right-[10px] text-center my-5 list-none mx-5 px-2 text-2xl '>
    <Link to={'./Blog'}><li className='mr-4 hover:text-[#5252C7] hover:bg-[#eee] rounded-2xl active:bg-violet-700  text-xl px-[22px]' >Blog</li></Link>
    <Link to={'./User'}><li className='mr-4 hover:text-[#5252C7] hover:bg-[#eee] rounded-2xl active:bg-violet-700  text-xl px-[22px]'>User</li></Link>
  </div>

    </div>
  )
}

export default Header
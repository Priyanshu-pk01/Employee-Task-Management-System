import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex justify-between '>
       <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold' >Priyanshu 👋</span></h1>
       <button className='bg-red-600 px-5 py-2 rounded-sm active:scale-95 hover:bg-red-700 text-white text-lg font-semibold ' >Log-out</button>
      
    </div>
  )
}

export default Header

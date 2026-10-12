import React, { useState } from 'react'

const Header = (props) => {
  const LogOutUser =()=>{
    localStorage.setItem('LoggInUser','')
    // window.location.reload()
     props.changeUser('')
  }
 


  return (
    <div className='text-white flex justify-between '>
       <h1 className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold' >employe 👋</span></h1>
       <button className='bg-red-600 px-5 py-2 rounded-sm active:scale-95 hover:bg-red-700 text-white text-lg font-semibold ' onClick={LogOutUser} >Log-out</button>
      
    </div>
  )
}

export default Header

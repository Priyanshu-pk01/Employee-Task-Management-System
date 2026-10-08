import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  


  const SubmitHandeler =(e)=>{
      e.preventDefault()
      console.log(`The Mail is:${email}`)
      console.log(`The Password is:${pass}`)

      setEmail("")
      setPass("")
      

    }
 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600  rounded-xl p-6 w-full max-w-md '>
          <form className='flex flex-col items-center justify-center p-6 ' onSubmit={(e)=>{SubmitHandeler(e)

            }}>
            <input value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} type='email' required  className="border-2 border-emerald-600 text-white  rounded-full px-6 py-2
             placeholder:text-gray-400 outline-none text-xl bg-transparent text-center w-full " placeholder='Enter Email ' />
            <input value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }} type='password' placeholder='Password'className='text-white  border-2 border-emerald-600  rounded-full  px-6 py-2
             placeholder:text-gray-400 outline-none text-xl bg-transparent m-5 text-center w-full '/>
            <button  type='submit'
             className=' text-white  rounded-full py-2 px-8 mt-7
             outline-none text-xl bg-emerald-600 w-full hover:bg-emerald-700 active:scale-95 placeholder:text-white ' >
              Log-in
              </button>


          </form>

        </div>
      
    </div>
  )
}

export default Login

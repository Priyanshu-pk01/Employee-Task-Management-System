import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [useData, setUseData] = useState(null)

 useEffect(() => {
     const {employees,admin}= getLocalStorage()
  setUseData({employees,admin})

 }, [])
 

  return (
    <div>
      <AuthContext value={useData}>
          {children}
      </AuthContext>
    
      
    </div>
  )
}

export default AuthProvider

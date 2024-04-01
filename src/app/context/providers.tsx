'use client'
import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
// Expecting a defaultValue, which is an anti-pattern
// @ts-ignore
export const UserContext = createContext<any>(null)


export const UserStore = (): {value:any, fullName:string, setFullName:Dispatch<SetStateAction<string>>} => {
  const value = useContext(UserContext)
  const [fullName, setFullName] = useState('Darryn Lee-warden')


  return {
    value,
    fullName,
    setFullName
  }
}

export const UserProvider: React.FC<any> = ({ children }) => {
  const store = UserStore
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

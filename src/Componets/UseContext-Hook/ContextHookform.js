import React from 'react'
import NaveContext from '../UseContext-Hook/NaveContext'
import LanguagesForm from '../UseContext-Hook/LanguagesForm'
import { useState } from 'react'
import LanguagesContext from '../UseContext-Hook/LanguagesContext'

export default function ContextHookform() {
    const [data,setdata] = useState('en')
  return (
    
    <LanguagesContext.Provider  value={{data,setdata}}>
      <NaveContext/>
      <LanguagesForm/>
    </LanguagesContext.Provider>
  )
}

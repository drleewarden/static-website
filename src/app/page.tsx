"use client"
// import Image from 'next/image'
import React, { useCallback } from 'react'
import { COMPANIES } from './services/allPlacesWorked'
import RECIPES from './services/recipes.json'
import { Heading } from './components/heading'

import { Jigsaw } from './modules/jigsaw'
import { AllRecords } from '.'
import { websiteStore } from './store/websites.store'


export default function Home() {
  const RECORD_TYPE = process.env.NEXT_PUBLIC_APP_TYPE ?? 'website'
  // const getRecord = (): AllRecords => RECORD_TYPE === 'recipes' ? RECIPES : COMPANIES
  const { listOfRecords } = websiteStore((state) => ({
    listOfRecords: state.listOfRecords,
}))
  const reset = () => {
    // setRecords(getRecord())
    debugger
  }



  const searchResults = (inputText: any) => {
    // const char = filterArr(COMPANIES, inputText)
    // console.log('char:', char)
    // setRecords(char)
  }

  // const searchCallback = useCallback((val: any) => {
  //   // searchResults(val)
  //   console.log('val:',val)
  // }, [])

  return (
    <main className="flex min-h-screen w-100 flex-col items-center justify-between">
      <Heading classN="cm-container" />
      <Jigsaw type={RECORD_TYPE && RECORD_TYPE} record={listOfRecords} />

    </main>
  )
}



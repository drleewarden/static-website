"use client"
import React, { useState, ReactNode, useCallback } from 'react'
import InputSelect from '../search'
import { COMPANIES } from '../../services/allPlacesWorked'
import { IRecipes, IRecords } from '@/app/'

import { TileContainer, Title } from './styles'
import { UserStore } from '../../context/providers'
import Nav from '../nav'
import styles from './Heading.module.scss'
import { websiteStore } from '@/app/store/websites.store'
import { Button } from './styles'

interface IJobs {
  dates: string
  technical: string
  name: string
  position: string
  description: string
  image: string
  colour: string
}

interface IProps {
  searchCallback?: (e:any) => {}
  children?: ReactNode
  classN?: string
  reset?: () => void
}

export const Heading: React.FC<IProps> = ({searchCallback, classN }: IProps) => {
  const { fullName } = UserStore()
  const [jobs, setJobs] = useState<IRecords[]>(COMPANIES)
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const { setActiveWebsite , setActiveList} = websiteStore((state) => ({
    setActiveWebsite: state.setActiveWebsite,
    setActiveList: state.setActiveList
  }))
  const dropdownAction = () => {
    setOpenDropdown(!openDropdown)
  }
  const filterArr = (arr: IRecords[], text: string) => {
    return arr.filter((item) => item.name && item.name.toLowerCase().includes(text))
  }
  // const searchCallback = useCallback((val: string) => {
  //   // searchResults(val)
  // }, [])
  const clear = () => {
    setActiveList(COMPANIES);
  }
  const searchResults = (inputText: string) => {

    const char = filterArr(jobs, inputText)
    setJobs(char)
    // searchCallback(inputText)
  }
  
  const handlerOnChange = useCallback(
    (changedState: IRecords) => {
      debugger
      setActiveWebsite(changedState)
    },
    [setActiveWebsite]
  )

  return (
    <div className="w-full">
        <div className={styles.heading + ' flex ' + classN}>
        <TileContainer>
          <Title className={'w-full text-xl ' + styles.hero__heading}>Creative Milk</Title>
          <div className="w-full ml-2 pl-6">{fullName}</div> 
        </TileContainer>
        <Nav
          onClick={() => {
            return dropdownAction()
          }}
        />
        <InputSelect inputSearchList={searchResults} clear={clear} />
        <Button className="btn btn-neutral ml-4 text-left" onClick={clear}>reset</Button>
      </div>
      <hr className={`${styles.hr} drop-shadow-xl`} />
      {openDropdown && (
        <div className={`${styles.secondary_nav} p-8 shadow-md`}>
          test
          <div
            className={styles.close_secondary_nav}
            onClick={() => {
              dropdownAction()
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          hello
        </div>
      )}
    </div>
  )
}
// export default Heading

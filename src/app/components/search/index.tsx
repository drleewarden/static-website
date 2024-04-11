import React, { useState } from 'react'
import { IRecipes, IRecords } from '@/app/'

// import ReactAsyncSelect from 'react-select/async'

import styles from './Search.module.css'
import { websiteStore } from '@/app/store/websites.store'
import { COMPANIES } from '@/app/services/allPlacesWorked'

interface IProps {
  inputSearchList(searchVal: string): any
  clear: () => void
}
const InputSelect: React.FC<IProps> = ({ inputSearchList, clear }) => {
  const [inputValue, setInputValue] = useState('')
  const { selectedWebsite, setActiveList } = websiteStore((state) => ({
    selectedWebsite: state.selectedWebsite,
    setActiveList: state.setActiveList
}))
  const filterArr = (arr: IRecords[], text: string) => {
    const results = arr.filter((item) => item.name && item.name.toLowerCase().includes(text.toLowerCase()))
    return results
  }
  const searchBox = async (evt: any) => {
    evt.preventDefault()
    const val = typeof evt === 'string' ? evt : evt.target.value
    setInputValue(val)
   
    // check there are 3 characters before search
    if (val.length >= 3) {
      inputSearchList(val)
      setActiveList(filterArr(COMPANIES, val))
      console.log('val:', filterArr(COMPANIES, val))
      // check there is a result
    } else {
      clear()
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.search}
        name="search"
        id="search"
        placeholder="filter results..."
        value={inputValue}
        onChange={searchBox}
      />
    </div>
  )
}
export default InputSelect

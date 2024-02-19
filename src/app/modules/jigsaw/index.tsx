"use client"
import React, { ReactNode } from 'react'

import { Card } from '../../components/card'
import styles from '../../styles/Home.module.scss'
import { IRecipes, IRecords } from '@/app/'

const RECIPE = 'recipe'
const WEB = 'website'

interface IProps {
  type: string
  record: IRecords[]// | IRecipes
  searchCallback?(val: string): void
  children?: ReactNode
  classN?: string
}

export const Jigsaw: React.FC<IProps> = ({ type, record }) => {


  // const [allActiveCards, setAllActiveCards] = useState<boolean[]>([])
  // const [activeCard, setActiveCard] = useState(false)


  const filterArr = (arr: IRecords[], text: string) => {
    const results = arr.filter((item) => item.name && item.name.toLowerCase().includes(text.toLowerCase()))
    return results
  }


  return (
    <div className={styles.grid + ' w-full container-home'}>
      {/* <>
        {type === RECIPE && record?.recipes?.length > 1 ? (
            record?.recipes[0].name
          records.recipes.map((recipe: IRecords, index: number) => {
            return <Card key={index} url={'recipes'} cardObject={recipe} ind={index} />
          })) : (
          <div style={{ position: 'relative' }}>
            <div className="title" style={{ position: 'absolute', top: '0' }}></div>
          </div>
        )}
      </> */}
      {
        type === WEB &&
        <div className={styles.grid + ' container-home'}>
          {Array.isArray(record) && record.length > 1 ? (
            record.map((job: IRecords, index: number) => {
              return <Card key={index} url={'website'} cardObject={job} ind={index} />
            })) : (
            <div style={{ position: 'relative' }}>
              {record.length === 1 && record[0].image && record[0]?.name && <img src={`images/${record[0].image}`} style={{ position: 'initial' }} alt={'Picture of the  ' + record[0]?.name} />}
              <div className="title" style={{ position: 'absolute', top: '0' }}>hello world</div>
            </div>
          )}
        </div>
      }</div>
  )
}
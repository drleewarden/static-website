"use client"
import React, { ReactNode } from 'react'
// import Image from 'next/image'
import { Card } from '../../components/card'
import styles from '../../styles/Home.module.scss'
import { IRecipes, IRecords } from '@/app/'
// import { singleImage } from './styles'
// import { style } from './jigsaw.module.scss'

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
              <div className="title singleImage" >
                <h2>1 result found</h2>
                <p>{record[0]?.name}</p>
                <p>find out more </p>
              </div>
            </div>
          )}
        </div>
      }</div>
  )
}
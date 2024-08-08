import React, { ReactElement } from 'react'
import { COMPANIES } from '../services/allPlacesWorked'

const Skills = () => {
  const skills = (): string[] => {
    const list: any = []
    COMPANIES.map((item) => {
      item?.technical?.map((item) => {
        list.push(item)
      })
    })
    return Array.from(new Set(list))
  }

  const row = (item: string, index: number): ReactElement => {
    const colour = index === 3 ? 'grey' : index === 19 ? 'red' : 'white'
    return (
      <div style={{ backgroundColor: colour }} key={index} className="p-2">
        {item}
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-5xl font-mono">Skills:</h1>
      <div className="flex font-mono w-3/4 flex-wrap">
        {skills().map((item, index) => row(item, index))}
      </div>
    </div>
  )
}

export default Skills

import { Heading } from '@/app/components/heading'
import React, { ReactNode } from 'react'



export const MainTemplate = ({ children }: {
  children: React.ReactNode
}): JSX.Element => {

  return (
    <main className="flex min-h-screen w-100 flex-col items-center justify-between">
      <Heading classN="cm-container" />
      {children}
    </main>
  )

}
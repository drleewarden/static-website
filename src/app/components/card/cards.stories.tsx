import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from './'

export default {
  title: 'Components/ChartLegend',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  cardObject: {
    dates: '02.2021 - 11.2021',
    name: 'BOM',
    id: 'bom',
    website: 'https://mdbwip.bom.gov.au/murray-darling-basin/',
    position: 'Tech Lead Frontend Developer on MDBWIP.',
    description: `Primarily worked on the Murray Darling Basin Water Project.
      Lead the frontend team in delivering a website that was accessible, responsive and flexible to fit with all other systems in BOM.`,
    technical: [
      'Jenkins',
      'serverless',
      'Next.JS',
      'React',
      'Mobx',
      'zod',
      'Zastand',
      'GIT',
      'AWS',
    ],
    image: 'bom-cover.jpg',
    colour: 'pink',
  },
  url: '#2461E5',
}

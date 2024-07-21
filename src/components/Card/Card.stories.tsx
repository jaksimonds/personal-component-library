import type { Meta, StoryObj } from '@storybook/react'
import Card from './index'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
}

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    iconCard: false,
    name: '',
    heading: 'Heading',
    headingClass: '',
    srHeading: false,
    content: 'Intro paragraph goes here.',
    cta: {
      href: 'https://jaksimonds.dev/',
      text: 'Link',
      target: '_blank',
    },
  },
}

export default meta

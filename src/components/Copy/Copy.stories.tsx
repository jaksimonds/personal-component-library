import type { Meta, StoryObj } from '@storybook/react'
import Copy from './index'

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
}

type Story = StoryObj<typeof Copy>;

export const Primary: Story = {
  args: {
    heading: 'Heading',
    headingClass: '',
    intro: 'Intro paragraph goes here.',
    children: 'this is for some extra content',
    link: {
      href: 'https://jaksimonds.dev/',
      icon: '',
      text: 'Link',
      target: '_blank',
    },
  },
}

export default meta

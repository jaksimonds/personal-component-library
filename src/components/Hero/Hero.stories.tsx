import type { Meta, StoryObj } from '@storybook/react'
import Hero from './index'

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
}

type Story = StoryObj<typeof Hero>

export const Primary: Story = {
  args: {
    heading: 'Heading',
    headingClass: '',
    url: 'https://jaksimonds.dev/',
    intro: 'Intro paragraph goes here.',
    image: 'https://api.jaksimonds.dev/assets/culvers-thumbnail.webp',
    simple: false,
  }
}

export default meta
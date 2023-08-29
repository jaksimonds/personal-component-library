import type { Meta, StoryObj } from '@storybook/react'
import TwoColumnCallout from './index'

const meta: Meta<typeof TwoColumnCallout> = {
  title: 'Components/TwoColumnCallout',
  component: TwoColumnCallout,
}

type Story = StoryObj<typeof TwoColumnCallout>

export const Primary: Story = {
  args: {
    heading: 'Heading',
    headingClass: '',
    copy: 'This is a collection of copy.',
    slug: 'slug',
    url: 'https://jaksimonds.dev/',
    image: 'https://api.jaksimonds.dev/assets/culvers-thumbnail.webp',
    alternate: false,
    children: 'extra content',
    loading: 'eager'
  }
}

export default meta
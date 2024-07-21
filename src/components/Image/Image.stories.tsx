import type { Meta, StoryObj } from '@storybook/react'
import Image from './index'

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
}

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    className: 'img-responsive',
    src: 'https://api.jaksimonds.dev/assets/culvers-thumbnail.webp',
    alt: 'test alt',
    width: 1700,
    height: 1060,
    loading: 'eager',
  },
}

export default meta

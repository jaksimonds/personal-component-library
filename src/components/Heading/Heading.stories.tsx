import type { Meta, StoryObj } from '@storybook/react'
import Heading from './index'

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
}

type Story = StoryObj<typeof Heading>

export const Primary: Story = {
  args: {
    level: 1,
    className: 'test',
    children: 'Heading'
  }
}

export default meta
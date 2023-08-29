import type { Meta, StoryObj } from '@storybook/react'
import Footer from './index'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
}

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {}
}

export default meta
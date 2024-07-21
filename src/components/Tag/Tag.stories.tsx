import type { Meta, StoryObj } from '@storybook/react'
import Tag from './index'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
}

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    label: 'Tag Label',
  },
}

export default meta

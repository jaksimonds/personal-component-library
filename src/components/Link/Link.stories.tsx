import type { Meta, StoryObj } from '@storybook/react'
import Link from './index'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
}

type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    className: 'test',
    href: 'https://jaksimonds.dev/',
    children: 'Link',
    target: '_blank',
    hideExternal: false,
  }
}

export default meta